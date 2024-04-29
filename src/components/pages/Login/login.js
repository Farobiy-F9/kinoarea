import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TextFieldInput from "../../elements/TextFieldInput";
// import { theme } from "../../../themes/theme";

// const styles = (theme) =>
//   createStyles({
//     title: {
//       color: "#FFF",
//       fontFamily: "Qanelas",
//       fontSize: "40px",
//       fontStyle: "normal",
//       fontWeight: 800,
//       lineHeight: "normal",
//     },
//   });

export default function Login() {
  return (
    <Box
      sx={{
        width: {
          xs: "300px",
          sm: "368px",
          md: "660px",
          lg: "850px",
          xl: "1430px",
        },
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Stack
        sx={{
          width: {
            xs: "270px",
            sm: "300px",
            md: "442px",
            lg: "442px",
            xl: "442px",
          },
        }}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="2vh"
      >
        <Typography
          variant="h2"
          sx={{
            color: "#FFF",
            fontFamily: "Qanelas",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "normal",
          }}
        >
          Войти
        </Typography>
        <TextFieldInput labelVal="Логин, почта или телефон" />
        <TextFieldInput labelVal="Ваш пароль" />
        <Button
          variant="contained"
          sx={{
            borderRadius: "10px",
            background: "#F2F60F",
            height: "55px",
            color: "#151A26",
            fontFamily: "Qanelas",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "166.5%",
          }}
          fullWidth
          color="textFieldColor"
        >
          Войти
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "10px",
            background: "#1E2538",
            height: "55px",
            color: "white",
            fontFamily: "Qanelas",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "166.5%",
          }}
          fullWidth
          color="textFieldColor"
        >
          Зарегистрироваться
        </Button>
        <Link
          to="/reset-password"
          style={{
            color: "#3657CB",
            textAlign: "center",
            fontFamily: "Qanelas",
            fontSize: "17px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "166.5%",
            textDecorationLine: "underline",
          }}
        >
          Восстановить пароль
        </Link>
      </Stack>
    </Box>
  );
}
