import * as z from 'zod';
import { Input } from "@/components/Form/Input";
import { PageTitle } from "@/components/PageTitle";
import { Tag } from "@/components/Tag";
import { api } from "@/lib/axios";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Binoculars } from "phosphor-react";
import { ExploreContainer, ExploreHeading, TagsContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, useState } from 'react';
import { BookWithAverageRating } from '../home/components/TrendingBooks';

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export default function Explore() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [inputSearchBook, setInputSearchBook] = useState<string>("");

    const { data: categories } = useQuery<Category[]>(
        ["categories"],
        async () => {
            const { data } = await api.get("/categories");
            return data?.categories || [];
        }
    );

    const { data: books } = useQuery<BookWithAverageRating[]>(
        ["books", selectedCategories, inputSearchBook],
        async () => {
            const { data } = await api.get(
                `/books?categories=${selectedCategories}&name=${inputSearchBook}`
            );
            return data?.books || [];
        }
    );

    const { register } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    function handleSelectCategory(categoryId: string | null) {
        setSelectedCategories((prevCategories) => {
            if (categoryId && !prevCategories.includes(categoryId)) {
                return [...prevCategories, categoryId];
            }
            return prevCategories;
        });
    }

    return (
        <ExploreContainer>
            <ExploreHeading>
                <PageTitle Icon={Binoculars} text="Explorar" />
                <Input type="text" placeholder="Buscar conteúdo" {...register('query')} />
            </ExploreHeading>

            <TagsContainer>
                <Tag
                    active={!selectedCategories}
                    onClick={() => handleSelectCategory(null)}
                >
                    Todas
                </Tag>
                {categories?.map((category) => (
                    <Tag
                        key={category.id}
                        active={selectedCategories.includes(category.id)}
                        onClick={() => handleSelectCategory(category.id)}
                    >
                        {category.name}
                    </Tag>
                ))}
            </TagsContainer>
        </ExploreContainer>
    );
}