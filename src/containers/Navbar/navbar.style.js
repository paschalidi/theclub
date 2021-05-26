import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const NavbarWrapper = styled.nav`
  ${(props) =>
    props.type === "dark" &&
    css`
      background: ${themeGet("colors.secondary")};
    `}
  .container {
    padding: 0 200px 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 1220px) and (max-width: 1440px) {
      max-width: 1170px !important;
    }
    @media only screen and (max-width: 1440px) {
      padding: 0 30px;
    }
  }

  .logo {
    max-width: 180px;
    width: 100%;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1440px) {
    padding-right: 20px;
  }
  @media only screen and (max-width: 1360px) {
    padding-right: calc(75px + 20px);
  }
  @media only screen and (max-width: 1260px) {
    padding-right: calc(75px + 30px);
  }
  @media only screen and (max-width: 991px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.25s ease;
    color: inherit;
  }
`;

export const Button = styled.button`
  border: 0;
  padding: 0 16px;
  min-width: 150px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: ${themeGet("colors.heading", "#060F1E")};
  background: radial-gradient(
    circle,
    rgb(216 249 234) 0%,
    rgb(213 232 255) 100%
  );
  transition: all 0.3s ease;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 14px;
  }

  &:hover {
    background-color: ${themeGet("colors.primaryHover", "#ECF22F")};
  }

  img {
    margin-left: 11px;
    @media only screen and (max-width: 1440px) {
      margin-left: 10px;
    }
  }

  &:hover,
  &:focus {
    content: 0;
    box-shadow: none;
  }
`;

export default NavbarWrapper;
