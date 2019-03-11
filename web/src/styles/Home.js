import styled from "styled-components";

export const HomeStyle = styled.div`
  .banner {
    margin-top: -15vh;
    min-height: 100vh;
    background: url("https://res.cloudinary.com/ahendouz/image/upload/v1551951721/Courier2-1-1.png")
      no-repeat top;
    display: flex;
    justify-content: center;
    align-items: center;
    .contant {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 20rem;
      > p {
        color: ${props => props.theme.white};
        font-size: 2.6rem;
        text-align: center;
        margin-bottom: 3rem;
        width: 80%;
        font-family: Light;
      }

      .btns {
        display: flex;

        button {
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.7rem;
          &:last-of-type {
            margin-left: 2rem;
          }
          svg {
            width: 25px;
            height: 25px;
            margin-right: 27px;
          }
          .arrow {
            width: 22px;
            margin-left: 34px;
            margin-right: 0 !important;
          }
        }
      }
    }
  }
  .how_it_works {
    text-align: center;
    padding: 8rem 0;
    font-size: 1.3rem;

    > h1 {
      margin-bottom: 3rem;
      font-size: 3.6rem;
    }
    .blocks {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .block {
        h1 {
          color: ${props => props.theme.green};
        }
        p {
          color: ${props => props.theme.gray_1};
        }
      }
    }
  }
  .download_app {
    position: relative;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .phone {
      width: 40%;
      img {
        width: 100%;
        margin-bottom: -2.8%;
      }
    }
    .stores {
      margin-top: 14rem;
      > h1 {
        width: 63%;
        font-size: 2.6rem;
        color: white;
        font-family: Light;
        margin-bottom: 2rem;
      }
      .iphone_android {
        display: flex;
        .store {
          height: 45px;
          cursor: pointer;
          &:not(:last-of-type) {
            margin-right: 1.7rem;
          }
          img {
            height: 100%;
          }
        }
      }
    }
    .background {
      background: ${props => props.theme.green};
      position: absolute;
      width: 100%;
      height: 71%;
      bottom: 0;
      z-index: -1;
    }
  }
`;
