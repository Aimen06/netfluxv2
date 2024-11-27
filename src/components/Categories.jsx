import "../assets/Categories.css"
import  arrowBottom from "../assets/images/arrowbottom.png"
function Categories()
{
    return (
        <div className="categories-container">
            <h4>
                Catégories
            </h4>
            <div className="categories-row">
                <div className="categorie">
                    <div className="categorie-name">
                        Comédie
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div>
                <div className="categorie">
                    <div className="categorie-name">
                        Action
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Drame
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Sci-Fi
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Romance
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Thriller
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Émissions TV
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Anime
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Policier
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Drame
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Horreur
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div> <div className="categorie">
                    <div className="categorie-name">
                        Indien
                    </div>
                    <img src={arrowBottom} alt={arrowBottom}/>
                </div>
            </div>
        </div>
    )
}

export default Categories