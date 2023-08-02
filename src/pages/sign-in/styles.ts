import { styled } from "@/styles";

export const Container = styled('div', {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
});

export const LogoSection = styled('div', {
    background: `url('/images/logo-background.png') no-repeat center`,
    backgroundSize: "cover",
    borderRadius: 10,
});

export const LoginSection = styled('div', {
    maxWidth: "372px",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    div: {
        marginTop: "$10",
    },
});