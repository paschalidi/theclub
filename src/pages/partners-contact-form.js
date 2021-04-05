import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
import { useRouter } from "next/router";
import { charityTheme } from "../common/theme/charity";
import Navbar from "../containers/Navbar";
import Footer from "../containers/Footer";
import { ResetCSS } from "../common/assets/css/style";
import {
  GlobalStyle,
  FormWrapper,
} from "../containers/partners/interior.style";
import { CharityWrapper } from "../containers/charity.style";

const Form = ({ onSubmit }) => {
  const container = useRef();

  useEffect(() => {
    createWidget("IPBw4LQc", {
      container: container.current,
      onSubmit,
    });
  }, []);

  return <div ref={container} style={{ width: "100vw" }} />;
};

const PartnersContactForm = () => {
  const router = useRouter();
  const [formIsVisible, setVisibility] = useState(true);
  return (
    <ThemeProvider theme={charityTheme}>
      <>
        <Head>
          <title>Γίνε Συνεργάτης</title>
          <meta
            name="description"
            content="Συμπλήρωσε τγη φόρμα και γίνε Συνεργάτης με την Urbanfit.gr"
          />
          <meta
            name="keywords"
            content="Urbanfit,  Μια συνδρομή, Ελλάδα, Γυμναστηρια, Yoga, Crossfit, GR"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />

        <CharityWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar type="dark" />
          </Sticky>
          <FormWrapper>
            {formIsVisible ? (
              <Form
                onSubmit={() => {
                  setVisibility(false);
                  router.push("/partners");
                }}
              />
            ) : (
              <div
                className="successMessage"
                style={{ width: "100vw", height: "100vh" }}
              />
            )}
          </FormWrapper>
          {!formIsVisible && <Footer />}
        </CharityWrapper>
      </>
    </ThemeProvider>
  );
};
export default PartnersContactForm;
