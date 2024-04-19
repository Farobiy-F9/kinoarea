import { Button, List, ListItem, Stack } from "@mui/material";
import React, { useState } from "react";
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
  const [showBurger, setShowBurger] = useState(false);
  const showHide = () => {
    setShowBurger(!showBurger);
  };
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
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "flex",
            xl: "none",
          },
          "& > button > svg": {
            fontSize: {
              xs: "15px",
              sm: "15px",
              md: "16px",
              lg: "16px",
              xl: "16px",
            },
          },
        }}
        gap="1vw"
        flexDirection="row"
      >
        <Button
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 15px 0px white",
          }}
          onClick={showHide}
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
      <Stack
        alignItems="center"
        gap="10px"
        sx={{
          width: {
            sx: "100px",
            sm: "100px",
            md: "129px",
            lg: "129px",
            xl: "129px",
          },
        }}
      >
        <img src={logo} width="100%" alt="" />
        <Stack
          flexDirection="row"
          gap={2}
          sx={{
            "& > svg": {
              fontSize: {
                sx: "10px",
                sm: "13px",
                md: "18px",
                lg: "18px",
                xl: "18px",
              },
            },
          }}
        >
          <AppleIcon sx={{ color: "#686868", fontSize: "18px" }} />
          <InstagramIcon sx={{ color: "#686868", fontSize: "18px" }} />
          <FacebookIcon sx={{ color: "#686868", fontSize: "18px" }} />
          <TwitterIcon sx={{ color: "#686868", fontSize: "18px" }} />
        </Stack>
      </Stack>
      <List
        sx={
          showBurger
            ? {
                display: {
                  xs: "flex",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                gap: "1.5vw",
                position: {
                  xs: "absolute",
                  sm: "absolute",
                  md: "absolute",
                  lg: "absolute",
                  xl: "static",
                },
                top: {
                  xs: "-10px",
                  sm: "-10px",
                  md: "100%",
                  lg: "100%",
                  xl: "100%",
                },
                left: {
                  xs: "-5vw",
                  sm: "-3vw",
                  md: "0",
                  lg: "0",
                  xl: "0",
                },
                zIndex: "999",
                justifyContent: "space-between",
                "& > li > a": {
                  fontSize: {
                    xs: "13px",
                    sm: "13px",
                    md: "13px",
                    lg: "17px",
                    xl: "17px",
                  },
                },
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                backgroundColor: {
                  xs: "#1E2538",
                  sm: "#1E2538",
                  md: "transparent",
                  lg: "transparent",
                  xl: "transparent",
                },
                width: {
                  xs: "100vw",
                  sm: "100vw",
                  md: "70vw",
                  lg: "60vw",
                  xl: "50vw",
                },
              }
            : {
                display: {
                  xs: "none",
                  sm: "none",
                  md: "flex",
                  lg: "flex",
                  xl: "flex",
                },
                gap: "1.5vw",
                position: {
                  xs: "absolute",
                  sm: "absolute",
                  md: "absolute",
                  lg: "absolute",
                  xl: "static",
                },
                top: {
                  xs: "-10px",
                  sm: "-10px",
                  md: "100%",
                  lg: "100%",
                  xl: "100%",
                },
                left: {
                  xs: "-5vw",
                  sm: "-3vw",
                  md: "0",
                  lg: "0",
                  xl: "0",
                },
                zIndex: "999",
                justifyContent: "space-between",
                "& > li > a": {
                  fontSize: {
                    xs: "13px",
                    sm: "13px",
                    md: "13px",
                    lg: "17px",
                    xl: "17px",
                  },
                },
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                backgroundColor: {
                  xs: "#1E2538",
                  sm: "#1E2538",
                  md: "transparent",
                  lg: "transparent",
                  xl: "transparent",
                },
                width: {
                  xs: "100vw",
                  sm: "100vw",
                  md: "70vw",
                  lg: "60vw",
                  xl: "50vw",
                },
              }
        }
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
        <Button
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
          onClick={showHide}
        >
          X
        </Button>
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
