import React from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import { cornerDownRight } from "react-icons-kit/feather/cornerDownRight";
import { partners } from "../../data";
import Box from "../Box";
import Text from "../Text";
import Heading from "../Heading";
import Image from "../Image";
import Container from "../UI/Container";
import BannerWrapper from "./banner.style";
import SocialProfile from "../SocialProfile";
import colors from "../../theme/charity/colors";

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
  slug,
}) => {
  const content = partners[slug];

  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Urbanfit Athens &" {...greetingStyle} />
            <Heading content={content?.shelter} {...nameStyle} />
            <Heading content="σε συνεργασία" {...designationStyle} />
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: colors.primary }}
                size={18}
              />
              <Heading content={`${content?.address}`} {...roleStyle} />
            </Box>
            <Text content={content?.description} {...aboutStyle} />
            <SocialProfile items={content?.socialProfiles} />
          </Box>
          <Box {...imageArea}>
            <Image
              className="image_area"
              css={{ borderRadius: 14 }}
              src={content?.image}
              alt={`${content?.shelter} συνεργάτες με Urbanfit Athens`}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  contentArea: {
    width: ["100%", "100%", "50%", "40%"],
    p: ["65px 0 40px 0", "65px 0 40px 0", "80px 0 60px 0", "0"],
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageArea: {
    width: ["100%", "100%", "50%", "60%"],
    flexBox: true,
    alignItems: "flex-end",
  },
  greetingStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "500",
    mb: "8px",
  },
  nameStyle: {
    as: "h1",
    color: colors.primary,
    fontSize: ["38px", "38px", "40px", "52px", "60px"],
    fontWeight: "800",
    mb: "6px",
  },
  designationStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "700",
    mb: ["30px", "30px", "25px", "30px", "30px"],
  },
  roleWrapper: {
    flexBox: true,
    mb: "0px",
  },
  roleStyle: {
    as: "h4",
    fontSize: ["16px", "16px", "16px", "18px", "18px"],
    fontWeight: "500",
    color: "#fff",
    mt: "2px",
    mr: "12px",
    ml: "10px",
  },
  aboutStyle: {
    fontSize: ["14px", "14px", "14px", "18px", "18px"],
    fontWeight: "400",
    lineHeight: "1.5",
    mb: "50px",
    color: colors.lightGray,
  },
};

export default BannerSection;
