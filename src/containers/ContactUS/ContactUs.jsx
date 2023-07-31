import { Typography } from "@mui/material";
import "./ContactUs.stlye.scss";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Stack } from "@mui/system";
import ContactForm from "../../components/ContactForm/ContactForm";

const ContactUS = () => {
  return (
    <div>
      <Typography
        variant="h2"
        textAlign="center"
        fontWeight="bold"
        marginTop="4rem"
      >
        CONTACT US TODAY AND LET'S GET YOUR PROJECT MOVING
      </Typography>
      <div className="contact__container">
        <div className="cotanct__text__container">
          <Typography variant="h2">
            Have a question for us? Let us know & we will respond!
          </Typography>
          <Typography color="grey" paddingTop={2}>
            Fill out this form to get in touch with our expert team. If your
            question is more urgent, you can use the information below to call
            or email us (or come to our office if you want to scare our staff).
          </Typography>
          <Stack paddingY={2}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              marginBottom={2}
            >
              <EmailIcon sx={{ color: "#d6ca03" }}></EmailIcon>
              <Typography>Contact@errahmagroup.com</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              marginBottom={2}
            >
              <LocationOnIcon sx={{ color: "#d6ca03" }}></LocationOnIcon>
              <Typography>P2JR+VVG, Hassi Messaoud</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              marginBottom={2}
            >
              <LocalPhoneIcon sx={{ color: "#d6ca03" }}></LocalPhoneIcon>
              <Typography>0560 55 42 26</Typography>
            </Stack>
          </Stack>
        </div>
        <div className="contact__form__container">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
