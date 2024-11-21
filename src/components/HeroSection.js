import hero from "../assets/images/hero.png"
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
                <h2>NARCOS</h2>
                <h3>Regardez la saison 3 maintenant</h3>
                <p>Le cartel de Cali reprend le pouvoir en Colombie.
                    Les successeurs d’Escobar passent à l’action et
                    déclarent la guerre au gouvernement.
                </p>
                <div className="buttons">
                    <div className="butt"></div>
                </div>

            </div>


        </div>
    )
}

export default HeroSection;
