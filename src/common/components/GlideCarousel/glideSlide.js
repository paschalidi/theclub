import React from "react";
import PropTypes from "prop-types";
import { GlideSlideWrapper } from "./glide.style";

// Glide Slide wrapper component
const GlideSlide = ({ children }) => (
  <GlideSlideWrapper className="glide__slide">{children}</GlideSlideWrapper>
);

GlideSlide.propTypes = {
  /** Children. */
  children: PropTypes.element,
};

export default GlideSlide;
