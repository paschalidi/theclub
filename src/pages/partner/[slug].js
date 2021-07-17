import React from "react";
import { ThemeProvider } from "styled-components";
import Sticky from "react-stickynode";
import { useRouter } from "next/router";
import { charityTheme } from "../../common/theme/charity";
import { CharityWrapper, ContentWrapper } from "../../containers/charity.style";
import Page from "../../common/components/Page";
import BannerSection from "../../common/components/PartnersBanner";
import Navbar from "../../containers/Navbar";
import Footer from "../../containers/Footer";
import PartnersContact from "../../common/components/PartnersContact";
import { partners } from "../../common/data";
import Courses from "../../common/components/Courses";

const PartnersPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (slug && !partners[slug]) {
    router.push("/404");
    return <div />;
  }

  const content = partners[slug];

  if (!content) {
    return <div />;
  }

  return (
    <ThemeProvider theme={charityTheme}>
      <Page
        title={`${content.shelter} - Urbanfit Athens`}
        description="Κάντε πελάτες σας όλο το κοινό που χρησημοποιεί την εφαρμογή μας. Και γεμίστε τάξεις που ίσως να μην γέμιζαν μέχρι χτες!"
      >
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
            <BannerSection slug={slug} />
          </ContentWrapper>

          <Courses slug={slug} />

          <PartnersContact />

          <Footer />
        </CharityWrapper>
      </Page>
    </ThemeProvider>
  );
};

export default PartnersPage;
