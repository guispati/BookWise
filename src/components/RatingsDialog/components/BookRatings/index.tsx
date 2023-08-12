import { Text } from "@/components/Typography/Text";
import { BookRatingsContainer, RatingsContainer } from "./styles";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { RatingCard } from "../RatingCard";
import { RatingWithAuthor } from "../..";
import { LoginDialog } from "@/components/LoginDialog";
import { RatingForm } from "../RatingForm";

interface BookRatingsProps {
    bookId: string;
    ratings: RatingWithAuthor[];
}

export function BookRatings({ bookId, ratings }: BookRatingsProps) {
    const { data: session } = useSession();
    const [showRatingForm, setShowRatingForm] = useState(false);

    const user = session?.user;

    function handleRate() {
        if (!user) return;
        setShowRatingForm((oldState) => !oldState);
    };

    const showRatingButton = user !== undefined;

    return (
        <BookRatingsContainer>
            <header>
                <Text size='sm' color='gray-200'>Avaliações</Text>
                {showRatingButton ? (
                    <button onClick={handleRate}>Avaliar</button>
                ) : (
                    <LoginDialog>
                        <button onClick={handleRate}>Avaliar</button>
                    </LoginDialog>
                )}
            </header>

            <RatingsContainer>
                {showRatingForm && (
                    <RatingForm bookId={bookId} onCancel={() => setShowRatingForm(false)} />
                )}

                {ratings.map(rating => (
                    <RatingCard key={rating.id} rating={rating} />
                ))}
            </RatingsContainer>
        </BookRatingsContainer>
    );
}