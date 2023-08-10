import { Text } from "@/components/Typography/Text";
import { BookRatingsContainer, RatingsContainer } from "./styles";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { RatingCard } from "../RatingCard";

export function BookRatings() {
    const { status } = useSession();
    const [showRatingForm, setShowRatingForm] = useState(false);

    const isAuthenticated = status === "authenticated";

    function handleRate() {
        if (!isAuthenticated) return;
        setShowRatingForm((oldState) => !oldState);
    };

    const showRatingButton = isAuthenticated;

    return (
        <BookRatingsContainer>
            <header>
                <Text size='sm' color='gray-200'>Avaliações</Text>
                {showRatingButton && (
                    <button onClick={handleRate}>Avaliar</button>
                )}
            </header>

            <RatingsContainer>
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
                <RatingCard />
            </RatingsContainer>
        </BookRatingsContainer>
    );
}