import styled from "styled-components";

export const BlogCard = styled.div`
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

  .blogLink {
    color: #3183ff;
    font-size: 15px;
    font-weight: 500;
    padding-left: 20px;
    padding-right: 20px;
    i {
      position: relative;
      top: -2px;
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
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
