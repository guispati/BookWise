import Image from "next/image";
import { AuthButton, Container } from "./styles";
import Google from "../../assets/Google.svg";
import Github from "../../assets/Github.svg";
import Rocket from "../../assets/Rocket.svg";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

type Services = "google" | "github" | "guest";

interface AuthButtonsProps {
    canGuest?: boolean;
    callbackUrl?: string;
}

export function AuthButtons({ canGuest, callbackUrl }: AuthButtonsProps) {
    const router = useRouter();

    function handleSignIn(service: Services) {
        switch (service) {
            case "google":
                signIn("google", { callbackUrl });
            break;
            case "github":
                signIn("github", { callbackUrl });
            break;
            case "guest":
                router.push("/");
            break;
        }
    }

    return (
        <Container>
            <AuthButton onClick={() => handleSignIn("google")}>
                <Image src={Google} alt="Login com o Google" width={32} height={32} />
                Entrar com Google
            </AuthButton>

            <AuthButton onClick={() => handleSignIn("github")}>
                <Image src={Github} alt="Login com o Github" width={32} height={32} />
                Entrar com Github
            </AuthButton>

            {canGuest && (
                <AuthButton onClick={() => handleSignIn("guest")}>
                    <Image src={Rocket} alt="Acessar como visitante" width={32} height={32} />
                    Acessar como visitante
                </AuthButton>
            )}
        </Container>
    );
};