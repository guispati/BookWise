import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren, useEffect, useState } from "react";
import { BookOpen, BookmarkSimple, X } from "phosphor-react";
import { useRouter } from "next/router";
import { BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay, InfoItem } from "./styles";
import { Heading } from "../Typography/Heading";
import { Text } from "../Typography/Text";
import { RatingStars } from "../RatingStars";

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
                    
                    <>
                        <BookDetailsWrapper>
                            <BookDetailsContainer>
                                <BookImage
                                    width={171}
                                    height={242}
                                    alt="14 Hábitos de Desenvolvedores Altamente Produtivos"
                                    src="/_next/image?url=%2Fimages%2Fbooks%2F14-habitos-de-desenvolvedores-altamente-produtivos.png&w=256&q=75"
                                />

                                <BookContent>
                                    <div>
                                        <Heading size="sm">14 Hábitos de Desenvolvedores Altamente Produtivos</Heading>
                                        <Text color="gray-300">Zeno Rocha</Text>
                                    </div>

                                    <div>
                                        <RatingStars rating={4} />
                                        <Text color="gray-400" size="sm">
                                            3 avaliações
                                        </Text>
                                    </div>
                                </BookContent>
                            </BookDetailsContainer>

                            <BookInfos>
                                <InfoItem>
                                    <BookmarkSimple width={24} height={24} />
                                    <div>
                                        <Text size='sm' color="gray-300">Categoria</Text>
                                        <Heading size="xs" color="gray-200">Computação, educação</Heading>
                                    </div>
                                </InfoItem>
                                <InfoItem>
                                    <BookOpen width={24} height={24} />
                                    <div>
                                        <Text size='sm' color="gray-300">Páginas</Text>
                                        <Heading size="xs" color="gray-200">160</Heading>
                                    </div>
                                </InfoItem>
                            </BookInfos>
                        </BookDetailsWrapper>
                    </>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    );
};