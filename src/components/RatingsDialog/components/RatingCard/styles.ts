import { styled } from "@/styles";

export const RatingCardContainer = styled('div', {
    padding: '$6',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    gap: '$5',

    variants: {
        background: {
            "highlight": {
                background: '$gray600',
            },
            "default": {
                background: '$gray700',
            },
        }
    }
});

export const UserDetails = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    section: {
        display: 'flex',
        gap: '$4',
    }
});