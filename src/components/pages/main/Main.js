/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import kino1 from "../../../assets/kino1.png";
import FilmBox from "../../elements/filmBox";
import Header from "../../sections/header/header";
import { base_url } from "../../../store/base_url";

export default function Main() {
  const [filmsList, setFilmsList] = useState([]);
  let navigate = useNavigate();
  const RedirectAllFilms = () => {
    navigate("/films");
  };

  useEffect(() => {
    fetch(`${base_url}/films`)
      .then((response) => response.json())
      .then((data) => setFilmsList(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <Stack
        sx={{
          width: {
            xs: "300px",
            sm: "368px",
            md: "660px",
            lg: "850px",
            xl: "1430px",
          },
        }}
      >
        <Stack
          // width="100%"
          sx={{ marginTop: "3vh" }}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h2"
            sx={{
              color: "#FFF",
              fontFamily: "Qanelas",
              fontSize: "65px",
              fontStyle: "normal",
              fontWeight: "900",
              lineHeight: "normal",
            }}
          >
            Сейчас в кино
          </Typography>
          <Box
            sx={{ width: "60px", height: "4px", backgroundColor: "white" }}
          ></Box>
          <List
            sx={{
              display: {
                xs: "flex",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
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
            }}
          >
            <ListItem>
              <Link to="/">Афиша</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Медиа</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Фильмы</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Актёры</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Новости</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Подборки</Link>
            </ListItem>
            <ListItem>
              <Link to="/">Категории</Link>
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
            >
              X
            </Button>
          </List>
        </Stack>
        <Stack
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {filmsList?.slice(0, 8).map((item) => (
            <FilmBox item={item} key={item.id} />
          ))}
        </Stack>
        <Button onClick={RedirectAllFilms}>Все новинки</Button>
      </Stack>
    </>
  );
}

// const data = [
//   {
//     id: 0,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 1,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 2,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 3,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 4,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 5,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 6,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 7,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 8,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 9,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 10,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 11,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 12,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
//   {
//     id: 13,
//     name: "Побег из Претории",
//     tags: ["Триллер", "драма", "криминал"],
//     rating: {
//       kinoare: "8.70",
//       imdb: "6.70",
//     },
//     description:
//       "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
//     author: "",
//     film_origin_name: "Escape from Pretoria",
//     likes: "12335",
//     created_date: "2020",
//     country: "Подбери ключ к свободе",
//     fim_image:
//       "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
//     bg_image: "",
//   },
// ];
