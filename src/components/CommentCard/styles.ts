import { styled } from "@/styles";

export const CommentCardContainer = styled('div', {
    background: '$gray700',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',
    padding: '$6',
});

export const PersonalInformation = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
});

export const UserDetails = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '$4',
});

export const BookDetails = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '$5',

    a: {
        display: 'flex',
    }
});

export const BookContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',
});

export const CompactDetails = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});