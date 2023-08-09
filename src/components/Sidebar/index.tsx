import { LoginButton, NavigationContainer, NavItem, SidebarContainer, UserInfo } from "./styles";
import Logo from "../../assets/Logo.svg";
import Image from "next/image";
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from "phosphor-react";
import { Text } from "../Typography/Text";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "../Avatar";

const ICON_SIZE = 24;

export function Sidebar() {
    const router = useRouter();
    const { data: session } = useSession();

    const user = session?.user;

    function handleOpenProfile() {
        router.push(`/profile/${user?.id}`);
    };

    return (
        <SidebarContainer>
            <div>
                <Image src={Logo} alt="BookWise" width={128} height={32} />

                <NavigationContainer>
                    <NavItem href="/" active={router.route === '/'}>
                        <ChartLineUp size={ICON_SIZE} />
                        Início
                    </NavItem>

                    <NavItem href="/explore" active={router.route === '/explore'}>
                        <Binoculars size={ICON_SIZE} />
                        Explorar
                    </NavItem>

                    {session && (
                        <NavItem
                            href={`/profile/${session.user.id}`}
                            active={router.asPath === `/profile/${session.user.id}`}
                        >
                            <User size={ICON_SIZE} />
                            Perfil
                        </NavItem>
                    )}
                </NavigationContainer>
            </div>

            {user ? (
                <UserInfo>
                    <div onClick={handleOpenProfile}>
                        <Avatar size="sm" src={user.avatar_url} alt={user.name} />
                        <Text size="sm">{(user.name.split(' '))[0]}</Text>
                    </div>
                    <SignOut size={20} onClick={() => signOut()} />
                </UserInfo>
            ) : (
                <LoginButton href="sign-in">
                    Fazer Login
                    <SignIn size={20} />
                </LoginButton>
            )}
        </SidebarContainer>
    );
}