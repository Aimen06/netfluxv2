import "../assets/Pologne.css"
import polandBan from "../assets/images/poland/poland.png"
import logoPol from "../assets/images/poland/logo-polonais.svg"
import ida from "../assets/images/poland/ida.png"
import vie from "../assets/images/poland/vie.png"
import coldwar from "../assets/images/poland/coldwar.png"
import play from "../assets/images/poland/play.svg"
import cross from "../assets/images/poland/close.png"

function Pologne()
{
    const listFilms = [


    ]
    return(
        <div className="banner-container">
            <div className="cross">
                <img src={cross} alt={cross}/>
            </div>
            <div className="image-poland">
                <img src={polandBan} alt={polandBan}/>
            </div>
            <div className="poland-text">
                <div className="logo-polonais">
                    <img src={logoPol} alt={logoPol}/>
                </div>
                <h4>
                    Netflix Découverte - Juillet 2018
                </h4>
                <p>
                    Andrzej Wajda, Roman Polański, Agnieszka Holland, Paweł Pawlikowski…
                    Découvrez ceux qui ont fait connaitre le cinéma polonais sur la scène internationale.
                </p>
            </div>

            <div className="row-films">
                <div className="film">
                    <div className="film-image">
                        <img src={ida} alt={ida}/>
                    </div>
                    <div className="film-text">
                        <h4>Ida</h4>
                        <p className="film-detail">2013 ‧ Drame ‧ 1h 22m</p>
                    </div>
                    <div className="play">
                        <img src={play} alt={play}/>
                    </div>
                </div>
                <div className="film">
                    <div className="film-image">
                        <img src={vie} alt={vie}/>
                    </div>
                    <div className="film-text">
                        <h4>Ils aimaient la vie</h4>
                        <p className="film-detail">1957 ‧ Drame ‧ 1h 35m</p>
                    </div>
                    <div className="play">
                        <img src={play} alt={play}/>
                    </div>
                </div>
                <div className="film">
                    <div className="film-image">
                        <img src={coldwar} alt={coldwar}/>
                    </div>
                    <div className="film-text">
                        <h4>Coldwar</h4>
                        <p className="film-detail">2018 ‧ Drame/Mélodrame ‧ 1h 25m</p>
                    </div>
                    <div className="play">
                        <img src={play} alt={play}/>
                    </div>
                </div>
                <div className="film">
                    <div className="film-image">
                        <img src={ida} alt={ida}/>
                    </div>
                    <div className="film-text">
                        <h4>Ida</h4>
                        <p className="film-detail">2013 ‧ Drame ‧ 1h 22m</p>
                    </div>
                    <div className="play">
                        <img src={play} alt={play}/>
                    </div>
                </div>
                <div className="film">
                    <div className="film-image">
                        <img src={vie} alt={vie}/>
                    </div>
                    <div className="film-text">
                        <h4>Ils aimaient la vie</h4>
                        <p className="film-detail">1957 ‧ Drame ‧ 1h 35m</p>
                    </div>
                    <div className="play">
                        <img src={play} alt={play}/>
                    </div>
                </div>
                <div className="film">
                    <div className="film-image">
                        <img src={coldwar} alt={coldwar}/>
                    </div>
                    <div className="film-text">
                        <h4>Coldwar</h4>
                        <p className="film-detail">2018 ‧ Drame/Mélodrame ‧ 1h 25m</p>
                    </div>
                    <div className="play">
                        <img src={play} alt={play}/>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Pologne