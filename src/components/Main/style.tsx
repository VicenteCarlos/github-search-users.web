import { styled } from "styled-components";

const StyledMain = styled.main``;

const InputBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#1f2a48" : "#283618")};
  color: ${({ isDarkMode }) => (isDarkMode ? "white" : "#fefae0")};
  border-radius: 15px;
  width: 40vw;
  height: 7vh;

  svg {
    color: ${({ isDarkMode }) => (isDarkMode ? "#056de2" : "#fefae0")};
    width: 27px;
    height: 27px;
  }

  input {
    background: none;
    color: ${({ isDarkMode }) => (isDarkMode ? "white" : "#fefae0")};
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
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#056de2" : "#fefae0"};
    color: ${({ isDarkMode }) => 
      isDarkMode ? "white" : "#283618"};
    border: none;
    border-radius: 15px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
  }
`;

export { StyledMain, InputBar };
