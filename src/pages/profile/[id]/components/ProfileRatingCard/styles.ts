import { styled } from "@/styles";

export const ProfileRatingCardContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
});

export const CardContent = styled('div', {
    background: '$gray700',
    padding: '$6',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',

    img: {
        height: '100%',
    }
});

export const BookDetailsContainer = styled('div', {
    display: 'flex',
    gap: '$6',
});

export const BookDetailsContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});