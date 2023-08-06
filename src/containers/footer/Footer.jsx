import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Stack alignItems="center" className="footer__container">
      <Typography variant="h2" paddingY="2rem" textAlign="center">
        Follow us on social media
      </Typography>
      <Typography variant="h6" color="grey" padding={2}>
        Stay up-to-date with our latest news, promotions, and equipment
        offerings by following us on social media!
      </Typography>
      <div className="social__icons">
        <FacebookOutlinedIcon
          className="facebook__icon"
          sx={{ color: "#d6ca03" }}
        />
        <InstagramIcon className="instagram__icon" sx={{ color: "black" }} />
      </div>
      <Typography>
        Copyright © 2023 Errahma Group | All Rights Reserved
      </Typography>
    </Stack>
  );
};

export default Footer;
