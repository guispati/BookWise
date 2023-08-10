import { styled } from "@/styles";

export const BookRatingsContainer = styled('div', {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '$10',
        marginBottom: '$4',

        button: {
            fontWeight: "$bold",
            color: '$purple100',
            borderRadius: 4,
            transition: "0.2s",
            background: "transparent",
            padding: "$2 $3",
            width: 'fit-content',
            border: 0,

            '&:hover': {
                background: 'rgba(230, 232, 242, 0.04)',
            }
        }
    }
});

export const RatingsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
});