import { styled } from "styled-components";

const Container = styled.div`
  width: 40vw;
  height: 50vh;
  background-color: #1f2a48;
  border-radius: 15px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  img,
  #content-infos {
    margin-top: 5%;
    margin-left: 7%;
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
      margin: 20px 0;
    }

    .github-infos {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
      background-color: #141c2f;
      padding: 10px;
      border-radius: 15px;
      width: 200%;
    }

    .profile {
        margin-top: 5px;
        display: flex;

      .localization,
      .linK {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 20px;


        .profile-p {
          margin: 0 0px;
        }
      }
    }
  }
`;

export { Container };
