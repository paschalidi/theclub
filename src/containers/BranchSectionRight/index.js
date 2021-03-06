import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Text from "../../common/components/Text";
import Heading from "../../common/components/Heading";
import Image from "../../common/components/Image";
import { Panel } from "../../common/components/Tabs";
import SectionWrapper, {
  ContentWrapper,
  Item,
  List,
} from "./branchSection.style";

import { branchRightData } from "../../common/data";

const BranchSectionRight = () => {
  const title = (text) => ({ __html: text });

  const {
    id,
    slogan,
    lists,
    image,
    menuItem,
    description,
    linkText,
    linkUrl,
    textTitle,
  } = branchRightData;

  return (
    <SectionWrapper id="corporate">
      <Panel title={<Text content={menuItem} />} key={`tab_key${id}`}>
        <ContentWrapper>
          <div className="content">
            <Heading as="h4" content={slogan} />
            {/* eslint-disable-next-line react/no-danger */}
            <h2 dangerouslySetInnerHTML={title(textTitle)} />
            <Text content={description} />
            <List>
              {lists.map((item) => (
                <Item key={`list_key${item.id}`}>{item.text}</Item>
              ))}
            </List>
            <Link href={linkUrl}>
              <a className="learn__more-btn">
                <span className="hyphen" />
                <span className="btn_text">{linkText}</span>
              </a>
            </Link>
          </div>
          <Fade>
            <div className="image">
              <Image src={image} alt="Urbanfit Athens Landing" />
            </div>
          </Fade>
        </ContentWrapper>
      </Panel>
    </SectionWrapper>
  );
};

export default BranchSectionRight;
