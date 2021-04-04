import React, { useState, useContext } from "react";
import Scrollspy from "react-scrollspy";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useRouter } from "next/router";
import Drawer from "../../common/components/Drawer";
import Image from "../../common/components/Image";
import { DrawerContext } from "../../common/contexts/DrawerContext";
import InnerWrapper, { SpreadButton } from "./drawerSection.style";

import { menuItems } from "../../common/data";
import heartImage from "../../common/assets/image/charity/heart-red.png";

const DrawerSection = () => {
  const router = useRouter();
  const [toggleState, setToggleState] = useState(false);
  const { state, dispatch } = useContext(DrawerContext);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: "TOGGLE",
    });
    handleActiveClass();
  };

  const scrollItems = [];

  menuItems.forEach((item) => {
    scrollItems.push(item.path.slice(1));
  });

  return (
    <Drawer
      width="420px"
      placement="right"
      drawerHandler={
        <button
          type="button"
          className={`drawer_btn ${toggleState ? "active" : ""}`}
          onClick={handleActiveClass}
          aria-label="drawer toggle button"
        >
          <ul className="grid">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <i className="flaticon-plus-symbol " />
        </button>
      }
      open={state.isOpen}
      toggleHandler={handleDrawerToggle}
    >
      <InnerWrapper>
        <Scrollspy
          className="scrollspy__menu"
          items={scrollItems}
          offset={-81}
          currentClassName="active"
        >
          {menuItems.map((menu) => (
            <li key={`menu_key${menu.path}`}>
              <AnchorLink
                href={menu.path}
                offset={menu.offset}
                onClick={handleDrawerToggle}
              >
                {menu.label}
              </AnchorLink>
            </li>
          ))}
        </Scrollspy>
        <SpreadButton
          onClick={() => {
            router.push("/partners");
          }}
        >
          <span className="text">Γίνε Συνεργάτης</span>
          <Image src={heartImage} alt="Γίνε Συνεργάτης με την Urbanfit.gr" />
        </SpreadButton>
      </InnerWrapper>
    </Drawer>
  );
};

export default DrawerSection;
