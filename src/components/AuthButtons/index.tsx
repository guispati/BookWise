import Image from "next/image";
import { AuthButton, Container } from "./styles";
import Google from "../../assets/Google.svg";
import Github from "../../assets/Github.svg";
import Rocket from "../../assets/Rocket.svg";

type Service = "google" | "github" | "visitor";

interface AuthButtonsProps {
    canGuest?: boolean;
    callbackUrl?: string;
    service: Service;
}

export function AuthButtons({ canGuest, callbackUrl, service }: AuthButtonsProps) {
    function handleSignIn(service: Service) {
        console.log("oi");
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

            <AuthButton onClick={() => handleSignIn("google")}>
                <Image src={Rocket} alt="Acessar como visitante" width={32} height={32} />
                Acessar como visitante
            </AuthButton>
        </Container>
    );
};