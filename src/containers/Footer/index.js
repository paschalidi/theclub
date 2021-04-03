import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from '../../common/components/Box';
import Text from '../../common/components/Text';
import Heading from '../../common/components/Heading';
import Logo from '../../common/components/UIElements/Logo';
import Container from '../../common/components/UI/Container';
import FooterWrapper, {
  List,
  ListItem,
  CopyrightText,
  SocialList,
} from './footer.style';
import LogoImage from '../../common/assets/image/charity/logo.svg';
import { menuWidgets, socialLinks } from "../../common/data";

const Footer = ({ row, col, colOne, colTwo }) => {

  return (
    <FooterWrapper>
      <Container width="1260px">
        <Box className="row" {...row}>
          <Box className="col-one" {...colOne}>
            <Logo
              className="logo"
              href="/"
              logoSrc={LogoImage}
              title="urbanfit"
            />
            <Text className="text" content="EU: +077 1456 5924" />
            <Text className="text" content="US: +361-541-4241" />
            <a onClick={()=>{
              window.location.href = `mailto:urbanfitgr@gmail.com?subject=${encodeURIComponent('Επικοινώνησε με την urbanfit.')}&body=${encodeURIComponent('Πείτε μας πως θα μπορούσαμε να βοηθήσουμε.')}`;
            }} className="mail">urbanfitgr@gmail.com</a>
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
                      {
                        item.href &&
                        <Link href={item.href}>
                          {item.label}
                        </Link>
                      }
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
              content="© 2021 Urbanfit. All Rights Reserved"
            />
          </CopyrightText>
          <SocialList>
            {socialLinks.map((item) => (
              <li className={item.name} key={`social__link-key${item.id}`}>
                <a
                  onClick={()=>{window.open(item.link,'mywindow').focus()}}
                  aria-label="social share link">
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
};

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
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '30%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '70%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '33.33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default Footer;
