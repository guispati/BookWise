import { styled } from "@/styles";

export const DefaultLayoutContainer = styled("main", {
    width: "100%",
    height: "100vh",
    padding: '$5',
    margin: "0 auto",
    display: 'flex',
    gap: '6rem',
});

export const DefaultLayoutContent = styled("section", {
    width: '100%',
    margin: "0 auto",
    padding: '$10 6rem 0 0',
});