import { Box } from "@mui/material";
import React from "react";
import RouterCom from "./routes";
import bg from "./assets/bg.png";

export default function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#1E2538",
        backgroundImage: `url(${bg})`,
        backgroundPosition: "50% 0",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
      // height="400vh"
    >
      <RouterCom />
    </Box>
  );
}
