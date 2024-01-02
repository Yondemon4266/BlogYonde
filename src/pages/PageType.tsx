import { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ListArticles from "../Components/ListArticles";
import { Outlet, useLocation } from "react-router-dom";

export default function PageType() {
  const [search, setSearch] = useState<string>("");
  const location = useLocation();
  const currentURL: string = location.pathname;

  const excludedURLS: string[] = [
    "/",
    "/react",
    "/react-native",
    "/javascript",
    "/css",
    "/html",
  ];
  const conditionsApparitionHeadere: boolean = excludedURLS.some(
    (element) => element === currentURL
  );

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        conditions={conditionsApparitionHeadere}
      />
      <ListArticles search={search} />
      <Outlet />
      <Footer />
    </>
  );
}
