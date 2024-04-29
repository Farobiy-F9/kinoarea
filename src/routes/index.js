/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "../components/pages/PageNotFound/notFound";
import Main from "../components/pages/main/Main";
import Login from "../components/pages/Login/login";
import ResetPassword from "../components/pages/resetPassword/ResetPassword";

export default function RouterCom() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
