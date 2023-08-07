import { RatingWithAuthorAndBook } from "@/components/CommentCard";
import { RatingStars } from "@/components/RatingStars";
import { Heading } from "@/components/Typography/Heading";
import { Text } from "@/components/Typography/Text";
import { dateFormatterRelativeToNow } from "@/utils/dateTimeFormatter";
import Image from "next/image";
import Link from "next/link";
import { BookDetailsContainer, BookDetailsContent, CardContent, ProfileRatingCardContainer } from "./styles";

interface ProfileRatingCardProps {
    rating: RatingWithAuthorAndBook;
}

export function ProfileRatingCard({ rating }: ProfileRatingCardProps) {
    const timeDistanceToNow = dateFormatterRelativeToNow(rating.created_at);

    return (
        <ProfileRatingCardContainer>
            <Text size='sm' color='gray-300'>{timeDistanceToNow}</Text>

            <CardContent>
                <BookDetailsContainer>
                    <Link href={`/explore?book=${rating.book.id}`}>
                        <Image src={rating.book.cover_url} alt={rating.book.name} width={98} height={134} />
                    </Link>

                    <BookDetailsContent>
                        <div>
                            <Heading size='sm'>{rating.book.name}</Heading>
                            <Text size='sm' color='gray-400'>{rating.book.author}</Text>
                        </div>

                        <RatingStars rating={rating.rate} />
                    </BookDetailsContent>
                </BookDetailsContainer>
                <Text size='sm' color='gray-300'>{rating.description}</Text>
            </CardContent>
        </ProfileRatingCardContainer>
    );
}