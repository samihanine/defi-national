import {Link} from "react-router-dom";
import React from 'react';



const NavbarDesktop = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/">Sauveteurs</Link>
                </li>
                <li>
                    <Link to="/">Sorties en mer</Link>
                </li>
                <li>
                    <Link to="/">Navires</Link>
                </li>
                <li>
                    <Link to="/">Recherche</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarDesktop
