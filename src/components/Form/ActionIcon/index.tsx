import { ComponentProps, ReactNode } from "react";
import { ActionIconContainer } from "./styles";

interface ActionIconProps {
    icon: ReactNode;
    iconColor: 'purple100' | 'green100';
}

export function ActionIcon({ icon, iconColor, ...props }: ActionIconProps & ComponentProps<typeof ActionIconContainer>) {
    return (
        <ActionIconContainer {...props} color={iconColor}>
            {icon}
        </ActionIconContainer>
    );
}