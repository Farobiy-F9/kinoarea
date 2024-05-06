/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "../components/pages/PageNotFound/notFound";
import Main from "../components/pages/main/Main";
import Login from "../components/pages/Login/login";
import ResetPassword from "../components/pages/resetPassword/ResetPassword";
import FilmDetail from "../components/pages/detailFilms";

export default function RouterCom() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/films" element={<Main />} />
      <Route path="/films/:id" element={<FilmDetail />} />
      {/* <Route path="/films/:id/rank" element={<FilmDetail />} /> */}
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
