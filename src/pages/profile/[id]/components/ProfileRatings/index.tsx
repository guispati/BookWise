import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

import { ProfileRatingList, ProfileRatingsContainer } from "./styles";
import { useCallback, useEffect, useState } from 'react';
import { RatingWithAuthorAndBook } from '@/components/CommentCard';
import { ProfileRatingCard } from '../ProfileRatingCard';
import { Input } from '@/components/Form/Input';

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface ProfileRatingsProps {
    ratings: RatingWithAuthorAndBook[];
}

export function ProfileRatings({ ratings }: ProfileRatingsProps) {
    const [filteredRatings, setFilteredRatings] = useState<RatingWithAuthorAndBook[]>(ratings);

    const { register, watch } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    const query = watch('query');

    const fetchRatings = useCallback(async (query: string = "") => {
        const ratingsFilter = ratings.filter((rating) => {
            return rating.book.name.toLowerCase().includes(query.toLowerCase());
        });
        setFilteredRatings(ratingsFilter);
    }, []);

    useEffect(() => {
        fetchRatings(watch('query'));        
    }, [query, fetchRatings]);

    return (
        <ProfileRatingsContainer>
            <Input type="text" placeholder="Buscar conteúdo" {...register('query')} />

            <ProfileRatingList>
                {filteredRatings?.map(rating => (
                    <ProfileRatingCard key={rating.id} rating={rating} />
                ))}
            </ProfileRatingList>
        </ProfileRatingsContainer>
    );
}