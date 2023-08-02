import { ComponentProps, PropsWithChildren } from "react";
import { Container } from "./styles";

type TextProps = ComponentProps<typeof Container> & PropsWithChildren;

export function Text({ children, ...rest }: TextProps) {
    return (
        <Container {...rest}>{children}</Container>
    );
};