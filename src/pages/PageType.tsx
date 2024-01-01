import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListArticles from "../Components/ListArticles";
import { Outlet } from "react-router-dom";

export default function PageType() {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <ListArticles search={search} />
      <Outlet />
      <Footer />
    </>
  );
}
