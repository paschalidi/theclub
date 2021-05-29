import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "../../common/components/Box";
import Text from "../../common/components/Text";
import Heading from "../../common/components/Heading";
import Logo from "../../common/components/UIElements/Logo";
import Container from "../../common/components/UI/Container";
import FooterWrapper, {
  List,
  ListItem,
  CopyrightText,
  SocialList,
} from "./footer.style";
import LogoImage from "../../common/assets/image/charity/logo-opposite.svg";
import { menuWidgets, socialLinks } from "../../common/data";

const Footer = ({ row, col, colOne, colTwo }) => (
  <FooterWrapper>
    <Container width="1260px">
      <Box className="row" {...row}>
        <Box className="col-one" {...colOne}>
          <Logo
            className="logo"
            href="/"
            logoSrc={LogoImage}
            title="Urbanfit Athens logo"
          />
          <Text
            className="text"
            fontWeight="bold"
            content="GR: +30 698 82 21 619"
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
            urbanfitgr@gmail.com
          </a>
        </Box>
        {/* End of logo column */}
        <Box className="col-two" {...colTwo}>
          {menuWidgets.map((widget) => (
            <Box
              className="col"
              {...col}
              key={`footer__widget-key${widget.id}`}
            >
              <Heading
                className="widget_title"
                as="h3"
                content={widget.title}
              />
              <List>
                {widget.menu.map((item) => (
                  <ListItem key={`list__item-${item.id}`}>
                    {item.href && <Link href={item.href}>{item.label}</Link>}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
        {/* End of List column */}
      </Box>
      {/* End of widgets row */}
      <Box className="row copyright" {...row}>
        <CopyrightText>
          <Text
            className="text"
            content="© 2021 Urbanfit Athens. All Rights Reserved - Thiseos 70, Paleo Faliro 175 62, Greece"
          />
        </CopyrightText>
        <SocialList>
          {socialLinks.map((item) => (
            <li className={item.name} key={`social__link-key${item.id}`}>
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a
                onClick={() => {
                  window.open(item.link, "mywindow").focus();
                }}
                aria-label={`Social media ${item.name} Urbanfit Athens`}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </SocialList>
      </Box>
      {/* End of copyright row */}
    </Container>
  </FooterWrapper>
);

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px",
  },
  // Footer col one style
  colOne: {
    width: ["100%", "30%", "35%", "30%"],
    mt: [0, "13px", "0"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0],
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "70%", "65%", "70%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "33.33%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
};

export default Footer;
