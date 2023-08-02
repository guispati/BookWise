import { NextSeo } from 'next-seo';
import { Container } from './styles';

export default function Home() {
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