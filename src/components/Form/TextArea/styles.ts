import { styled } from '@/styles';

export const TextAreaContainer = styled('div', {
    padding: '0.875rem 1.25rem',
    background: '$gray800',
    border: '1px solid $gray500',
    borderRadius: 4,
    display: 'flex',
    flexDirection: 'column',

    '&:focus-within': {
        color: '$green200',
    },

    textarea: {
        background: '$gray800',
        border: 0,
        width: '100%',
        height: '100%',
        fontSize: '$sm',
        color: '$gray100',
        resize: 'none',
        minHeight: '8.5rem',

        '&::placeholder': {
            color: '$gray400',
        },
      
        '&:focus': {
            outline: 'none',
        },
    },

    span: {
        textAlign: 'right',
        fontSize: '$xs',
        color: '$gray400',
    }
});