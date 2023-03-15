import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Diarys from "../pages/Diarys";
import Create from "../pages/Create";
import { useQuery } from "react-query";
import { getDiarys } from "../api/diary";

const Router = () => {
  const { isLoading, isError, data } = useQuery("diarys", getDiarys);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="diarys/:id" element={<Diarys data={data} />} />
        <Route path="create/" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
