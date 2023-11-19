import { styled } from "styled-components"

const StyledHeader = styled.header`
  #content-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    h1, #dark-mode {
      margin: 0 170px;
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