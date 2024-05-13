/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
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

export default function Register() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const ageRef = useRef("");
  const genderRef = useRef("");
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
    const check = users.filter((user) => user.email === emailRef.current.value);
    if (check.length !== 0) {
      alert("Alredy exsist");
    } else {
      let currentDate = new Date();
      let isoString = currentDate.toISOString();

      let info = {
        name: nameRef.current.value,
        age: ageRef.current.value,
        gender: genderRef.current.value,
        email: emailRef.current.value,
        status: "active",
        password: passwordRef.current.value,
        role: "admin",
        created_at: isoString,
        updated_at: isoString,
      };
      fetch(`${base_url}/users/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          // token: "bearer ",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => localStorage.setItem("user", JSON.stringify(data)))
        .catch((err) => console.log(err));
      navigate("/");
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
        <TextFieldInput refVal={nameRef} labelVal="Name" />
        <TextFieldInput refVal={passwordRef} labelVal="Ваш пароль" />
        <TextFieldInput refVal={ageRef} labelVal="Age" />
        <TextFieldInput refVal={genderRef} labelVal="Gender" />
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
