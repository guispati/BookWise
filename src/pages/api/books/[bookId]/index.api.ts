import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET")
        return res.status(405).json({ message: "Not allowed" });

    const bookId = String(req.query.bookId);

    const book = await prisma.book.findUnique({
        where: {
            id: bookId,
        },
        include: {
            categories: {
                include: {
                    category: {
                        select: {
                            name: true,
                        },
                    }
                },
            },
            ratings: {
                include: {
                    user: true,
                },
                orderBy: {
                    created_at: "desc",
                },
            },
        },
    });

    if (!book)
        return res.status(404).json({ message: 'Book not found' });

    const ratingTotal = book.ratings.reduce((acc, rating) => acc + rating.rate, 0);
    const averageRating = ratingTotal / book.ratings.length;
      
    return res.status(200).json({
        book: {
            ...book,
            averageRating,
        }
    });
}