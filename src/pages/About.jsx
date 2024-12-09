import React from "react";
import "../assets/Page.css"

function About()
{
    return (
        <div className="page">
            <h2>À propos de Netflux</h2>
            <p>Bienvenue sur Netflux, la plateforme de streaming gratuite qui révolutionne
                la manière dont vous regardez vos séries, films et documentaires préférés.
                Chez Netflux, nous croyons que le divertissement de qualité devrait être accessible à tous, sans compromis.
            </p>
            <h3>Notre Mission</h3>
            <p>
                Offrir une expérience de streaming fluide, variée et sans frais. Nous sélectionnons soigneusement
                des contenus captivants provenant de différents genres et horizons pour satisfaire tous les goûts.
            </p>
            <h3>Pourquoi choisir Netflux ?</h3>
            <ul>
                <li> 100% Gratuit : Aucun abonnement, aucun paiement caché. Profitez de vos contenus préférés sans débourser
                    un centime.
                </li>
                <li>Catalogue Diversifié : Que vous soyez fan de drames, d’action, de comédies ou de documentaires
                    inspirants, Netflux a quelque chose pour vous.
                </li>
                <li>
                    Accès Facile : Disponible sur tous vos appareils – ordinateurs, smartphones et téléviseurs connectés.
                </li>
                <li>
                    Communauté Forte : Notre engagement est de bâtir une plateforme où chacun peut découvrir,
                    partager et apprécier du contenu qui fait vibrer.
                </li>
            </ul>
            <h3>Notre Vision</h3>
            <p>
                Netflux aspire à devenir le choix incontournable pour ceux qui veulent profiter d'un streaming sans contrainte.
                Nous croyons en un modèle de divertissement transparent, soutenu par des partenariats stratégiques et
                des publicités discrètes pour garantir une qualité de service exceptionnelle.
                Plongez dès maintenant dans l'univers de Netflux et laissez-vous emporter par des heures de divertissement,
                sans interruption ni engagement. C'est gratuit, et ça le restera toujours.
            </p>
        </div>
    );
}

export default About;