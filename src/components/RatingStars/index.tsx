import { Star } from "phosphor-react";
import { RatingStarsContainer } from "./styles";

interface RatingStarsProps {
    rating: number;
}

export function RatingStars({ rating }: RatingStarsProps) {
    return (
        <RatingStarsContainer>
            {Array.from({ length: 5 }).map((_, index) => (
                <Star
                    key={`star-${index}`}
                    weight={index + 1 <= rating ? "fill" : "regular"}
                />
            ))}
        </RatingStarsContainer>
    );
}