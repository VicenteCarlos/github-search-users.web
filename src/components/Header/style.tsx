import { styled } from "styled-components"

const StyledHeader = styled.header`
  #content-header {
    display: flex;
    justify-content: center;
    align-items: center;

    h1, #dark-mode {
      margin: 0 200px;
    }

    #dark-mode {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin: 0 10px;
      }
    }
  }
`;

export { StyledHeader }