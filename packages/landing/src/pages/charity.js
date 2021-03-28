import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from 'common/theme/charity';
import { ResetCSS } from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Charity/Navbar';
import DrawerSection from 'containers/Charity/DrawerSection';
import BannerSection from 'containers/Charity/BannerSection';
import FeatureSection from 'containers/Charity/FeatureSection';
import WorkSection from 'containers/Charity/WorkSection';
import HumanityBlock from 'containers/Charity/HumanityBlock';
import PromotionBlock from 'containers/Charity/PromotionBlock';
import ClientBlock from 'containers/Charity/ClientBlock';
import Faq from 'containers/Charity/Faq';
import Footer from 'containers/Charity/Footer';
import {
  GlobalStyle,
  CharityWrapper,
  ContentWrapper,
} from 'containers/Charity/charity.style';

const Charity = () => {
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
        {/* End of charity head section */}
        {/* Start charity wrapper section */}
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
            <HumanityBlock />
            <PromotionBlock />
            <Faq />
            {/*<DonateSection />*/}
            {/*<MapSection />*/}
            {/*<FundraiserSection />*/}
            {/*<BlogSection />*/}
            <ClientBlock />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Charity;
