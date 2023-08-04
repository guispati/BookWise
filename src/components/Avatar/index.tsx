import { AvatarContainer, AvatarImage } from "./styles";

interface AvatarProps {
    size?: "sm" | "md" | "lg";
    src: string;
    alt: string;
}

export function Avatar({ size = "md", src, alt }: AvatarProps) {
    return (
        <AvatarContainer size={size}>
            <AvatarImage src={src} alt={alt} width={72} height={72} />
        </AvatarContainer>
    );
}