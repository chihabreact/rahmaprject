import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Stack alignItems="center">
      <Typography variant="h2"> follow us on social media</Typography>
      <Typography variant="h6" color="grey" padding={2}>
        Stay up-to-date with our latest news, promotions, and equipment
        offerings by following us on social media!
      </Typography>
      <Stack direction="row">
        <FacebookOutlinedIcon
          sx={{ fontSize: "80px", color: "#d6ca03" }}
        ></FacebookOutlinedIcon>
        <InstagramIcon
          sx={{ fontSize: "80px", color: "black	" }}
        ></InstagramIcon>
      </Stack>
      <Typography>
        Copyright © 2023 errahma group | All Rights Reserved
      </Typography>
    </Stack>
  );
};

export default Footer;
