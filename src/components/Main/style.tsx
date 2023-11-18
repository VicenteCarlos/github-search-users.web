import { styled } from "styled-components";

const StyledMain = styled.main`
  #input-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #1f2a48;
    border-radius: 15px;
    width: 40vw;
    height: 7vh;

    svg {
      color: #056de2;
      width: 27px;
      height: 27px;
    }

    input {
      background: none;
      color: #dadce1;
      width: 60%;
      border: none;
      outline: none;
      margin-right: 15%;
      font-family: "Montserrat", sans-serif;
      font-weight: bold;
      font-size: 17px;
      padding: 10px;
    }

    button {
      background-color: #0079fe;
      border: none;
      border-radius: 15px;
      padding: 10px;
      color: white;
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export { StyledMain };
