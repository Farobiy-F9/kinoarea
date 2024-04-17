import { Button, List, ListItem, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AppleIcon from "@mui/icons-material/Apple";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/logo.svg";
import "./header.css";

export default function Header() {
  return (
    <Stack
      sx={{
        width: {
          xs: "300px",
          sm: "368px",
          md: "660px",
          lg: "850px",
          xl: "1430px",
        },
        position: {
          xs: "relative",
          sm: "relative",
          md: "relative",
          lg: "relative",
          xl: "static",
        },
        marginTop: "10px",
        // backgroundColor: "white",
      }}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack
        sx={{
          display: {
            sm: "block",
            xs: "block",
            md: "block",
            lg: "block",
            xl: "none",
          },
        }}
        gap="1vw"
        flexDirection="row"
      >
        <Button
          sx={{
            display: {
              sm: "block",
              xs: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px 0px white",
          }}
        >
          <MenuIcon />
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px 0px white",
          }}
        >
          <SearchIcon />
        </Button>
      </Stack>
      <Stack alignItems="center" gap="10px">
        <img src={logo} width="129px" alt="" />
        <Stack flexDirection="row" gap={2}>
          <AppleIcon sx={{ color: "#686868", fontSize: "18px" }} />
          <InstagramIcon sx={{ color: "#686868", fontSize: "18px" }} />
          <FacebookIcon sx={{ color: "#686868", fontSize: "18px" }} />
          <TwitterIcon sx={{ color: "#686868", fontSize: "18px" }} />
        </Stack>
      </Stack>
      <List
        sx={{
          display: "flex",
          gap: "1.5vw",
          position: {
            xs: "absolute",
            sm: "absolute",
            md: "absolute",
            lg: "absolute",
            xl: "static",
          },
          top: "100%",
          justifyContent: "space-between",
        }}
      >
        <ListItem>
          <Link to="/">Афиша</Link>
        </ListItem>
        <ListItem>
          <Link to="/media">Медиа</Link>
        </ListItem>
        <ListItem>
          <Link to="/film">Фильмы</Link>
        </ListItem>
        <ListItem>
          <Link to="/author">Актёры</Link>
        </ListItem>
        <ListItem>
          <Link to="/news">Новости</Link>
        </ListItem>
        <ListItem>
          <Link to="/selected">Подборки</Link>
        </ListItem>
        <ListItem>
          <Link to="/categories">Категории</Link>
        </ListItem>
      </List>
      <Stack flexDirection="row" gap="5px">
        <Button
          sx={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px 0px white",
            display: {
              sm: "none",
              xs: "none",
              md: "none",
              lg: "none",
              xl: "block",
            },
          }}
        >
          <SearchIcon />
        </Button>
        <Button
          sx={{
            borderRadius: "10px",
            background: "#3657CB",
            boxShadow: "0px 0px 15px 0px rgba(72, 113, 255, 0.80)",
            color: "#FFF",
            fontFamily: "Qanelas",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "166.5%",
            padding: "0 2vw",
          }}
        >
          Войти
        </Button>
      </Stack>
    </Stack>
  );
}
