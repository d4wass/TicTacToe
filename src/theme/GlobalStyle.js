import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap");

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
  }



`;

export default GlobalStyle;
