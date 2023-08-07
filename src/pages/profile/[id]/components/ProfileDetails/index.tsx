import { Avatar } from "@/components/Avatar";
import { Heading } from "@/components/Typography/Heading";
import { Text } from "@/components/Typography/Text";
import { User } from "@prisma/client";
import { BookmarkSimple, BookOpen, Books, UserList } from "phosphor-react";
import { ProfileDetailsContainer, StatisticItem, UserInfo, UserStatistics } from "./styles";

interface ProfileDetailsProps {
    profile: User;
    info: {
        pagesReaded: number;
        totalAuthorsReaded: number;
        totalBooksRated: number;
        mostReadedCategory: string | null;
    };
}

export function ProfileDetails({ profile, info }: ProfileDetailsProps) {
    const memberSinceYear = new Date(profile.created_at).getFullYear();

    return (
        <ProfileDetailsContainer>
            <UserInfo>
                <Avatar size="lg" src={profile.avatar_url!} alt={profile.name} />
                <div>
                    <Heading>{profile.name}</Heading>
                    <Text size="sm" color='gray-400'>membro desde {memberSinceYear}</Text>
                </div>
            </UserInfo>

            <UserStatistics>
                <StatisticItem>
                    <BookOpen width={32} height={32} />
                    <div>
                        <Heading size="xs" color="gray-200">{info.pagesReaded}</Heading>
                        <Text size='sm' color="gray-300">Páginas lidas</Text>
                    </div>
                </StatisticItem>
                <StatisticItem>
                    <Books width={32} height={32} />
                    <div>
                        <Heading size="xs" color="gray-200">{info.totalBooksRated}</Heading>
                        <Text size='sm' color="gray-300">Livros avaliados</Text>
                    </div>
                </StatisticItem>
                <StatisticItem>
                    <UserList width={32} height={32} />
                    <div>
                        <Heading size="xs" color="gray-200">{info.totalAuthorsReaded}</Heading>
                        <Text size='sm' color="gray-300">Autores lidos</Text>
                    </div>
                </StatisticItem>
                <StatisticItem>
                    <BookmarkSimple width={32} height={32} />
                    <div>
                        <Heading size="xs" color="gray-200">{info.mostReadedCategory}</Heading>
                        <Text size='sm' color="gray-300">Categoria mais lida</Text>
                    </div>
                </StatisticItem>
            </UserStatistics>
        </ProfileDetailsContainer>
    );
}