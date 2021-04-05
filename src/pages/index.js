import React from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "../common/theme/charity";
import { ResetCSS } from "../common/assets/css/style";
import { DrawerProvider } from "../common/contexts/DrawerContext";
import Navbar from "../containers/Navbar";
import DrawerSection from "../containers/DrawerSection";
import BannerSection from "../containers/BannerSection";
import FeatureSection from "../containers/FeatureSection";
import WorkSection from "../containers/WorkSection";
import BranchSectionLeft from "../containers/BranchSectionLeft";
import BranchSectionRight from "../containers/BranchSectionRight";
import Faq from "../containers/Faq";
import Footer from "../containers/Footer";
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from "../containers/charity.style";
import { faq } from "../common/data";

const Index = () => (
  <ThemeProvider theme={charityTheme}>
    <>
      <Head>
        <title>Μία συνδρομή για γυμναστήριο, ευεξία και ομορφιά</title>
        <meta name="Description" content="Urbanfit" />
        <meta name="theme-color" content="#FCF22B" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Urbanfit,  Μια συνδρομή, Ελλάδα, Γυμναστηρια, Yoga, Crossfit, GR"
        />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      <CharityWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbar />
        </Sticky>
        <DrawerProvider>
          <DrawerSection />
        </DrawerProvider>
        <ContentWrapper>
          <BannerSection />
          <FeatureSection />
          <WorkSection />
          <BranchSectionLeft />
          <BranchSectionRight />
          <Faq faq={faq} />
        </ContentWrapper>
        <Footer />
      </CharityWrapper>
      {/* End of charity wrapper section */}
    </>
  </ThemeProvider>
);
export default Index;
