import React from "react";

import "./home.styles.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {
  AboutUS,
  // Blog,
  ContactUS,
  // Features,
  Footer,
  // Header,
  LandingPage,
  OurClinets,
  Products,
  // Reviews
} from "../../containers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationBar from "../../components/NavigationBar/navigation-bar.component";
import { Container } from "@mui/material";

const Home = () => {
  const theme = createTheme({
    typography: {
      h2: {
        fontFamily: "Lato, sans-serif", // Use Lato as the font family for h2
      },
    },
    palette: {
      primary: {
        main: "#d6ca03",
        light: "#dfd759",
        dark: "#aaa108",
      },
      secondary: {
        main: "#818a9c",
        light: "#d1d2d4",
        dark: "#414244",
      },
    },
    typography: {
      body1: {
        fontSize: "1.4rem",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          <NavigationBar></NavigationBar>
          <LandingPage></LandingPage>
          <AboutUS></AboutUS>
          <Products></Products>
          <OurClinets></OurClinets>
          <ContactUS></ContactUS>
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Home;
