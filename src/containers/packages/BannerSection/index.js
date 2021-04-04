import React from "react";
import PropTypes from "prop-types";
import Heading from "../../../common/components/Heading";
import Container from "../../../common/components/UI/Container";
import BannerWrapper from "./bannerSection.style";

const BannerSection = ({ title }) => (
  <BannerWrapper>
    <Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Heading
        textAlign="center"
        style={{ color: "#f3f3f3" }}
        content="Το site βρήσκεται υπό κατασκευή"
        {...title}
      />
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
    color: "#343d48cc",
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
