import { ComponentProps, PropsWithChildren } from "react";
import { Container } from "./styles";

type HeadingProps = ComponentProps<typeof Container> & PropsWithChildren;

export function Heading({ children, ...rest }: HeadingProps) {
    return (
        <Container {...rest}>{children}</Container>
    );
};