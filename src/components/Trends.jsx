import "../assets/Gallery.css"
function Trends(props)
{
    return (
        <>
        <div className="tendance">Tendances actuelles</div>
         <div className="row">
             {props.images.map(function (element) {
                return (<div className="images">
                    <img src={element} alt={element}/>
                </div>)
            })}
        </div>
        </>
    );
}

export default Trends;