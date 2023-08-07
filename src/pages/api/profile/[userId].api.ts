import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

interface CategoryAmount {
    name: string;
    amount: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET")
        return res.status(405).json({ message: "Not allowed" });

    const id = String(req?.query?.userId);

    const user = await prisma.user.findUnique({
        where: {
            id,
        },
        include: {
            ratings: {
                include: {
                    book: {
                        include: {
                            categories: {
                                include: {
                                    category: true,
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    if (!user) {
        return res.status(404).json({
            message: 'User not found',
        });
    }

    let pagesReaded = 0;
    const authorsReaded: string[] = [];
    const mostReadedCategories: CategoryAmount[] = [];

    if (user?.ratings.length) {
        for (const rating of user.ratings) {
            pagesReaded += rating.book.total_pages || 0;

            if (!authorsReaded.includes(rating.book.author)) {
                authorsReaded.push(rating.book.author)
            }

            for (const category of rating.book.categories) {
                const categoryName = category.category.name;
                const categoryIndex = mostReadedCategories.findIndex(
                    (item) => item.name === categoryName,
                );

                if (categoryIndex === -1) {
                    mostReadedCategories.push({
                        name: categoryName,
                        amount: 1,
                    });
                } else {
                    mostReadedCategories[categoryIndex].amount += 1;
                }
            }
        }
    }

    const totalAuthorsReaded = authorsReaded?.length;
    const [mostReadedCategoriesSorted] = mostReadedCategories.sort(
        (a, b) => b.amount - a.amount,
    );

    const profileData = {
        user,
        info: {
            pagesReaded,
            totalAuthorsReaded,
            totalBooksRated: user?.ratings.length || 0,
            mostReadedCategory: mostReadedCategoriesSorted?.name || null,
        },
    }

    return res.status(200).json({ profile: profileData })
}