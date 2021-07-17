import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  color,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
} from "styled-system";
import { base, themed } from "../base";
import colors from "../../theme/charity/colors";

const TextWrapper = styled("p")(
  base,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  color,
  themed("Text")
);

const Text = ({ content = "", ...props }) => {
  const text = content.split("\n").map((str) => <p>{str}</p>);
  return <TextWrapper {...props}>{text}</TextWrapper>;
};

export default Text;

Text.propTypes = {
  color: PropTypes.string,
  content: PropTypes.string,
  as: PropTypes.string,
  mt: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  fontFamily: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  fontWeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  textAlign: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  letterSpacing: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  ...base.propTypes,
};

Text.defaultProps = {
  as: "p",
  mt: 0,
  mb: "1rem",
  color: colors.secondaryText,
};
