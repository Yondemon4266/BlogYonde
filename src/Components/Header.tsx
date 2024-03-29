import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function Header({ search, setSearch, conditions }: any) {
  return (
    <header>
      <div className="top">
        <img src="hello" alt="hello" />
        <div className="search">
          <BsSearch className="icon" />
          <input
            type="text"
            placeholder="Rechercher par nom d'article"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      {conditions && (
        <div className="bottom">
          <div className="bottom-top">
            <h3>Bienvenu sur YondeBlog !</h3>
            <p>Quel type d'article veux-tu lire?</p>
          </div>
          <ul>
            <li>
              <NavLink to="/">Tous</NavLink>
            </li>

            <li>
              <NavLink to="/react">React</NavLink>
            </li>
            <li>
              <NavLink to="/react-native">React-Native</NavLink>
            </li>
            <li>
              <NavLink to="/javascript">Javascript</NavLink>
            </li>
            <li>
              <NavLink to="/css">CSS</NavLink>
            </li>
            <li>
              <NavLink to="/html">HTML</NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
