/* eslint-disable prefer-const */
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
// import { Bounce, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function FilmBox({ item }) {
  const [filmsList, setFilmsList] = useState([]);
  const navigation = useNavigate();
  const ShowDetail = () => {
    navigation(`/films/${item.id}`);
  };

  const addCart = () => {
    let film = filmsList;
    film.push(item.id);
    setFilmsList(film);
    console.log(filmsList);

    if (localStorage.getItem("films")) {
      localStorage.setItem("films", JSON.stringify(filmsList));
    } else {
      localStorage.setItem("films", JSON.stringify([]));
      localStorage.setItem("films", JSON.stringify(filmsList));
    }
  };

  return (
    <Box
      sx={{
        width: {
          xs: "178px",
          sm: "210px",
          md: "202px",
          lg: "339px",
          xl: "339",
        },
      }}
    >
      <Stack
        sx={{
          position: "relative",
          "&:hover > div": {
            opacity: "1",
          },
        }}
      >
        <img src={item.fim_image} alt="" />
        <Stack
          width="100%"
          height="100%"
          justifyContent="center"
          alignItems="center"
          sx={{
            opacity: "0",
            background: "rgba(54, 87, 203, 0.65)",
            position: "absolute",
          }}
        >
          <Button
            onClick={addCart}
            sx={{
              backgroundColor: "white",
              color: "#3657CB",
              fontFamily: "Qanelas",
              fontSize: "15px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: " 166.5%",
              padding: "10px 20px",
            }}
          >
            Карточка фильма
          </Button>
        </Stack>
        <Typography
          variant="span"
          sx={{
            padding: "10px 20px",
            borderRadius: "5px",
            background: "#4BCB36",
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
        >
          6.70
        </Typography>
      </Stack>
      <Stack onClick={ShowDetail}>
        <Typography variant="p">{item?.name}</Typography>
        <Typography variant="span" color="#F2F60F">
          {item.tags?.map((ele) => `${ele}, `)}
        </Typography>
      </Stack>

      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      /> */}
    </Box>
  );
}
