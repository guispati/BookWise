import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { LoginDialogClose, LoginDialogContainer, LoginDialogContent, LoginDialogOverlay } from "./styles";
import { X } from "phosphor-react";
import { Heading } from "../Typography/Heading";
import { AuthButtons } from "../AuthButtons";

export function LoginDialog({ children }: PropsWithChildren) {
    const router = useRouter();
    const paramBookId = router.query.book as string;

    const callbackUrl = paramBookId ? `/explore?book=${paramBookId}` : "/explore";

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>{children}</Dialog.Trigger>

            <Dialog.Portal>
                <LoginDialogOverlay />

                <LoginDialogContainer>
                    <LoginDialogClose>
                        <X size={24} />
                    </LoginDialogClose>

                    <LoginDialogContent>
                        <Heading size="xs" color="gray-200">
                            Faça login para deixar sua avaliação
                        </Heading>

                        <AuthButtons callbackUrl={callbackUrl} />
                    </LoginDialogContent>
                </LoginDialogContainer>
            </Dialog.Portal>
        </Dialog.Root>
    );
};