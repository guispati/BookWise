import { SessionProvider } from "next-auth/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

import { globalStyles } from "@/styles/global";
import { Nunito } from "next/font/google";
import { AppProps } from "next/app";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { DefaultSeo } from "next-seo";

export const nunito = Nunito({
  subsets: ["latin"],
});

globalStyles();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider session={session}>
				<DefaultLayout>
					<DefaultSeo
						openGraph={{
							type: 'website',
							locale: 'pt_BR',
							url: 'https://bookwise.com.br',
							siteName: 'BookWise',
						}}
					/>
					<Component {...pageProps} />
				</DefaultLayout>
			</SessionProvider>
		</QueryClientProvider>
	);
}