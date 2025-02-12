import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Head>
        <title>Kobel Kasse</title>
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
