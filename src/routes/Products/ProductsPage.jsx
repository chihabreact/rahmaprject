import React from "react";
import { Link } from "react-router-dom";
import "./ProductsPage.style.scss";
import { Container, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";
import EquipmentList from "../../components/EquipmentList/EquipmentList";
const ProductsPage = () => {
  return (
    <Stack>
      <Container>
        <Stack>
          <Typography variant="h2" align="center">
            Find the Perfect Equipment for Your Project
          </Typography>
          <Typography>
            we take pride in providing our customers with the best tools and
            machinery for any project they undertake. From heavy-duty trucks to
            versatile generators, we have everything you need to ensure your
            project runs smoothly and efficiently. Our selection of equipment
            for sale and rent is carefully curated to ensure that you get the
            highest quality and most reliable tools at the best value. Explore
            our inventory today and find the perfect equipment for your next
            project!
          </Typography>
          <Button fullWidth={false}>GET STARTED</Button>
        </Stack>
        <EquipmentList></EquipmentList>
      </Container>
    </Stack>
  );
};

export default ProductsPage;
