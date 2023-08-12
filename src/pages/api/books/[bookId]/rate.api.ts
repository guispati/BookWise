import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../auth/[...nextauth].api";
import { z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST")
        return res.status(405).json({ message: "Not allowed" });

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res));

    if (!session) return res.status(401).json({ message: 'User not authenticated' });

    const userId = session.user.id;

    const bookId = String(req.query.bookId);

    const rateBodySchema = z.object({
        description: z.string().max(450),
        rate: z.number().min(1).max(5),
    });

    const { description, rate } = rateBodySchema.parse(req.body);

    await prisma.rating.create({
        data: {
            book_id: bookId,
            description,
            rate,
            user_id: userId,
        },
    });

    return res.status(201).end();
}