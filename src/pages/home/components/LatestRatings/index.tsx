import { CommentCard, RatingWithAuthorAndBook } from "@/components/CommentCard";
import { Text } from "@/components/Typography/Text";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { CaretRight } from "phosphor-react";
import { SeeMoreLink } from "../TrendingBooks/styles";
import { LatestRatingsContainer, YourLatestReadingContainer, YourLatestReadingTitle } from "./styles";

export function LatestRatings() {
    const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(
        ["latest-ratings"],
        async () => {
            const { data } = await api.get("/ratings/latest");
            return data?.ratings || [];
        }
    );

    const { data: session } = useSession();

    const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>(
        ["latest-user-rating"],
        async () => {
            const { data } = await api.get(`/ratings/${session?.user.id}/latest`);
            return data?.ratings || null;
        },
        {
            enabled: !!session?.user.id,
        }
    );

    return (
        <LatestRatingsContainer>
            {latestUserRating && (
                <YourLatestReadingContainer>
                    <YourLatestReadingTitle>
                        <Text size="sm">Sua última leitura</Text>

                        <SeeMoreLink href={`/profile/${session?.user.id}`}>
                            Ver todas
                            <CaretRight width={16} height={16} />
                        </SeeMoreLink>
                    </YourLatestReadingTitle>

                    <CommentCard rating={latestUserRating} variant="compact" />
                </YourLatestReadingContainer>
            )}

            <Text size="sm">Avaliações mais recentes</Text>

            <section>
                {ratings?.map(rating => (
                    <CommentCard key={rating.id} rating={rating} />
                ))}
            </section>
        </LatestRatingsContainer>
    );
}