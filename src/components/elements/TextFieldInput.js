/* eslint-disable react/prop-types */
import { TextField } from "@mui/material";
import React from "react";

export default function TextFieldInput({ labelVal }) {
  return (
    <TextField
      id="outlined-basic"
      fullWidth
      label={labelVal}
      variant="outlined"
      sx={{
        backgroundColor: "#1E2538",
        input: { color: "yellow" },
        label: { color: "rgba(255,255,255, 0.6)" },
      }}
      color="textFieldColor"
    />
  );
}
