import React from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import Text from "../Text";
import Heading from "../Heading";
import Container from "../UI/Container";
import {
  AwardImageWrapper,
  AwardItem,
  AwardSectionWrapper,
} from "./awards.style";
import { partners } from "../../data";
import Image from "../Image";

const Courses = ({
  secTitleWrapper,
  secTitle,
  secDescription,
  awardNameStyle,
  awardDetailsStyle,
  awardLogoStyle,
  slug,
}) => {
  const content = partners[slug];

  return (
    <AwardSectionWrapper id="awards_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading
            {...secTitle}
            content={`Δες όλα τια μαθήματα που μπορείς να κάνεις στο ${content?.shelter}`}
          />
          <Text {...secDescription} content="Διάλεξε αυτό που σου ταιρίαζει" />
        </Box>

        <>
          {content?.courses.map((course, index) => (
            <AwardItem>
              <AwardImageWrapper>
                {course.icon && (
                  <Image
                    style={{ margin: "0 auto" }}
                    src={course.icon}
                    alt={`award-logo-${index}`}
                    {...awardLogoStyle}
                  />
                )}
              </AwardImageWrapper>
              <Heading content={course.text} {...awardNameStyle} />
              <Text content={course.details} {...awardDetailsStyle} />
            </AwardItem>
          ))}
        </>
      </Container>
    </AwardSectionWrapper>
  );
};

Courses.propTypes = {
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  awardLogoStyle: PropTypes.object,
  awardNameStyle: PropTypes.object,
  awardDetailsStyle: PropTypes.object,
  awardeeLogoStyle: PropTypes.object,
  awardeeNameStyle: PropTypes.object,
  awardDateStyle: PropTypes.object,
};

Courses.defaultProps = {
  secTitleWrapper: {
    width: ["100%", "100%", "60%", "50%", "50%"],
    mb: "90px",
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
  },
  awardLogoStyle: {
    ml: "auto",
    mr: "auto",
    mb: "25px",
    width: "50px",
    margin: "0 auto",
  },
  awardNameStyle: {
    fontSize: ["16px", "16px", "18px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.35",
    textAlign: "center",
    mb: "17px",
  },
  awardDetailsStyle: {
    fontSize: ["15px", "15px", "15px", "16px"],
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    mb: "0",
  },
  awardeeNameStyle: {
    fontSize: "16px",
    color: "#9391a5",
    lineHeight: "1.35",
    fontWeight: "600",
    mb: "4px",
  },
  awardDateStyle: {
    fontSize: "12px",
    color: "#9391a5",
    lineHeight: "1.35",
    mb: "0",
  },
};

export default Courses;
