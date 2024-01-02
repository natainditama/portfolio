import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "@components/header/Header";
import Layout from "@components/layout/Layout";
import "@styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
