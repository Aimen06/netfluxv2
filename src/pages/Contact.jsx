import React from "react";
import "../assets/Page.css"


function Contact()
{
    return (
        <div className="page">
            <h2>Contactez-nous</h2>
            <p>
                Nous sommes ravis que vous souhaitiez entrer en contact avec nous ! Chez Netflux, nous nous engageons
                à offrir à nos utilisateurs la meilleure expérience possible, et vos retours sont essentiels pour nous
                améliorer chaque jour. Que vous ayez une question, une suggestion, ou que vous ayez besoin d’assistance,
                nous sommes là pour vous répondre.
            </p>
            <h3>Nos coordonnées :</h3>
            <ul>
                <li>Email : support@netflux.com</li>
                <li>Téléphone : +334 84 89 43 69</li>
                <li>Adresse : 107 boulevard de la république, 06400 Cannes, France</li>
            </ul>
        </div>
    )
}

export default Contact;