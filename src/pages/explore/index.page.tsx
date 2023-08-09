import * as z from 'zod';
import { Input } from "@/components/Form/Input";
import { PageTitle } from "@/components/PageTitle";
import { Tag } from "@/components/Tag";
import { api } from "@/lib/axios";
import { Category } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { Binoculars } from "phosphor-react";
import { BooksContainer, ExploreContainer, ExploreHeading, TagsContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { BookWithAverageRating } from '../home/components/TrendingBooks';
import { NextSeo } from 'next-seo';
import { BookCard } from '@/components/BookCard';

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
            const categoriesArray = JSON.stringify(selectedCategories);
            const { data } = await api.get(
                `/books?categories=${categoriesArray}&name=${inputSearchBook}`
            );
            return data?.books || [];
        }
    );

    const { register, watch } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });

    const query = watch('query');

    useEffect(() => {
        setInputSearchBook(watch('query'));        
    }, [query]);

    function handleSelectCategory(categoryId: string | null) {
        setSelectedCategories((prevCategories) => {
            if (categoryId) {
                if (prevCategories.includes(categoryId)) {
                    return prevCategories.filter((category) => category !== categoryId);
                } else {
                    return [...prevCategories, categoryId];
                }
            }
            return [];
        });
    }

    return (
        <ExploreContainer>
            <NextSeo
                title='Explorar | BookWise'
                description='BookWise é uma aplicação web para avaliação e gerenciamento de leituras.'
            />

            <ExploreHeading>
                <PageTitle Icon={Binoculars} text="Explorar" />
                <Input type="text" placeholder="Buscar livro ou autor" inputName="query" register={register} />
            </ExploreHeading>

            <TagsContainer>
                <Tag
                    active={selectedCategories.length === 0}
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
            
            <BooksContainer>
                {books?.map((book) => (
                    <BookCard key={book.id} book={book} variant='lg' />
                ))}
            </BooksContainer>
        </ExploreContainer>
    );
}