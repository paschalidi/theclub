import React from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "../common/theme/charity";
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
import Page from "../common/components/page";
import { CharityWrapper, ContentWrapper } from "../containers/charity.style";
import { faq } from "../common/data";

const Index = () => (
  <ThemeProvider theme={charityTheme}>
    <Page>
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
    </Page>
  </ThemeProvider>
);
export default Index;
