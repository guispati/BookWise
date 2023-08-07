import { styled } from "@/styles";
import Link from "next/link";

export const ProfileContainer = styled('section', {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '4rem',
    height: '100%',
});

export const BackButton = styled(Link, {
    display: 'flex',
    alignItems: 'center',
    gap: '$3',
    textDecoration: 'none',
    fontWeight: "$bold",
    marginBottom: '$10',
    borderRadius: 4,
    transition: "0.2s",
    background: "transparent",
    padding: "$2 $3",
    width: 'fit-content',

    '&:hover': {
        background: 'rgba(230, 232, 242, 0.04)',
    }
});