import React from 'react'

import './home.styles.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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

import NavigationBar from "../../components/NavigationBar/navigation-bar.component";
import { Container } from "@mui/material";

const Home = () => {
    return (
        <div className="App">
            <Container>
            <NavigationBar></NavigationBar>
            <LandingPage></LandingPage>
            <AboutUS></AboutUS>
            <Products></Products>
            <OurClinets></OurClinets>
            <ContactUS></ContactUS>
            <Footer></Footer>
            </Container>
        </div>  
      );
}

export default Home