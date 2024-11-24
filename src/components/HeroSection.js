import hero from "../assets/images/hero.png"
import plus from "../assets/images/plus.svg"
import play from "../assets/images/play.svg"
import narcos from "../assets/images/narcos.svg"
import "../assets/HeroSection.css"
function HeroSection() {
    return(
        <div className="heroBanniere">
            <div className="heroBanniere__img">
                <img src={hero} alt="hero"/>
            </div>
            <div className="text">
                <span className="netflix">NETFLIX</span>
                <span className="original">Original</span>
                <div className="logo-narcos"><img src={narcos} alt="narcos-logo"/></div>
                <h3>Regardez la saison 3 maintenant</h3>
                <p>Le cartel de Cali reprend le pouvoir en Colombie.
                    Les successeurs d’Escobar passent à l’action et
                    déclarent la guerre au gouvernement.
                </p>
                <div className="buttons">
                    <div className="btn"><img src={play} alt="play icone"/>Lecture</div>
                    <div className="btn"><img src={plus} alt="plus icone"/>My List</div>
                </div>
            <p className="revoir">Revoir</p>
            </div>
        </div>
    )
}

export default HeroSection;