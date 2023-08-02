import { AuthButtons } from "@/components/AuthButtons";
import { Heading } from "@/components/Typography/Heading";
import { Text } from "@/components/Typography/Text";
import { NextSeo } from "next-seo";
import { Container, LoginSection, LogoSection } from "./styles";

export default function SignIn() {
    return (
        <Container>
            <NextSeo
                title='Login | BookWise'
                description='BookWise é uma aplicação web para avaliação e gerenciamento de leituras.'
            />

            <LogoSection />
            <LoginSection>
                <Heading size="lg" color="gray-200">Boas vindas!</Heading>
                <Text color="gray-200">Faça seu login ou acesse como visitante.</Text>

                <AuthButtons />
            </LoginSection>
        </Container>
    );
}