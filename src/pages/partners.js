import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { interiorTheme } from '../common/theme/interior';
import Navbar from '../containers/Navbar';
import Banner from '../containers/partners/Banner';
import Feature from '../containers/partners/Feature';
import AboutUs from '../containers/partners/AboutUs';
import Testimonial from '../containers/partners/Testimonial';
import Footer from '../containers/Footer';
import { ResetCSS } from '../common/assets/css/style';
import {
  GlobalStyle,
  InteriorWrapper,
  ContentWrapper,
} from '../containers/partners/interior.style';
import { CharityWrapper } from "../containers/charity.style";

const Partners = () => {
  return (
    <ThemeProvider theme={interiorTheme}>
      <Fragment>
        <Head>
          <title>Interior | A react next landing page</title>
          <meta name="theme-color" content="#171717" />
          <meta name="description" content="React next landing page" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Gatsby, Gatsby Js, Fast Landing, Modren Landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:500,600&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        {/* Start writing your markup from here. */}
        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar type="dark"/>
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Feature />
            <Testimonial />
            <AboutUs />
            {/*<Project />*/}
            {/*<Team />*/}
            {/*<News />*/}
            {/*<Gallery />*/}
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of markup section. */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Partners;
