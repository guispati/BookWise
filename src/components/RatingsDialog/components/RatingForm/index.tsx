import { useSession } from "next-auth/react";
import { ActionsContainer, FormContainer, RatingFormContainer, UserDetails } from "./styles";
import { FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { RatingStars } from "@/components/RatingStars";
import { Heading } from "@/components/Typography/Heading";
import { Avatar } from "@/components/Avatar";
import { Check, X } from "phosphor-react";
import { TextArea } from "@/components/Form/TextArea";
import { ActionIcon } from "@/components/Form/ActionIcon";

interface RatingFormProps {
    bookId: string;
    onCancel: () => void;
}

export function RatingForm({ bookId, onCancel }: RatingFormProps) {
    const { data: session } = useSession();
    const user = session?.user;

    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(0);

    const queryClient = useQueryClient();

    const { mutateAsync: handleRate } = useMutation(
        async () => {
            await api.post(`/books/${bookId}/rate`, {
                description,
                rate: rate,
            });
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["book", bookId]);
                queryClient.invalidateQueries(["books"]);
                onCancel();
            },
        }
    );

    const submitDisabled = !description.trim() || !rate;

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (submitDisabled) return;
        await handleRate();
    };

    return (
        <RatingFormContainer>
            {user && (
                <UserDetails>
                    <section>
                    <Avatar alt={user.name} src={user.avatar_url} />
                    <Heading size="xs">{user.name}</Heading>
                    </section>

                    <RatingStars size="lg" rating={rate} setRating={setRate} />
                </UserDetails>
            )}

            <FormContainer onSubmit={handleSubmit}>
                <TextArea
                    placeholder="Escreva sua avaliação"
                    maxLength={450}
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
                />
                <ActionsContainer>
                    <ActionIcon
                        type="button"
                        onClick={onCancel}
                        iconColor="purple100"
                        icon={<X width={24} height={24} />}
                    />
                    <ActionIcon
                        iconColor="green100"
                        icon={<Check width={24} height={24} />}
                        disabled={submitDisabled}
                    />
                </ActionsContainer>
            </FormContainer>
        </RatingFormContainer>
    );
}