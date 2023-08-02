import { useSession } from 'next-auth/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { Container } from './styles';

export default function Home() {
    const session = useSession();
    const router = useRouter();

    const isSignedIn = session.status === 'authenticated';

    if (!isSignedIn) {
        router.push('/sign-in')
    }

    return (
        <>
            <NextSeo
                title='Home | BookWise'
                description='BookWise é uma aplicação web para avaliação e gerenciamento de leituras.'
            />

            <Container>
                <h1>Oi</h1>
            </Container>
        </>
    );
}