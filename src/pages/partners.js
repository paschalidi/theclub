import React from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "../common/theme/charity";
import Navbar from "../containers/Navbar";
import Banner from "../containers/partners/Banner";
import Feature from "../containers/partners/Feature";
import AboutUs from "../containers/partners/AboutUs";
import Footer from "../containers/Footer";
import { ResetCSS } from "../common/assets/css/style";
import {
  GlobalStyle,
  ContentWrapper,
} from "../containers/partners/interior.style";
import { CharityWrapper } from "../containers/charity.style";
import Faq from "../containers/Faq";

import { faq } from "../common/data/partners";

const Partners = () => (
  <ThemeProvider theme={charityTheme}>
    <>
      <Head>
        <title>Γίνε Συνεργάτης</title>
        <meta name="description" content="Γίνε Συνεργάτης με την Urbanfit.gr" />
        <meta
          name="keywords"
          content="Urbanfit, Ελλάδα, Γυμναστηρια, Yoga, Crossfit"
        />
      </Head>
      <ResetCSS />
      <GlobalStyle />

      <CharityWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbar type="dark" />
        </Sticky>
        <ContentWrapper>
          <Banner />
          <Feature />
          <AboutUs />
          <Faq faq={faq} />
        </ContentWrapper>
        <Footer />
      </CharityWrapper>
    </>
  </ThemeProvider>
);
export default Partners;
