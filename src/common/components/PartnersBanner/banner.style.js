import styled from "styled-components";

const BannerWrapper = styled.section`
  position: relative;
  background-color: #030b16;
  display: flex;
  align-items: center;
  padding-top: 80px;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    box-shadow: 8px 6px 50px 19px rgb(146 148 148 / 20%);
    margin-left: 20px;
    @media (max-width: 767px) {
      margin: 0 auto 40px auto;
      //display: none;
    }
  }
`;

export default BannerWrapper;
