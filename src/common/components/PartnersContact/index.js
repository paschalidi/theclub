import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Text from "../Text";
import Heading from "../Heading";
import Button from "../Button";
import Container from "../UI/Container";

import Box from "../Box";

const PartnersContact = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  replyWrapper,
  buttonWrapper,
}) => {
  const router = useRouter();

  return (
    <Box {...sectionWrapper} as="section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading
            {...secTitle}
            content="Ανέδειξε και εσύ το χώρο σου μέσω της Urbanfit"
          />
        </Box>
        <Box {...replyWrapper}>
          <Heading
            style={{
              marginBottom: 12,
            }}
            as="h3"
            content="Κάντε πελάτες σας όλο το κοινό που χρησημοποιεί την εφαρμογή μας."
          />
        </Box>
        <Box {...replyWrapper}>
          <Heading
            style={{
              marginBottom: 12,
            }}
            as="h3"
            content="Και γεμίστε τάξεις που ίσως να μην γέμιζαν μέχρι χτες!"
          />
        </Box>
        <Box {...secTitleWrapper}>
          <Text
            {...secDescription}
            content="
            Συμπληρώστε την online φόρμα και γίνετε και εσείς συνεργάτης της Urbanfit.
            "
          />
        </Box>
        <Box {...buttonWrapper}>
          <Button
            onClick={() => router.push("/partners-contact-form")}
            type="submit"
            title="ΓΙΝΕ ΚΑΙ ΕΣΥ ΜΕΛΟΣ ΤΗΣ ΟΙΚΟΓΕΝΕΙΑΣ URBANFIT"
            variant="outlined"
          />
        </Box>
      </Container>
    </Box>
  );
};
PartnersContact.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  replyWrapper: PropTypes.object,
  replyTime: PropTypes.object,
  buttonStyle: PropTypes.object,
  buttonWrapper: PropTypes.object,
};

PartnersContact.defaultProps = {
  sectionWrapper: {
    pt: ["70px", "80px", "100px", "110px", "140px"],
    pb: ["70px", "80px", "100px", "110px", "140px"],
  },
  secTitleWrapper: {
    mb: "30px",
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
    textAlign: "center",
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    width: "600px",
    maxWidth: "100%",
    ml: "auto",
    mr: "auto",
    mb: "0",
  },
  replyWrapper: {
    flexBox: true,
    alignItems: "center",
    justifyContent: "center",
  },
  replyTime: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#302b4e",
    mb: 0,
  },
  buttonStyle: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: "23px",
    pr: "23px",
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: "center",
    mt: "0",
  },
};

export default PartnersContact;
