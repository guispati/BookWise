import { PageTitle } from '@/components/PageTitle';
import { NextSeo } from 'next-seo';
import { ChartLineUp } from 'phosphor-react';
import { LatestRatings } from './components/LatestRatings';
import { TrendingBooks } from './components/TrendingBooks';
import { Content } from './styles';

export default function Home() {
    return (
        <main>
            <NextSeo
                title='Home | BookWise'
                description='BookWise é uma aplicação web para avaliação e gerenciamento de leituras.'
            />

            <PageTitle Icon={ChartLineUp} text="Início" />
            <Content>
                <LatestRatings />
                <TrendingBooks />
            </Content>
        </main>
    );
}