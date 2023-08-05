import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET")
        return res.status(405).json({ message: "Not allowed" });

    const trendingBooks = await prisma.book.findMany({
        include: {
            ratings: {
                select: {
                    rate: true,
                },
            },
        },
        orderBy: {
            ratings: {
                _count: 'desc',
            },
        },
        take: 4,
    });

    const booksWithAverageRating = trendingBooks.map(book => {
        const ratingTotal = book.ratings.reduce((acc, rating) => acc + rating.rate, 0);
        const averageRating = ratingTotal / book.ratings.length
    
        return {
            id: book.id,
            author: book.author,
            cover_url: book.cover_url,
            name: book.name,
            summary: book.summary,
            averageRating,
        }
    });

    return res.json({ trendingBooks: booksWithAverageRating });
};