import React from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { charityTheme } from "../common/theme/charity";
import Navbar from "../containers/Navbar";
import Banner from "../containers/partners/Banner";
import Feature from "../containers/partners/Feature";
import AboutUs from "../containers/partners/AboutUs";
import Footer from "../containers/Footer";
import Page from "../common/components/Page";
import {
  GlobalStyle,
  ContentWrapper,
} from "../containers/partners/interior.style";
import { CharityWrapper } from "../containers/charity.style";
import Faq from "../containers/Faq";
import { faq } from "../common/data/partners";

const Partners = () => (
  <ThemeProvider theme={charityTheme}>
    <Page
      description="Έχετε στούντιο γυμναστικής ή χώρο άθλησης; Επεκτείνετε το πελατολόγιό σας χωρίς οικονομικές δεσμεύσεις και κάντε την επιχείρησή σας γνωστή."
      title="Πληρωθείτε για καθε check-in στο χωρο σας - Urbanfit Athens"
      keywords="Urbanfit Athens, Athina, Αθήνα, check-in, Yoga, Γυμναστήριο, προσφορά, φθηνά γυμναστήρια"
      image="/images/banner-0.jpeg"
    >
      <GlobalStyle />

      <CharityWrapper>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          {(status) => {
            if (status.status === Sticky.STATUS_FIXED) {
              return <Navbar light={false} />;
            }
            return <Navbar light />;
          }}
        </Sticky>
        <ContentWrapper>
          <Banner />
          <Feature />
          <AboutUs />
          <Faq faq={faq} />
        </ContentWrapper>
        <Footer />
      </CharityWrapper>
    </Page>
  </ThemeProvider>
);
export default Partners;
