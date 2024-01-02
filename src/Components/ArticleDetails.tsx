import { BsArrowLeftShort, BsCalendar2Date } from "react-icons/bs";
import { AiOutlineUser, AiOutlineFieldTime } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/data.json";


interface Article {
  titre: string;
  description: string;
  date: string;
  durée: string;
  auteur: string;
  contenu: string;
  categorie: string;
  id: string;
}
export default function ArticleDetails() {
  const url = useParams();
  const navigation = useNavigate();
  const articleData = data.articles.find(
    (element) => element.titre === url.articletitle
  );
  const indexArticle = data.articles.findIndex(
    (element: Article) => element.titre === url.articletitle
  );

  if (articleData) {
    return (
      <section className="articleContainer">
        <div className="articleHeader">
          <div className="retour" onClick={() => navigation(-1)}>
            <BsArrowLeftShort className="icon" />
            <p>Retour</p>
          </div>
          <h2>{articleData.titre}</h2>
          <div className="row">
            <div className="iconplusinfo">
              <BsCalendar2Date />
              <p>{articleData.date}</p>
            </div>
            <div className="iconplusinfo">
              <AiOutlineFieldTime />
              <p>{articleData.durée}</p>
            </div>
          </div>
          <div className="iconplusinfo">
            <AiOutlineUser />
            <p id="auteurp">{articleData.auteur}</p>
          </div>
        </div>
        <div
          id="contenu"
          dangerouslySetInnerHTML={{ __html: articleData.contenu }}
        ></div>
        <div id="nextarticle">{data.articles[indexArticle + 1].titre}</div>
      </section>
    );
  } else {
    return (
      <section>
        <h1>OOPS! Pas trouvé l'article</h1>
      </section>
    );
  }
}
