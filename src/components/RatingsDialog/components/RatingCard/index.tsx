import { Avatar } from "@/components/Avatar";
import { RatingCardContainer, UserDetails } from "./styles";
import Link from "next/link";
import { Heading } from "@/components/Typography/Heading";
import { Text } from "@/components/Typography/Text";
import { RatingStars } from "@/components/RatingStars";
import { RatingWithAuthor } from "../..";
import { dateFormatterRelativeToNow } from "@/utils/dateTimeFormatter";
import { useSession } from "next-auth/react";

interface RatingCardProps {
    rating: RatingWithAuthor;
}

export function RatingCard({ rating }: RatingCardProps) {
    const { data: session } = useSession();

    const isOwner = session?.user?.id === rating.user_id;

    const timeDistanceToNow = dateFormatterRelativeToNow(rating.created_at);

    return (
        <RatingCardContainer background={isOwner ? "highlight" : "default"}>
            <UserDetails>
                <section>
                    <Link href={`/profile/${rating.user_id}`}>
                        <Avatar alt="avatar" src={rating.user.avatar_url!} />
                    </Link>

                    <div>
                        <Heading size='xs'>{rating.user.name}</Heading>
                        <Text size='sm' color='gray-400'>{timeDistanceToNow}</Text>
                    </div>
                </section>

                <RatingStars rating={rating.rate} />
            </UserDetails>

            <Text size='sm' color='gray-300'>{rating.description}</Text>
        </RatingCardContainer>
    );
}