import { Heading } from "../Typography/Heading";
import { PageTitleContainer } from "./styles";

interface PageTitleProps {
    Icon: React.ElementType;
    text: string;
}

export function PageTitle({ Icon, text }: PageTitleProps) {
    return (
        <PageTitleContainer>
            <Icon width={32} height={32} />
            <Heading size="lg">{text}</Heading>
        </PageTitleContainer>
    );
}