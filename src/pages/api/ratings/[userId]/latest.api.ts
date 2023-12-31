import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../auth/[...nextauth].api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET")
        return res.status(405).json({ message: "Not allowed" });

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res));

    if (!session)
        return res.status(401).end();

    const ratings = await prisma.rating.findFirst({
        where: {
            user_id: String(session?.user.id),
        },
        orderBy: {
            created_at: "desc",
        },
        include: {
            book: true,
        },
    });

    return res.json({ ratings });
};