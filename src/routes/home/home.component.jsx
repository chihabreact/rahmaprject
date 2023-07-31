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
