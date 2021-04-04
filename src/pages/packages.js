import React from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import BannerSection from "../containers/packages/BannerSection";
import Footer from "../containers/Footer";
import Navbar from "../containers/Navbar";
import { DrawerProvider } from "../common/contexts/DrawerContext";
import { ResetCSS } from "../common/assets/css/style";
import { charityTheme } from "../common/theme/charity";
import { CharityWrapper } from "../containers/charity.style";

const Agency = () => (
  <ThemeProvider theme={charityTheme}>
    <>
      <Head>
        <title>Εταιρικά πακέτα</title>
        <meta name="Description" content="Urbanfit Εταιρικά πακέτα" />
      </Head>
      <ResetCSS />
      <CharityWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <DrawerProvider>
            <Navbar type="dark" />
          </DrawerProvider>
        </Sticky>
        <BannerSection />
        <Footer />
      </CharityWrapper>
    </>
  </ThemeProvider>
);
export default Agency;
