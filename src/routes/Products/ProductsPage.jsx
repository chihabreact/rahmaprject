import React from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.style.scss";
import { Container, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
import NavigationBar from "../../components/NavigationBar/navigation-bar.component";
const ProductsPage = () => {
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
    <div className="products-page-container">
      <NavigationBar />
      <ThemeProvider theme={theme}>
        <Stack>
          <Container>
            <Stack>
              <Typography variant="h2" align="center" paddingY="2rem">
                Find the Perfect Equipment for Your Project
              </Typography>
              <Typography color="secondary">
                we take pride in providing our customers with the best tools and
                machinery for any project they undertake. From heavy-duty trucks
                to versatile generators, we have everything you need to ensure
                your project runs smoothly and efficiently. Our selection of
                equipment for sale and rent is carefully curated to ensure that
                you get the highest quality and most reliable tools at the best
                value. Explore our inventory today and find the perfect equipment
                for your next project!
              </Typography>
              <Button fullWidth="false">GET STARTED</Button>
            </Stack>
            <EquipmentList></EquipmentList>
          </Container>
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default ProductsPage;
