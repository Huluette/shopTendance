import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <div>
            <ul className="nav-categories">
                <li>
                  <NavLink className="nav-link" to="/">Accueil</NavLink></li>
                <li>
                  <NavLink className="nav-link" to="/articles/Femmes">Femmes</NavLink></li>
                <li>
                  <NavLink className="nav-link" to="/articles/Hommes">Hommes</NavLink></li>
                <li>
                  <NavLink className="nav-link" to="/articles/Ados">Ados</NavLink></li>
                <li>
                  <NavLink className="nav-link" to="/articles/Enfants">Enfants</NavLink></li>
                <li>
                  <NavLink className="nav-link" to="/articles/Bébés">Bébés</NavLink></li>
              </ul>
        </div>
    );
}

export default NavBar;