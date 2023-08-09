import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { buildNextAuthOptions } from '../auth/[...nextauth].api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET")
        return res.status(405).json({ message: "Not allowed" });

    const { categories: queryCategories, name: queryName } = req.query as {
        categories: string;
        name: string;
    }

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res));
  
    const userId = session?.user.id || undefined;

    const parsedCategories = JSON.parse(queryCategories);

    let whereQuery = {} as Prisma.BookWhereInput;

    if (parsedCategories && parsedCategories.length) {
        whereQuery = {
            categories: {
                some: {
                    categoryId: {
                        in: parsedCategories,
                    },
                },
            },
        }
    }

    
    if (queryName && queryName !== '') {
        whereQuery = {
            ...whereQuery,
            OR: [
                {
                    name: {
                        contains: queryName,
                    },
                },
                {
                    author: {
                        contains: queryName,
                    },
                },
            ],
        }
    }

    const books = await prisma.book.findMany({
        where: whereQuery,
        include: {
            ratings: {
                select: {
                    rate: true,
                },
            },
        },
    });

    const booksWithAverageRating = await Promise.all(books.map(async (book) => {
        const ratingTotal = book.ratings.reduce((acc, rating) => acc + rating.rate, 0);
        const averageRating = ratingTotal / book.ratings.length;
        let ratingsCount = 0;

        if (userId) {
            ratingsCount = await prisma.rating.count({
                where: {
                    AND: [
                        {
                            user_id: userId,
                        },
                        {
                            book_id: book.id,
                        }
                    ]
                },
            });
        }
        
        const read = ratingsCount > 0;

        return {
            id: book.id,
            author: book.author,
            cover_url: book.cover_url,
            name: book.name,
            summary: book.summary,
            averageRating,
            read,
        }
    }));

    return res.status(200).json({ books: booksWithAverageRating });
}