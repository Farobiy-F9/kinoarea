/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";

const data = [
  {
    id: 0,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 1,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 2,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 3,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 4,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 5,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 6,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 7,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 8,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 9,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 10,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 11,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 12,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
  {
    id: 13,
    name: "Побег из Претории",
    tags: ["Триллер", "драма", "криминал"],
    rating: {
      kinoare: "8.70",
      imdb: "6.70",
    },
    description:
      "Двое борцов за свободу отбывают срок в одной из самых строгих тюрем мира — в «Претории». Вместе с другими узниками они планируют дерзкий и опасный побег. Но придумать план — это только первый шаг. Шаг второй — реализация плана.",
    author: "",
    film_origin_name: "Escape from Pretoria",
    likes: "12335",
    created_date: "2020",
    country: "Подбери ключ к свободе",
    fim_image:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Escape_from_Pretoria_film_poster.png",
    bg_image: "",
  },
];

export default function FilmDetail() {
  const location = useLocation();
  //   const { id } = useParams();
  const item_id = location.pathname.split("/")[2];
  const item_film = data.find((item) => +item.id === +item_id);
  return (
    <Box>
      <Typography variant="h1">Detail Page</Typography>
      <Typography variant="h1">{item_film.description}</Typography>
    </Box>
  );
}
