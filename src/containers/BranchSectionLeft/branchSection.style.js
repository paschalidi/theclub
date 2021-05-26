import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import patter1 from "../../common/assets/image/charity/branch/highlight-pattern.svg";
import patter2 from "../../common/assets/image/charity/branch/highlight-pattern2.svg";

const SectionWrapper = styled.section`
  width: 100%;
  margin: 81px 0 0 0;
  background-color: ${themeGet("colors.heading", "#060F1E")};
  @media only screen and (max-width: 1440px) {
    margin: 70px 0;
  }
  @media only screen and (max-width: 1360px) {
    margin: 50px 0 0 0;
  }
  @media only screen and (max-width: 991px) {
    margin: 40px 0 0 0;
  }

  .rq_tab {
    display: flex;
    flex-direction: row-reverse;
    @media only screen and (max-width: 667px) {
      flex-direction: column;
    }

    .tab_menu {
      width: 450px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 99px;
      @media only screen and (max-width: 1440px) {
        width: 350px;
        padding-left: 70px;
      }
      @media only screen and (max-width: 1360px) {
        width: 300px;
        padding-left: 50px;
      }
      @media only screen and (max-width: 667px) {
        width: 100%;
        padding-left: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
      }

      li {
        font-size: 18px;
        line-height: 35px;
        font-weight: 600;
        margin: 21px 0;
        position: relative;
        color: ${themeGet("colors.white", "#ffffff")};
        transition: color 0.325s ease;
        p {
          color: ${themeGet("colors.white", "#ffffff")};
        }
        @media only screen and (max-width: 1440px) {
          font-size: 16px;
          line-height: 30px;
          margin: 15px 0;
        }
        @media only screen and (max-width: 1440px) {
          font-size: 14px;
          line-height: 22px;
          margin: 14px 0;
        }

        &:hover {
          color: ${themeGet("colors.primary", "#fff535")};
          p {
            color: ${themeGet("colors.primary", "#fff535")};
          }
        }

        &.active {
          font-size: 30px;
          font-weight: 600;
          color: ${themeGet("colors.primary", "#FCF22B")};
          @media only screen and (max-width: 1440px) {
            font-size: 24px;
          }
          @media only screen and (max-width: 1360px) {
            font-size: 20px;
          }

          &::before {
            content: "";
            display: block;
            width: 50px;
            height: 2px;
            background-color: ${themeGet("colors.primary", "#FCF22B")};
            position: absolute;
            left: -99px;
            top: calc(50% - 1px);
            @media only screen and (max-width: 1440px) {
              width: 40px;
              left: -70px;
            }
            @media only screen and (max-width: 1360px) {
              width: 28px;
              left: -50px;
            }
            @media only screen and (max-width: 667px) {
              width: 18px;
              left: -30px;
            }
          }
        }
      }
    }

    .tab_content {
      width: calc(100% - 450px);
      @media only screen and (max-width: 1440px) {
        width: calc(100% - 350px);
      }
      @media only screen and (max-width: 1360px) {
        width: calc(100% - 300px);
      }
      @media only screen and (max-width: 667px) {
        width: 100%;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 667px) {
    flex-wrap: wrap;
  }

  .image {
    width: calc(100% - 750px);
    overflow: hidden;
    @media only screen and (max-width: 1440px) {
      width: calc(100% - 600px);
    }
    @media only screen and (max-width: 1360px) {
      width: calc(100% - 550px);
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
    }
    @media only screen and (max-width: 667px) {
      order: 2;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      right: -1px;
    }
  }

  .content {
    width: 750px;
    padding: 80px 86px 77px;
    background: linear-gradient(
      90deg,
      rgba(236, 255, 107, 1) 20%,
      rgba(215, 243, 27, 1) 85%
    );
    @media only screen and (max-width: 1440px) {
      width: 600px;
      padding: 70px 65px;
    }
    @media only screen and (max-width: 1360px) {
      width: 550px;
      padding: 56px 50px;
    }
    @media only screen and (max-width: 991px) {
      width: 100%;
      padding: 48px 40px;
    }
    @media only screen and (max-width: 480px) {
      order: 1;
      padding: 40px 30px;
    }

    h4 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      @media only screen and (max-width: 1360px) {
        font-size: 14px;
      }
    }

    h2 {
      font-size: 50px;
      line-height: 70px;
      font-weight: 300;
      margin: 29px 0;
      @media only screen and (max-width: 1440px) {
        font-size: 36px;
        line-height: 54px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 34px;
        line-height: 50px;
      }
      @media only screen and (max-width: 991px) {
        font-size: 30px;
        line-height: 46px;
        margin: 20px 0;
      }
      @media only screen and (max-width: 767px) {
        font-size: 28px;
        line-height: 40px;
      }

      strong {
        font-weight: 300;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        &:first-child {
          background-image: url(${patter1});
        }
        &:last-child {
          background-image: url(${patter2});
        }
      }
    }

    p,
    li {
      font-size: 18px;
      line-height: 30px;
      margin-bottom: 8px;
      color: ${themeGet("colors.secondary")};
      @media only screen and (max-width: 1440px) {
        font-size: 16px;
        margin-bottom: 8px;
      }
      @media only screen and (max-width: 1360px) {
        font-size: 15px;
      }
      @media only screen and (max-width: 991px) {
        margin-bottom: 35px;
      }
      @media only screen and (max-width: 768px) {
        margin-bottom: 8px;
      }
    }

    .learn__more-btn {
      &::before {
        background: radial-gradient(
          circle,
          rgb(216 249 234) 0%,
          rgb(213 232 255) 100%
        );
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
          rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      }
    }
  }
`;

export const List = styled.ul`
  margin-bottom: 50px;
  padding-top: 5px;
  @media only screen and (max-width: 1440px) {
    padding-top: 0;
    margin-bottom: 45px;
  }
  @media only screen and (max-width: 1360px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 991px) {
    margin-bottom: 30px;
  }
`;

export const Item = styled.li`
  font-size: 20px;
  line-height: 40px;
  padding: 4px 0;
  color: ${(props) => (props.type === "light" ? `white` : `#060F1E`)};
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media only screen and (max-width: 1360px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media only screen and (max-width: 991px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export default SectionWrapper;
