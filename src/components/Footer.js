import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import "../assets/Footer.css"
function Footer() {
    return (
        <footer>
            <div className="social">
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={twitter} alt="twitter"/>
                <img src={youtube} alt="youtube"/>
            </div>
            <div className="menu">
                <ul>
                    <li>Audio et sous-titres</li>
                    <li>Presse</li>
                    <li>Confidentialité</li>
                    <li>Nous contacter</li>
                </ul>
                <ul>
                    <li>Autodescription </li>
                    <li>Relations investisseurs </li>
                    <li>Informations légales </li>
                </ul>
                <ul>
                    <li>Centre d’aide</li>
                    <li>Recrutement</li>
                    <li>Préférences de cookies</li>
                </ul>
                <ul>
                    <li>Cartes cadeaux</li>
                    <li>Conditions d’utilisation</li>
                    <li>Mentions légales</li>
                </ul>
            </div>
            <div className="btnService">
                Service Code
            </div>
            <div className="copyright">
                © 1997-2018 Netflix, Inc.
            </div>
        </footer>
    )
}

export default  Footer;