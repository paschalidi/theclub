import React from "react";
import PropTypes from "prop-types";
import Heading from "../../../common/components/Heading";
import Container from "../../../common/components/UI/Container";
import BannerWrapper from "./bannerSection.style";

const BannerSection = ({ title }) => (
  <BannerWrapper>
    <Container width="870px">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#1b2525" }}>
        <Heading
          style={{ color: "white", margin: 0 }}
          textAlign="center"
          content="Το site βρίσκεται υπό κατασκευή."
          {...title}
        />
        <Heading
          style={{ color: "white", margin: 0 }}
          textAlign="center"
          content="Eπικοινωνήστε μαζί μας στο"
          {...title}
        />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <a
          onClick={() => {
            window.location.href = `mailto:urbanfitgr@gmail.com?subject=${encodeURIComponent(
              "Επικοινώνησε με την urbanfit."
            )}&body=${encodeURIComponent(
              "Πείτε μας πως θα μπορούσαμε να βοηθήσουμε."
            )}`;
          }}
          className="mail"
        >
          <Heading
            style={{ color: "#D7F31B" }}
            textAlign="center"
            content="urbanfitgr@gmail.com"
            {...title}
          />
        </a>
      </div>
    </Container>
  </BannerWrapper>
);

BannerSection.propTypes = {
  title: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
    alignItems: "center",
  },
  col: {
    pr: "15px",
    pl: "15px",
    width: ["100%", "70%", "60%", "50%"],
  },
  title: {
    fontSize: ["26px", "34px", "42px", "55px"],
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px"],
    lineHeight: "1.31",
  },
  description: {
    fontSize: "16px",
    color: "#0f2137",
    lineHeight: "2.1",
    mb: "0",
  },
  btnStyle: {
    minWidth: ["120px", "156px"],
    fontSize: "14px",
    fontWeight: "500",
  },
  outlineBtnStyle: {
    minWidth: ["130px", "156px"],
    fontSize: "14px",
    fontWeight: "500",
    color: "#0f2137",
    p: "5px 10px",
  },
  discountAmount: {
    fontSize: "14px",
    color: "#10AC84",
    mb: 0,
    as: "span",
    mr: "0.4em",
  },
  discountText: {
    fontSize: "14px",
    color: "#0f2137",
    mb: 0,
    as: "span",
  },
};

export default BannerSection;
