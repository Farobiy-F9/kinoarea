import { Box } from "@mui/material";
import React from "react";
import img from "../../../assets/not_found.png";

export default function NotFound() {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img src={img} alt="" width="100%" />
    </Box>
  );
}
