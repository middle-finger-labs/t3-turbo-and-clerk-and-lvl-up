// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "../utils/trpc";
import { LvlUpProvider } from "@lvl-up/react";
import { env } from "../env/client.mjs";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <LvlUpProvider apiKey={env.NEXT_PUBLIC_LVL_UP_API_KEY} {...pageProps}>
        <Component {...pageProps} />
      </LvlUpProvider>
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
