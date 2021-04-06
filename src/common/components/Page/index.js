import Head from "next/head";
import { withRouter } from "next/router";
import React from "react";

import { GlobalStyle } from "../../../containers/charity.style";
import { ResetCSS } from "../../assets/css/style";

const Index = ({
  children,
  description = "Αποκτήστε πρόσβαση σε διαφορετικά προγράμματα, από γυμναστήρια και στούντιο γιόγκα μεχρι κολυμβητήρια και πολεμικές τέχνες.",
  image = "/images/banner-0.jpg",
  title = "Μία συνδρομή για όλες σας τις δραστηριότητες - Urbanfit",
  keywords = "Urbanfit,  Μια συνδρομή, Ελλάδα,Yoga, Γυμναστηρια, Crossfit, GR, ευεξία, Athina, Αθήνα, Athens",
  router,
}) => {
  const domain = "https://urbanfit.gr";
  const url = router && router.asPath ? router.asPath : undefined;
  const canonical = url && url === "/" ? domain : domain + url;
  const featuredImage = domain + image;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}
        <meta content="follow, index" name="robots" />
        <meta name="theme-color" content="#fff535" />
        <meta name="msapplication-TileColor" content="#fff535" />
        <meta
          content="/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link
          color="#5bbad5"
          href="/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com/"
          rel="preconnect"
        />
        <link
          crossOrigin=""
          href="https://cdn.usefathom.com"
          rel="preconnect"
        />
        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content={title} property="og:title" />
        <meta property="og:site_name" content="urbanfit" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        <meta property="og:type" content="website" />

        <meta
          content="kg_1_BJrSz5YJmxoOPEVNKLJFPosa28069YfhC4ViHQ"
          name="google-site-verification"
        />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@leeerob" name="twitter:site" />
        <meta content="@leeerob" name="twitter:creator" />
      </Head>
      <GlobalStyle />
      <ResetCSS />
      {children}
    </>
  );
};

export default withRouter(Index);
