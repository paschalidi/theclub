import React from "react";
import { Icon } from "react-icons-kit";
import { plusCircled } from "react-icons-kit/ionicons/plusCircled";
import { minusCircled } from "react-icons-kit/ionicons/minusCircled";
import { fontWeight, lineHeight } from "styled-system";
import Text from "../../common/components/Text";
import Heading from "../../common/components/Heading";
import Container from "../../common/components/UI/Container";
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from "../../common/components/Accordion";
import { SectionHeader } from "../charity.style";
import FaqSection from "./faq.style";

const Faq = ({ faq: { slogan, title, faqs } }) => (
  <FaqSection id="faq">
    <Container>
      <SectionHeader>
        <Heading as="h5" content={slogan} />
        <Heading content={title} />
      </SectionHeader>
      <Accordion>
        <>
          {faqs.map((item) => (
            <AccordionItem key={`accordion-key--${item.id}`}>
              <>
                <AccordionTitle>
                  <>
                    <Heading lineHeight={12} as="h3" content={item.question} />
                    <IconWrapper className="icon-wrapper">
                      <OpenIcon className="openIconCharity">
                        <Icon icon={minusCircled} size={18} />
                      </OpenIcon>
                      <CloseIcon className="closeIconCharity">
                        <Icon icon={plusCircled} size={18} />
                      </CloseIcon>
                    </IconWrapper>
                  </>
                </AccordionTitle>
                <AccordionBody>
                  <Text content={item.answer} />
                </AccordionBody>
              </>
            </AccordionItem>
          ))}
        </>
      </Accordion>

      {/* <div className="centeredButton"> */}
      {/*  <ButtonGroup> */}
      {/*    <Button */}
      {/*      onClick={() => { */}
      {/*        window.open("www.sample.com", "mywindow").focus(); */}
      {/*      }} */}
      {/*      type="submit" */}
      {/*      colors="primaryWithBg" */}
      {/*      title="Περισσότερα FAQs" */}
      {/*    /> */}
      {/*  </ButtonGroup> */}
      {/* </div> */}
    </Container>
  </FaqSection>
);

export default Faq;
