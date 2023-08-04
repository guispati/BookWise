import { Book, Rating, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../Avatar";
import { RatingStars } from "../RatingStars";
import { Heading } from "../Typography/Heading";
import { Text } from "../Typography/Text";
import { BookContent, BookDetails, CommentCardContainer, PersonalInformation, UserDetails } from "./styles";

export type RatingWithAuthorAndBook = Rating & {
    user: User;
    book: Book;
}

interface CommentCardProps {
    rating: RatingWithAuthorAndBook;
}

export function CommentCard({ rating }: CommentCardProps) {
    return (
        <CommentCardContainer>
            <UserDetails>
                <PersonalInformation>
                    <Link href={`/profile/${rating.user_id}`}>
                        <Avatar src={rating.user.avatar_url!} alt={rating.user.name} />
                    </Link>
                    <div>
                        <Text> {rating.user.name} </Text>
                        <Text size='sm' color='gray-400'>Hoje</Text>
                    </div>
                </PersonalInformation>
                <RatingStars rating={rating.rate} />
            </UserDetails>
            <BookDetails>
                <Link href={`/explore?book=${rating.book_id}`}>
                    <Image
                        width={108}
                        height={152}
                        alt="book"
                        src={rating.book.cover_url}
                    />
                </Link>

                <BookContent>
                    <div>
                        <Heading size='xs'>{rating.book.name}</Heading>
                        <Text size='sm' color='gray-400'>{rating.book.author}</Text>
                    </div>

                    <Text size='sm' color='gray-300'>{rating.book.summary}</Text>
                </BookContent>
            </BookDetails>
        </CommentCardContainer>
    );
}