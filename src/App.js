import React from "react";

import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AboutUS,Blog,ContactUS,Features,Footer,Header,LandingPage,OurClinets,Products,Reviews } from "./containers";
import { NavigationBar } from "./components";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
        <Container>
        <NavigationBar></NavigationBar>
        <LandingPage></LandingPage>
        <Products></Products>
        <AboutUS></AboutUS>
        <OurClinets></OurClinets>
        <ContactUS></ContactUS>
        <Footer></Footer>
        </Container>
        
    </div>  
  );
}

export default App;

