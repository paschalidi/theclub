import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { base, themed } from "../base";

const LinkWrapper = styled("a")(
  { textDecoration: "none" },
  base,
  themed("Link")
);

const Link = ({ children, ...props }) => (
  <LinkWrapper {...props}>{children}</LinkWrapper>
);

export default Link;

Link.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.any.isRequired,
  ...base.propTypes,
};

Link.defaultProps = {
  as: "a",
  // eslint-disable-next-line react/default-props-match-prop-types
  m: 0,
  // eslint-disable-next-line react/default-props-match-prop-types
  display: "inline-block",
};
