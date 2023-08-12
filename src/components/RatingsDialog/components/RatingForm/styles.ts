import { styled } from "@/styles";

export const RatingFormContainer = styled('div', {
    background: '$gray700',
    padding: '$6',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',

    section: {
        display: 'flex',
        alignItems: 'center',
        gap: '$4',
    }
});

export const UserDetails = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const FormContainer = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
});

export const ActionsContainer = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '$2',
});