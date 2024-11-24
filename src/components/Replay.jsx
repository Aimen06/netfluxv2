import "../assets/Gallery.css"
function Replay(props)
{
    return (
        <div className="row">
            {props.images.map(function (element) {
                return(<div className="images">
                   <img src={element} alt={element}/>
                </div>)
            })}
        </div>
    );
}

export default Replay;