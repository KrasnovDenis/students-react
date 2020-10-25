import React from 'react';
import {Link} from "react-router-dom";
import '../style/NavBar.css';
import '../style/Label.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to={"/students"}>Студенты</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/groups"}>Группы</Link>
                    </li>

                </ul>

            </div>
        </nav>
    )
}