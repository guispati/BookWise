import { styled } from "@/styles";

export const BookCardContainer = styled('div', {
    background: '$gray700',
    borderRadius: 8,
    padding: '$4 $5',
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    position: 'relative',
    cursor: 'pointer',
});

export const BookDetails = styled('div', {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const ReadBadge = styled('span', {
    position: 'absolute',
    display: 'block',
    background: '$green300',
    top: 0,
    right: 0,
    color: '$green100',
    fontWeight: '$bold',
    fontSize: '$xs',
    padding: '$1 $3',
    borderRadius: '0px 4px 0px 4px',
});