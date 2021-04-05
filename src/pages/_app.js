import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import "@redq/reuse-modal/es/index.css";
import "../common/assets/css/flaticon.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
