import { ComponentProps, PropsWithChildren } from "react";
import { TagContainer } from "./styles";

type TagProps = ComponentProps<typeof TagContainer> & PropsWithChildren & {
    active?: boolean;
};

export function Tag({ children, active = false, ...props }: TagProps) {
    return (
        <TagContainer active={active} {...props}>
            {children}
        </TagContainer>
    );
}