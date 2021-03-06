import styled from "styled-components";
import Link from "next/link";
import colors from "../../../common/theme/charity/colors";

export const AA = styled.a``;

export const BlogCard = styled.div.attrs({ as: Link })`
  border-radius: 6px;
  > img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  h3 {
    @media (max-width: 1600px) {
      font-size: 17px;
    }
    @media (max-width: 1199px) {
      font-size: 15px;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const HR = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;

  border: 0;
  height: 0;
  border-top: 1px solid #D6C8F3;

  ${AA}:hover & {
    border-color: #AC90E7;
  }
`;

export const HeadingStyled = styled.h2`
  font-size: 28px;
  font-weight: normal;
  margin: 0;
  color: ${colors.headingLight};

  ${AA}:hover & {
    color: ${colors.secondary};
  }
`;
