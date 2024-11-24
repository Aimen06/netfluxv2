import "../assets/Gallery.css"
import Replay from "./Replay";
import cards from "../assets/images/replay/cards.png"
import chapo from "../assets/images/replay/chapo.png"
import crown from "../assets/images/replay/crown.png"
import dirtymoney from "../assets/images/replay/dirtymoney.png"
import juventus from "../assets/images/replay/juventus.png"
import mirror from "../assets/images/replay/mirror.png"
import arcane from "../assets/images/replay/arcane.jpg"
import breakingbad from "../assets/images/replay/breakingbad.jpg"
import demon from "../assets/images/replay/demon.jpg"
import fast from "../assets/images/replay/fast.jpg"
import formula1 from "../assets/images/replay/formula1.jpg"
import kingsman from "../assets/images/replay/kingsman.jpg"
import outer from "../assets/images/replay/outer.jpg"
import ramna from "../assets/images/replay/ramna.jpg"
import agence from "../assets/images/replay/agence.jpg"

import subura from "../assets/images/replay/subura.png"
function Galleries ()
{
    const replayImg = [
        crown,
        cards,
        subura,
        mirror,
        juventus,
        dirtymoney,
        agence,
        arcane,
        breakingbad,
        demon,
        fast,
        formula1,
        kingsman,
        outer,
        ramna
    ];
    return (
        <div className='galleries'>
        <Replay images={replayImg} />
    </div>
    )
}

export default Galleries;