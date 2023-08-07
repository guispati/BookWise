import { styled } from "@/styles";

export const ProfileDetailsContainer = styled('div', {
    borderLeft: '1px solid $gray700',
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    gap: '$8',
});

export const UserInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$5',

    '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    "&::after": {
        content: "''",
        display: "block",
        width: 32,
        height: 4,
        background: "$gradient-horizontal",
        borderRadius: "$full",
        marginTop: '1.375rem',
    },
});

export const UserStatistics = styled('div', {
    padding: '$5 3.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '$10',
});

export const StatisticItem = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$5',
    
    svg: {
        color: '$green100',
    },
});