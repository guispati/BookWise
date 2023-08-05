import { BookCard } from "@/components/BookCard";
import { Text } from "@/components/Typography/Text";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { CaretRight } from "phosphor-react";
import { SeeMoreLink, TrendingBooksContainer, TrendingBooksTitle } from "./styles";

export interface BookWithAverageRating {
    id: string;
    author: string;
    cover_url: string;
    name: string;
    summary: string;
    averageRating: number;
}

export function TrendingBooks() {
    const { data: trendingBooks } = useQuery<BookWithAverageRating[]>(
        ["trending-books"],
        async () => {
            const { data } = await api.get("/books/trending");
            return data?.trendingBooks || [];
        }
    );

    return (
        <TrendingBooksContainer>
            <TrendingBooksTitle>
                <Text size='sm'>Livros populares</Text>
                <SeeMoreLink href="/explore">
                    Ver todos
                    <CaretRight width={16} height={16} />
                </SeeMoreLink>
            </TrendingBooksTitle>
            <section>
                {trendingBooks?.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </section>
        </TrendingBooksContainer>
    );
}