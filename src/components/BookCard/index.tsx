import { BookWithAverageRating } from "@/pages/home/components/TrendingBooks";
import Image from "next/image";
import { RatingsDialog } from "../RatingsDialog";
import { RatingStars } from "../RatingStars";
import { Heading } from "../Typography/Heading";
import { Text } from "../Typography/Text";
import { BookCardContainer, BookDetails, ReadBadge } from "./styles";

interface BookCardProps {
    book: BookWithAverageRating;
    variant?: "lg" | "md";
}

export function BookCard({ book, variant = "md" }: BookCardProps) {
    const imageDimensions = {
        md: {
            width: 64,
            height: 94,
        },
        lg: {
            width: 108,
            height: 152,
        },
    };
      
    return (
        <RatingsDialog bookId={book.id}>
            <BookCardContainer>
                <Image width={imageDimensions[variant].width} height={imageDimensions[variant].height} alt={book.name} src={book.cover_url} />
                <BookDetails>
                    <div>
                        <Heading size='xs'>{book.name}</Heading>
                        <Text size="sm" color="gray-400">
                            {book.author}
                        </Text>
                        {book.read && <ReadBadge>LIDO</ReadBadge>}
                    </div>

                    <RatingStars rating={book.averageRating} />
                </BookDetails>
            </BookCardContainer>
        </RatingsDialog>
    );
}