import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

import ThemedStyleSheet from "react-with-styles/lib/ThemedStyleSheet";
import aphroditeInterface from "react-with-styles-interface-aphrodite";
import DefaultTheme from "react-dates/lib/theme/DefaultTheme";
import { base } from "../base";

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);

const DatePickerStyle = styled.div``;

// prop types can also be added from the style functions
DatePickerStyle.propTypes = {};

DatePickerStyle.displayName = "DatePickerStyle";

DatePickerStyle.defaultProps = {
  // as: 'div'
};

export default DatePickerStyle;
