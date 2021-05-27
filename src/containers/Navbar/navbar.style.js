import styled, { css } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import colors from "../../common/theme/charity/colors";

const NavbarWrapper = styled.nav`
  ${(props) =>
    props.type === "dark" &&
    css`
      background: ${colors.linearBackground};
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
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: ${themeGet("colors.heading", "#060F1E")};
  background-color: ${themeGet("colors.white")};
  box-shadow: rgb(50 50 93 / 25%) 0px 2px 5px -1px,
    rgb(0 0 0 / 30%) 0px 1px 3px -1px;
  transition: all 0.3s ease;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 14px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background: ${themeGet("colors.primary", "#060F1E")};
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
  }
`;

export default NavbarWrapper;
