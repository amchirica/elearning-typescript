import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import authStore from "@/store/globalStore";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, session }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const { setProfile } = authStore();

  useEffect(() => {
    setProfile();
  }, [setProfile]);

  return (
    <div
      onClick={() => authStore.setState({ userProfilePopup: false })}
      className="min-h-screen text-sm text-black "
    >
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
