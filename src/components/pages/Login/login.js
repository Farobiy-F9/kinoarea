import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TextFieldInput from "../../elements/TextFieldInput";
import { base_url } from "../../../store/base_url";
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
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${base_url}/users/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // token: "bearer ",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .then((err) => console.log(err));
  }, []);

  const loginFun = () => {
    const check = users.filter(
      (user) =>
        user.email === emailRef.current.value &&
        user.password === passwordRef.current.value
    );
    if (check.length !== 0 && check.length <= 1) {
      alert("Вы успешно авторизовались");
      localStorage.setItem("user", JSON.stringify(...check));
      navigate("/");
    } else {
      alert("Неверный логин или пароль");
    }
  };
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
        <TextFieldInput refVal={emailRef} labelVal="Логин, почта или телефон" />
        <TextFieldInput refVal={passwordRef} labelVal="Ваш пароль" />
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
          onClick={loginFun}
          // disabled={email === "" && password === ""}
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
          <Link to="/register">Зарегистрироваться</Link>
        </Button>
      </Stack>
    </Box>
  );
}
