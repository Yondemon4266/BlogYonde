import React from "react";
import data from "../data/data.json";
import { NavLink, useLocation } from "react-router-dom";
export default function ListArticles({ search }) {
  const location = useLocation();
  const currentURL = location.pathname;

  const list = data.articles
    .filter((element) => {
      if (currentURL !== "/") {
        return element.categorie === currentURL.substring(1);
      } else {
        return true;
      }
    })
    .filter((element) => {
      if (search) {
        return (
          element.titre.toLowerCase().includes(search.toLowerCase()) ||
          element.auteur.toLowerCase().includes(search.toLowerCase())
        );
      } else {
        return true;
      }
    })
    .map((element) => (
      <NavLink
        to={`${currentURL !== "/" ? currentURL : ""}/${element.titre}`}
        key={element.id}
      >
        <div className="line">
          <h5>{element.titre}</h5>
          <p>{element.description}</p>
          <ul>
            <li>{element.date}</li>
            <li>-</li>
            <li>{element.durée}</li>
            <li>-</li>
            <li>{element.auteur}</li>
          </ul>
        </div>
      </NavLink>
    ));

  return (
    <section>
      <h4>Nos articles</h4>
      {list}
    </section>
  );
}
