import { styled } from "styled-components";

const Container = styled.div`
  width: 40vw;
  height: 50vh;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#1f2a48" : "#283618")};
  color: #fefae0;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img,
  #content-infos {
    margin: 5% 45px 0 45px;
  }

  img {
    width: 147px;
    height: 131px;
    border-radius: 100%;
  }

  #content-infos {
    .content-title {
      hgroup {
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 30px;
        }

        h4 {
          margin-top: 10px;
        }
      }
    }

    p {
      margin: 30px 0;
    }

    .github-infos {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      background-color: ${({ isDarkMode }) =>
        isDarkMode ? "#141c2f" : "#081c15"};
      color: ${({ isDarkMode }) =>
        isDarkMode ? "white" : "#fefae0"};
      padding: 10px;
      border-radius: 15px;
      width: 105%;
      height: 12vh;

      .box {
        h5 {
          margin: 9px 0;
        }
      }
    }

    .information {
      margin-top: 40px;
      display: flex;

      .localization,
      .linK {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;
        margin: 0 15px;

        a {
          margin: 0 10px;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
`;

export { Container };
