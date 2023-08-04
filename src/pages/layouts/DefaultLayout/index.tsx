import { Sidebar } from "@/components/Sidebar";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";
import { DefaultLayoutContainer, DefaultLayoutContent } from "./styles";

export function DefaultLayout({ children }: PropsWithChildren) {
	const router = useRouter();

	const isSignIn = router.asPath === '/sign-in';

    return (
        <DefaultLayoutContainer>
            {!isSignIn ? (
                <>
                    <Sidebar />
                    <DefaultLayoutContent>{children}</DefaultLayoutContent>
                </>
            ) : (
                <>
                    {children}
                </>
            )}
        </DefaultLayoutContainer>
    );
};