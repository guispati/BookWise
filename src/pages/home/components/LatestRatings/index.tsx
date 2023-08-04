import { CommentCard, RatingWithAuthorAndBook } from "@/components/CommentCard";
import { Text } from "@/components/Typography/Text";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { LatestRatingsContainer } from "./styles";

export function LatestRatings() {
    const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(
        ["latest-ratings"],
        async () => {
            const { data } = await api.get("/ratings/latest");
            return data?.ratings || [];
        }
    );

    return (
        <LatestRatingsContainer>
            <Text size="sm">Avaliações mais recentes</Text>

            <section>
                {ratings?.map(rating => (
                    <CommentCard key={rating.id} rating={rating} />
                ))}
            </section>
        </LatestRatingsContainer>
    );
}