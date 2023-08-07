import { PageTitle } from "@/components/PageTitle";
import { Text } from "@/components/Typography/Text";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { CaretLeft, ChartLineUp } from "phosphor-react";
import { ProfileDetails } from "./components/ProfileDetails";
import { ProfileRatings } from "./components/ProfileRatings";
import { BackButton, ProfileContainer } from "./styles";

export default function Profile() {
    const router = useRouter();
    const { data: session } = useSession();

    const userId = router.query.id as string;

    const { data: profile } = useQuery(
        ["profile", userId],
        async () => {
            const { data } = await api.get(`/profile/${userId}`);
            return data?.profile || {};
        },
        {
            enabled: !!userId,
        }
    );

    const loggedUserId = session?.user.id;

    const isSelfProfile = loggedUserId === profile?.user.id;

    return (
        <main>
            <NextSeo
                title={`${profile ? profile?.user.name : 'Perfil'} | BookWise`}
                description='BookWise é uma aplicação web para avaliação e gerenciamento de leituras.'
            />

            {isSelfProfile ? (
                <PageTitle Icon={ChartLineUp} text="Perfil" />
            ) : (
                <BackButton href="/">
                    <CaretLeft width={20} height={20} />
                    <Text color='gray-200'> Voltar </Text>
                </BackButton>
            )}

            {!!profile ? (
                <ProfileContainer>
                    <ProfileRatings ratings={profile.user.ratings} />
                    <ProfileDetails profile={profile.user} info={profile.info} />
                </ProfileContainer>
            ) : (
                <h1>Carregando...</h1>
            )}
        </main>
    );
}