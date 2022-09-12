import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.primary};
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.white};
    margin-bottom: 0;
  }

  p {
    color: ${({ theme }) => theme.silver};
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
