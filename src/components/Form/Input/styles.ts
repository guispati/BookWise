import { styled } from "@/styles";

export const InputContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    background: '$gray800',
    color: '$gray500',
    border: '1px solid currentColor',
    borderRadius: 4,
    padding: '$4 $5',
    
    '&:focus-within': {
        color: '$green100',
    },

    input: {
        width: '100%',
        background: 'none',
        border: 0,
        color: '$gray200',
        fontSize: '$sm',

        "&::placeholder": {
            color: "$gray400",
        },

        '&:focus': {
            outline: 'none',
        }
    }
});