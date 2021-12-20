import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import DogsPage from "../components/DogsPage";
import CatsPage from "../components/CatsPage";
import PetDetailsPage from "../components/PetDetailsPage";
import NotFound from "../components/NotFound";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dogs" element={<DogsPage />} />
      <Route path="/cats" element={<CatsPage />} />
      <Route path="/:type/details/:id" element={<PetDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
