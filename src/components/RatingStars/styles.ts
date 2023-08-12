import { styled } from "@/styles";

export const RatingStarsContainer = styled('div', {
    display: 'flex',

    svg: {
        color: '$purple100',
    },

    variants: {
        size: {
            md: {
                gap: '$1',

                svg: {
                    width: 20,
                    height: 20,
                },
            },
            lg: {
                gap: '3px',

                svg: {
                    width: 28,
                    height: 28,
                },
            },
        },

        isEditable: {
            true: {
                cursor: 'pointer',
            },
        }
    },
});