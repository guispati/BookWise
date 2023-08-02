import { styled } from "@/styles";

export const Container = styled('div', {
    display: "flex",
    flexDirection: "column",
    gap: "$4",
});

export const AuthButton = styled('button', {
    display: "flex",
    alignItems: "center",
    gap: "$5",
    background: "$gray600",
    border: "none",
    borderRadius: 8,
    padding: "$6 $5",
    color: "$gray200",
    fontWeight: "$bold",
    fontSize: "$lg",
    transition: "0.1s",

    "&:hover": {
        background: "$gray500",
    },
});