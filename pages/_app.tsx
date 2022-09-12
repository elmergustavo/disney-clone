import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import Header from "../components/Header";
import GlobalStyle from "../globalstyles";

const theme: DefaultTheme = {
  primary: "#040714",
  secondary: "#0070f3",
  white: "#fff",
  brightBlue: "#3E64E5",
  silver: "silver",
  darkGrey: "#31343e",
};

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}