import React from "react";
import Fade from "react-reveal/Fade";
import Link from "next/link";

import Image from "../../../common/components/Image";
import Heading from "../../../common/components/Heading";
import Text from "../../../common/components/Text";
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from "./aboutUs.style";

import { aboutData } from "../../../common/data/partners";

const AboutUs = () => {
  const {
    thumbUrl,
    title,
    title1,
    title2,
    title3,
    text1,
    text2,
    text3,
  } = aboutData;

  return (
    <SectionWrapper id="aboutUs">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image
              style={{ borderRadius: "16%" }}
              src={thumbUrl}
              alt="Μάθε πώς δουλεύει και γίνε συνεργάτης με την Urbanfit Athens"
            />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Heading content={title} />
            <Heading as="h3" content={title1} />
            <Text content={text1} />
            <Heading as="h3" content={title2} />
            <Text content={text2} />
            <Heading as="h3" content={title3} />
            <Text content={text3} />
            <Link href="/partners-contact-form">
              <a className="learn__more-btn">
                <span className="btn_text">Συμπληρώστε την online φόρμα</span>
                <span className="next_arrow" />
              </a>
            </Link>
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default AboutUs;
