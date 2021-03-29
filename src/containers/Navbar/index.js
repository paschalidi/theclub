import React from 'react';
import Logo from '../../common/components/UIElements/Logo';
import Image from '../../common/components/Image';
import Container from '../../common/components/UI/Container';
import NavbarWrapper, { MenuWrapper, Button } from './navbar.style';
import Link from 'next/link';

import logoImage from '../../common/assets/image/charity/logo.svg';
import heartImage from '../../common/assets/image/charity/heart-red.png';

const Navbar = ({type}) => {
  return (
    <NavbarWrapper type={type} className="navbar">
      <Container fullWidth={true}>
        <Logo
          href="/"
          logoSrc={logoImage}
          className="logo"
          title="Charity React Next Landing"
        />
        <MenuWrapper>
          <Link href="/partners">
            <a>
              <Button>
                <span className="text">
                  Γίνε συνέταιρος
                </span>
                <Image src={heartImage} alt="Charity Landing" />
              </Button>
            </a>
          </Link>
        </MenuWrapper>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
