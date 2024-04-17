/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "../components/pages/PageNotFound/notFound";
import Main from "../components/pages/main/Main";

export default function RouterCom() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
