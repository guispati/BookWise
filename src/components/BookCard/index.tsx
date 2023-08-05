import { BookWithAverageRating } from "@/pages/home/components/TrendingBooks";
import Image from "next/image";
import { RatingStars } from "../RatingStars";
import { Heading } from "../Typography/Heading";
import { Text } from "../Typography/Text";
import { BookCardContainer, BookDetails } from "./styles";

interface BookCardProps {
    book: BookWithAverageRating;
}

export function BookCard({ book }: BookCardProps) {
    return (
        <BookCardContainer>
            <Image width={64} height={94} alt={book.name} src={book.cover_url} />
            <BookDetails>
                <div>
                    <Heading size='xs'>{book.name}</Heading>
                    <Text size="sm" color="gray-400">
                        {book.author}
                    </Text>
                </div>

                <RatingStars rating={book.averageRating} />
            </BookDetails>
        </BookCardContainer>
    );
}