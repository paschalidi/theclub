import styled from "styled-components";

export const AwardSectionWrapper = styled.section`
  padding: 150px 0 81px 0;
  @media (max-width: 1200px) {
    padding: 110px 0;
  }
  @media (max-width: 990px) {
    padding: 100px 0;
  }
  @media (max-width: 767px) {
    padding: 80px 0;
  }
  @media (max-width: 575px) {
    padding: 60px 0;
  }
`;

export const AwardItem = styled.div`
  width: 50%;
  padding: 20px 28px;
  margin: 16px auto;

  background: #fff;
  box-shadow: 0px 4px 50px 0px rgba(22, 53, 76, 0.08);

  @media (max-width: 991px) {
    width: 90%;
  }
  border-radius: 12px;
  @media (max-width: 1200px) {
    padding: 20px 20px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export const AwardImageWrapper = styled.div``;
