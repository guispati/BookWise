import { styled } from "@/styles";

export const LatestRatingsContainer = styled('section', {
    section: {
        marginTop: '$4',
        display: 'flex',
        flexDirection: 'column',
        gap: '$3',
    },
});

export const YourLatestReadingContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    marginBottom: '$10',
});


export const YourLatestReadingTitle = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});