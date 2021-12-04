import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DogsPage from "../pages/DogsPage";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dogs" element={<DogsPage />} />
    </Routes>
  );
}
