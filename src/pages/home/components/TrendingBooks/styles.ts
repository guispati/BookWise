import { styled } from "@/styles";
import Link from "next/link";

export const TrendingBooksContainer = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',

    section: {
        display: 'flex',
        flexDirection: 'column',
        gap: '$3',
    }
});

export const TrendingBooksTitle = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
});

export const SeeMoreLink = styled(Link, {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    fontSize: '$sm',
    fontWeight: '$bold',
    color: '$purple100',
    textDecoration: 'none',
});