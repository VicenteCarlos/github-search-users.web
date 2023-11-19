import { styled } from "styled-components";

const StyledHeader = styled.header`
  #content-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

    h1,
    #dark-mode {
      margin: 0 170px;
    }

    #dark-mode {
      display: flex;
      justify-content: center;
      align-items: center;
      background: none;
      border: none;
      font-size: 18px;
      cursor: pointer;
      transition: 0.5s;
      color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};

      span {
        margin: 0 10px;
      }
    }
  }
`;

export { StyledHeader };
