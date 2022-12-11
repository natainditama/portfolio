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
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          scrollbarClass: "scrollbar",
        }}
        watch={[]}
        location={asPath}
        onLocationChange={(scroll: any) => scroll.scrollTo("top", { disableLerp: true })}
        containerRef={containerRef}
      >
        <Header />
        <main data-scroll-container ref={containerRef}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

export default MyApp;
