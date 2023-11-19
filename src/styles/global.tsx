import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? "#141c2f" : "lightgray"};
          transition: 0.5s;
        color: white;
    }
`;

export { GlobalStyle };
