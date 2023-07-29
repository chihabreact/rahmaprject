import React from "react";
import { Button, ButtonBase, Stack } from "@mui/material";

const Cta = () => {
  return (
    <Button
      sx={{
        borderRadius: "20px", // Set your desired border radius value here
        // Add any other custom styles here if needed
      }}
      variant="outlined"
      color="warning"
      size="large"
    >
      GET IN TOUCH
    </Button>
  );
};

export default Cta;
