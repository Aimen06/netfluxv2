import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";
import youtube from "../assets/images/youtube.svg";
import "../assets/Footer.css"
import FooterMenus from "./FooterMenus";
function Footer() {
    const menu1 = [
        "Audio et sous-titres",
        "Presse",
        "Confidentialité",
        "Nous contacter"
    ];
    const menu2 = [
        "Autodescription",
        "Relations investisseurs",
        "Informations légales",
    ];
    const menu3 = [
        "Centre d’aide",
        "Recrutement",
        "Préférences de cookies",
    ];
    const menu4 = [
        "Cartes cadeaux",
        "Conditions d’utilisation",
        "Mentions légales",
    ];
    return (
        <footer>
            <div className="social">
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={twitter} alt="twitter"/>
                <img src={youtube} alt="youtube"/>
            </div>
            <FooterMenus menu1= {menu1} menu2={menu2} menu3={menu3} menu4={menu4}  />
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