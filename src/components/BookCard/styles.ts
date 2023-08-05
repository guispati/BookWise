import { styled } from "@/styles";

export const BookCardContainer = styled('div', {
    background: '$gray700',
    borderRadius: 8,
    padding: '$4 $5',
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
});

export const BookDetails = styled('div', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});