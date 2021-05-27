import React from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import BannerSection from "../containers/packages/BannerSection";
import Footer from "../containers/Footer";
import Navbar from "../containers/Navbar";
import Page from "../common/components/Page";
import { DrawerProvider } from "../common/contexts/DrawerContext";
import { charityTheme } from "../common/theme/charity";
import { CharityWrapper } from "../containers/charity.style";

const Agency = () => (
  <ThemeProvider theme={charityTheme}>
    <>
      <Page>
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <Footer />
        </CharityWrapper>
      </Page>
    </>
  </ThemeProvider>
);
export default Agency;
