import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET")
        return res.status(405).json({ message: "Not allowed" });

    const { categories: queryCategories } = req.query as {
        categories?: string[];
        name?: string;
    }

    let whereQuery = {} as Prisma.BookWhereInput;

    if (queryCategories && queryCategories.length) {
        whereQuery = {
            categories: {
                some: {
                    categoryId: {
                        in: queryCategories,
                    },
                },
            },
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

    const booksWithAverageRating = books.map((book) => {
        const ratingTotal = book.ratings.reduce((acc, rating) => acc + rating.rate, 0);
        const averageRating = ratingTotal / book.ratings.length;

        return {
            id: book.id,
            author: book.author,
            cover_url: book.cover_url,
            name: book.name,
            summary: book.summary,
            rate: averageRating,
        }
    });

    return res.status(200).json({ books: booksWithAverageRating });
}