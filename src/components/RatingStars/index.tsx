import { Star } from "phosphor-react";
import { RatingStarsContainer } from "./styles";
import { useCallback, useState } from "react";

interface RatingStarsProps {
    size?: 'md' | 'lg';
    rating: number;
    setRating?: (rating: number) => void;
}

export function RatingStars({ size = 'md', rating, setRating }: RatingStarsProps) {
    const [previewValue, setPreviewValue] = useState(0);
    const isEditable = !!setRating;

    const ratingValue = isEditable ? previewValue : rating;

    const handleRatingChange = useCallback((value: number) => {
        if (isEditable) {
            setPreviewValue(value);
            setRating(value);
        }
    }, [isEditable, setPreviewValue, setRating]);

    return (
        <RatingStarsContainer size={size} isEditable={isEditable}>
            {Array.from({ length: 5 }).map((_, star) => (
                <Star
                    key={`star-${star}`}
                    weight={star + 1 <= ratingValue ? "fill" : "regular"}
                    onMouseEnter={() => handleRatingChange(star + 1)}
                    onMouseLeave={() => handleRatingChange(rating)}
                    onClick={() => handleRatingChange(star + 1)}
                />
            ))}
        </RatingStarsContainer>
    );
}