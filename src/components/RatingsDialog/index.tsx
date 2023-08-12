import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren, useEffect, useState } from "react";
import { BookOpen, BookmarkSimple, X } from "phosphor-react";
import { useRouter } from "next/router";
import { BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay, InfoItem } from "./styles";
import { Heading } from "../Typography/Heading";
import { Text } from "../Typography/Text";
import { RatingStars } from "../RatingStars";
import { BookRatings } from "./components/BookRatings";
import { useQuery } from "@tanstack/react-query";
import { BookWithAverageRating } from "@/pages/home/components/TrendingBooks";
import { CategoriesOnBooks, Category, Rating, User } from "@prisma/client";
import { api } from "@/lib/axios";

export type RatingWithAuthor = Rating & {
    user: User;
}

export type RatingWithAuthorAndBook = BookWithAverageRating & {
    ratings: RatingWithAuthor[];
    categories: (CategoriesOnBooks & {
        category: Category;
    })[];
}
interface RatingsDialogProps {
    bookId: string;
}

export function RatingsDialog ({ bookId, children }: PropsWithChildren & RatingsDialogProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const paramBookId = router.query.book as string;

    useEffect(() => {
        if (paramBookId === bookId) {
            setOpen(true);
        }
    }, [bookId, paramBookId]);

    const { data: book } = useQuery<RatingWithAuthorAndBook>(
        ["book", bookId],
        async () => {
            const { data } = await api.get(`/books/${bookId}`);
            return data.book ?? {};
        },
        {
            enabled: open,
        }
    );

    const ratingsLength = book?.ratings?.length ?? 0;
    const ratingsTextToPlural = ratingsLength === 1 ? "avaliação" : "avaliações";
    const ratingsText = `${ratingsLength} ${ratingsTextToPlural}`;
    const bookAverageRating = book?.averageRating ?? 0;
    const categories = book?.categories?.map((x) => x?.category?.name)?.join(", ") ?? "";

    const onOpenChange = (open: boolean) => {
        if (open) {
            router.push(`/explore?book=${bookId}`, undefined, { shallow: true });
        } else {
            router.push("/explore", undefined, { shallow: true });
        }
    
        setOpen(open);
    };

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Trigger asChild>{children}</Dialog.Trigger>

            <Dialog.Portal>
                <DialogOverlay />

                <DialogContent>
                    <DialogClose>
                        <X size={24} />
                    </DialogClose>
                    {!book ? (
                        <h1>Carregando...</h1>
                    ) : (
                        <>
                            <BookDetailsWrapper>
                                <BookDetailsContainer>
                                    <BookImage
                                        width={171}
                                        height={242}
                                        alt={book.name}
                                        src={book.cover_url}
                                    />

                                    <BookContent>
                                        <div>
                                            <Heading size="sm">{book.name}</Heading>
                                            <Text color="gray-300">{book.author}</Text>
                                        </div>

                                        <div>
                                            <RatingStars rating={bookAverageRating} />
                                            <Text color="gray-400" size="sm">
                                                {ratingsText}
                                            </Text>
                                        </div>
                                    </BookContent>
                                </BookDetailsContainer>

                                <BookInfos>
                                    <InfoItem>
                                        <BookmarkSimple width={24} height={24} />
                                        <div>
                                            <Text size='sm' color="gray-300">Categoria</Text>
                                            <Heading size="xs" color="gray-200">{categories}</Heading>
                                        </div>
                                    </InfoItem>
                                    <InfoItem>
                                        <BookOpen width={24} height={24} />
                                        <div>
                                            <Text size='sm' color="gray-300">Páginas</Text>
                                            <Heading size="xs" color="gray-200">{book.total_pages}</Heading>
                                        </div>
                                    </InfoItem>
                                </BookInfos>
                            </BookDetailsWrapper>

                            <BookRatings bookId={bookId} ratings={book.ratings} />
                        </>
                    )}
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
};