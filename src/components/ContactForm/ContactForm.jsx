import React, { useState } from "react";
import "./ContactForm.style.scss";
import {
  TextField,
  TextareaAutosize,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Grid,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            type="phonenumber"
          />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize
            minRows={4}
            fullWidth
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              color: " white",
              backgroundColor: "#d6ca03",
              "&:hover": {
                backgroundColor: "grey",
              },
              "&:focus": {
                backgroundColor: "grey",
              },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
