import "../assets/Gallery.css"
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
function Trends()
{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWQ4OGM1Njg1NWUyOTg2ZDdkNjJiZTJhMDQ2MWNkZiIsIm5iZiI6MTczMjg3Nzk0NS45NTUwMDAyLCJzdWIiOiI2NzQ5OWU3OTE2NTBhNWUzNTMzOGZhZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mtYSaLxndlH5wvQB9Pb1_IEn37u8qa5OIa8AAxhmDCc'
        }
    };
        const urlImage = 'https://image.tmdb.org/t/p/w500/'
        const [movies, setMovies] = useState([]);
        useEffect( () => {
            fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
                .then((response) => response.json())
                .then((data)=> setMovies(data.results))
                .catch(err => console.error(err));
            },[]);

    return (
        <>
        <div className="tendance">Tendances actuelles</div>
         <div className="row">
             {movies.map(function (tvshow) {
                return ( <Link to={`/tvshow/${tvshow.id}`}><div className="images">
                    <img src={urlImage+tvshow.poster_path} alt={urlImage+tvshow.poster_path}/>
                </div></Link>)
            })}
        </div>
        </>
    );
}

export default Trends;