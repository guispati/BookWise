import { styled } from "@/styles";

export const ExploreContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
});

export const ExploreHeading = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
});

export const TagsContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
});

export const BooksContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '$5',
});