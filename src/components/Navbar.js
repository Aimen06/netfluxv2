import "../assets/Navbar.css";
import logo from "../assets/images/logo.png";
import dropdown from "../assets/images/dropdown.svg";
import notification from "../assets/images/notification.svg";
import search from "../assets/images/search.svg";
import avatar from "../assets/images/avatar.png";
import burger from "../assets/images/burger.svg";
import icone1 from "../assets/images/dropdown/icone1.png";
import icone2 from "../assets/images/dropdown/icone2.png";
import icone3 from "../assets/images/dropdown/icone3.png";
import icone4 from "../assets/images/dropdown/icone4.png";
import icone5 from "../assets/images/dropdown/icone5.png";
import pencil from "../assets/images/dropdown/pencil.svg";
import question from "../assets/images/dropdown/question.svg";
import user from "../assets/images/dropdown/user.svg";
import evenodd from "../assets/images/dropdown/evenodd.svg";

import { useState } from "react";

function Navbar() {
    const [dropdownActif, setDropdownActif] = useState(false);

    return (
        <header>
            <div className="header__left">
                <img className="logo" src={logo} alt="Netflix" />
                <nav>
                    <a className="">Découverte</a>
                    <a className="">Séries TV</a>
                    <a className="">Films</a>
                    <a className="">Programmes originaux</a>
                    <a className="">Ajouts récents</a>
                    <a className="">Ma liste</a>
                </nav>
            </div>
            <a className="burger">
                <img className="burger__icon" src={burger} />
            </a>
            <div className="header__right">
                <a>
                    <img src={search} />
                </a>
                <a>Jeunesse</a>
                <a>
                    <img src={notification} />
                </a>

                <div className="dropdown__container">
                    <a
                        className="avatar"
                        href="#"
                        onClick={() => setDropdownActif(!dropdownActif)}
                    >
                        <img src={avatar} />
                        <img className={dropdownActif == true ? "avatar__dropdown active" : "avatar__dropdown"} src={dropdown} />
                    </a>

                    {/* Menu */}

                    <div>
                        {dropdownActif == true && (
                            <img className="dropdown__caret" src={dropdown} />
                        )}
                        <div className={dropdownActif == true ? "dropdown__menu active" : "dropdown__menu"}>
                            <div className="row-dropdown">
                                <img src={icone1} alt={icone1}/>
                                <a href="#">Tom</a>
                            </div>
                            <div className="row-dropdown">
                                <img src={icone2} alt={icone2}/>
                                <a href="#">Paul</a>
                            </div>
                            <div className="row-dropdown">
                                <img src={icone3} alt={icone3}/>
                                <a href="#">Pierre</a>
                            </div>
                            <div className="row-dropdown">
                                <img src={icone5} alt={icone5}/>
                                <a href="#">Jack</a>
                            </div>
                            <div className="row-dropdown">
                                <img src={icone4} alt={icone4}/>
                                <a href="#">Jeunesse</a>
                            </div>
                            <div className="row-dropdown">
                                <img className="icone" src={pencil} alt={pencil}/>
                                <a href="#">Gérer les profils</a>
                            </div>
                            <div className="row-dropdown">
                                <img className="icone" src={evenodd} alt={evenodd}/>
                                <a href="#">Transférer un profil</a>
                            </div>
                            <div className="row-dropdown">
                                <img className="icone" src={user} alt={user}/>
                                <a href="#">Compte</a>
                            </div>
                            <div className="row-dropdown">
                                <img className="icone" src={question} alt={question}/>
                                <a href="#">Centre d'aide</a>
                            </div>
                            <div className="logout">
                                    <a href="#">Se déconnecter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
    );
}

export default Navbar;