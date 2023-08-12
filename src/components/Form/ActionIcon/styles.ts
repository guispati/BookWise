import { styled } from "@/styles";

export const ActionIconContainer = styled('button', {
    border: 0,
    borderRadius: 4,
    background: '$gray600',
    padding: '$2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s',

    '&:hover': {
        background: '$gray500',
    },

    variants: {
        color: {
            'purple100': {
                color: '$purple100',
            },
            'green100': {
                color: '$green100',
            }
        }
    }
});