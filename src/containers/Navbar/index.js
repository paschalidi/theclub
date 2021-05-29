import React from "react";
import Link from "next/link";
import Logo from "../../common/components/UIElements/Logo";
import Image from "../../common/components/Image";
import Container from "../../common/components/UI/Container";
import NavbarWrapper, { MenuWrapper, Button } from "./navbar.style";

import logoImage from "../../common/assets/image/charity/logo.svg";
import logoImageDark from "../../common/assets/image/charity/logo-opposite.svg";
import heartImage from "../../common/assets/image/charity/heart-red.png";

const Navbar = ({ light = true }) => (
  <NavbarWrapper className="navbar">
    <Container fullWidth>
      <Logo
        href="/"
        logoSrc={light ? logoImage : logoImageDark}
        className="logo"
        title="Urbanfit Athens Logo"
      />
      <MenuWrapper>
        <Link href="/partners">
          <a>
            <Button>
              <span className="text">Γίνε Συνεργάτης</span>
              <Image
                src={heartImage}
                alt="Γίνε Συνεργάτης με την Urbanfit Athens"
              />
            </Button>
          </a>
        </Link>
      </MenuWrapper>
    </Container>
  </NavbarWrapper>
);

export default Navbar;
