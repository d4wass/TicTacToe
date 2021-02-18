import { createGlobalStyle } from "styled-components";
import breakpoints from "theme/breakpoints";


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

  html{
    font-size: 62.5%;
  }

  circle{
    @media ${breakpoints.device.xs} {
      r: 30;
      stroke-width: 17;
    }
  }

`;

export default GlobalStyle;
