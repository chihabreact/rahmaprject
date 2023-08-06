import React from "react";
import { Button } from "@mui/material";


import "./Cta.style.css";

const Cta = () => {
  return (
    <Button
      color="primary"
      sx={{
        marginRight: "1rem",
        borderRadius: "20px", // Set your desired border radius value here
        // Add any other custom styles here if needed
      }}
      variant="outlined"
      size="large"
      className="cta"
    >
      GET IN TOUCH
    </Button>
  );
};

export default Cta;
