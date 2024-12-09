import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../assets/Detail.css"

function Detail()
{
    let {tvShowId} = useParams();
    const urlImage = 'https://image.tmdb.org/t/p/w500/'
    const [tvShow, setTvShow] = useState({});
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQ4OGM1Njg1NWUyOTg2ZDdkNjJiZTJhMDQ2MWNkZiIsIm5iZiI6MTczMjg3Nzk0NS45NTUwMDAyLCJzdWIiOiI2NzQ5OWU3OTE2NTBhNWUzNTMzOGZhZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mtYSaLxndlH5wvQB9Pb1_IEn37u8qa5OIa8AAxhmDCc'
        }
    };
    useEffect( () => {
        fetch(`https://api.themoviedb.org/3/tv/${tvShowId}?language=en-US`, options)
            .then((response) => response.json())
            .then((data)=> setTvShow(data))
            .catch(err => console.error(err));
        },[]);
    return(
        <div className="wrapper-detail">
            <div className="image-poster">
                <img src={urlImage + tvShow.backdrop_path} alt={urlImage + tvShow.backdrop_path}/>
            </div>
            <div className="txtDetail">
                <h2>{tvShow.name}</h2>
                <p>{tvShow.overview}</p>
                <p>{tvShow.number_of_seasons} Saisons </p>
            </div>
        </div>
    );
}

export default Detail;