import { styled } from '@/styles';
import Link from 'next/link';

export const SidebarContainer = styled('nav', {
    background: `url('/images/sidebar-background.png')`,
    backgroundSize: 'cover',
    height: '95vh',
    width: '14.5rem',
    padding: '$10 0 $6 0',
    display: 'flex',
    borderRadius: 12,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
});

export const NavigationContainer = styled('ul', {
    marginTop: '4.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
});

export const NavItem = styled(Link, {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    color: '$gray400',
    padding: '$2 0',
    transition: '0.2s',

    '&:hover': {
        color: '$gray100',
    },
    
    '&::before': {
        content: "''",
        width: 4,
        height: 24,
        background: '$gradient-vertical',
        marginRight: '$1',
        borderRadius: '$full',
        transition: '0.2s',
        opacity: 0,
    },

    variants: {
        active: {
            true: {
                color: '$gray100',
                fontWeight: '$bold',
        
                '&::before': {
                    opacity: 1,
                },
            },
        },
    },
});

export const LoginButton = styled(Link, {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    color: '$gray200',
    fontWeight: '$bold',
    textDecoration: 'none',
    cursor: 'pointer',

    svg: {
        color: '$green100',
    }
});

export const UserInfo = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',

    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '$3',
        cursor: 'pointer',
    },

    svg: {
        cursor: 'pointer',
    }
});