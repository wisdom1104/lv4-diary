import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Diarys from "../pages/Diarys";
import Create from "../pages/Create";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="diarys/:id" element={<Diarys />} />
        <Route path="create/" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
