import styled from "styled-components";
import Image from "../Image";

export const ComponentWrapper = styled.div`
  overflow: hidden;
  margin-top: 80px;
  margin-bottom: 24vh;
`;
export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 8px;
  margin-right: 16px;

  @media (max-width: 991px) {
    margin-right: 0px;
    margin-bottom: 16px;
  }
`;
