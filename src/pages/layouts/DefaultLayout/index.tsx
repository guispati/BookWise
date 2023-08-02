import { PropsWithChildren } from "react";
import { DefaultLayoutContainer } from "./styles";

export function DefaultLayout({ children }: PropsWithChildren) {
    return (
        <DefaultLayoutContainer>
            {children}
        </DefaultLayoutContainer>
    );
};