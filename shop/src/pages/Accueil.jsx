import React from "react";
import { NavLink } from "react-router-dom"

function Accueil() {
    return (
        <>
            <h2>Accueil</h2>
            <NavLink className="nav-link" to="/articles">Articles</NavLink>
            <p className="text-accueil">Bienvenue sur notre e-boutique ShopTendance !</p>
            <div className="img-accueil"></div>
        </>
    )
}

export default Accueil;