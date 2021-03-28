import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/theme/charity';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from '../containers/Navbar';
import DrawerSection from '../containers/DrawerSection';
import BannerSection from '../containers/BannerSection';
import FeatureSection from '../containers/FeatureSection';
import WorkSection from '../containers/WorkSection';
import PromotionBlock from '../containers/PromotionBlock';
import BranchSectionLeft from '../containers/BranchSectionLeft';
import BranchSectionRight from '../containers/BranchSectionRight';
import ClientBlock from '../containers/ClientBlock';
import Faq from '../containers/Faq';
import Footer from '../containers/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from '../containers/charity.style';

const Index = () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>One membership for fitness, wellness and beauty</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#FCF22B" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap"
            rel="stylesheet"
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
            <Faq />
            <ClientBlock />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Index;
