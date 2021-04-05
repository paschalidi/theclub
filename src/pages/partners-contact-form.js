import React, { useRef, useEffect, useState } from "react";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
import { useRouter } from "next/router";
import { charityTheme } from "../common/theme/charity";
import Navbar from "../containers/Navbar";
import Page from "../common/components/Page";
import Footer from "../containers/Footer";
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
      <Page
        title="Φόρμα επικοινωνίας συνεργατών - Urbanfit"
        description="Πείτε μας για την επιχείρησή σας, δηλώστε τα διαθέσιμα προγράμματα γυμναστικής, υποδεχτείτε τους πελάτες και πληρωθείτε για την κάθε επίσκεψη."
      >
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
      </Page>
    </ThemeProvider>
  );
};
export default PartnersContactForm;
