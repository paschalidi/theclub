import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Icon from "react-icons-kit";
import { home } from "react-icons-kit/entypo/home";
import { ccw } from "react-icons-kit/entypo/ccw";
import Box from "../../common/components/Box";
import Text from "../../common/components/Text";
import Heading from "../../common/components/Heading";
import Image from "../../common/components/Image";
import Button from "../../common/components/Button";
import ErrorImage from "../../common/assets/image/404.svg";
import { ErrorWrapper, ErrorConatent, ButtonWrapper } from "./error.style";

const ErrorSec = ({ imageWrapper, title, text, reloadButton, homeButton }) => {
  const pageReload = () => {
    window.location.reload();
  };
  return (
    <ErrorWrapper>
      <ErrorConatent>
        <Box {...imageWrapper} className="image-wrapper">
          <Image src={ErrorImage} alt="404" />
        </Box>
        <Heading {...title} content="Page not found!" />
        <Text
          {...text}
          content="Looks like the page you're trying to visit dosen't exist. Please check the URL and try your luck again."
        />
        <ButtonWrapper>
          <Button
            {...reloadButton}
            title="Reload Page"
            icon={<Icon icon={ccw} size={24} />}
            className="domain_search_button"
            onClick={pageReload}
          />
          <Link href="/">
            <a>
              <Button
                {...homeButton}
                title="Go Home"
                icon={<Icon icon={home} size={24} />}
                className="domain_search_button"
              />
            </a>
          </Link>
        </ButtonWrapper>
      </ErrorConatent>
    </ErrorWrapper>
  );
};

ErrorSec.propTypes = {
  imageWrapper: PropTypes.object,
};

ErrorSec.defaultProps = {
  imageWrapper: {
    mb: ["40px", "55px"],
  },
};

export default ErrorSec;
