import React , {useState,useEffect}from 'react'
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = 'http://image.tmdb.org/t/p/original/';

function Row({title,fetchUrl,isLargeRows}) {
    const [movies,setMovies]=useState([]);
    const [trailerUrl,Settrailer]=useState("");

    // code which run on a specific condition
    useEffect(()=>{
        // is [],run once when row loads and donot run again
        async function fetchData() {
            const request=await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    const opts={
        height:"350",
        width:"100%",
        playerVars:{
            aytoplay:1,
        }
    }
    const handleClick=(movie)=>{
        if(trailerUrl){
            Settrailer("");
        }
        else{
            movieTrailer(movie?.name ||"")
                .then((url)=>{
                    const urlParams=new URLSearchParams(new URL(url).search)
                    Settrailer(urlParams.get("v"));
                })
                .catch((error)=>console.log(error));
        }
    }
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img 
                    onClick={()=>handleClick(movie)}
                    key={movie.id}
                    className={`row__poster ${isLargeRows && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRows? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div> 
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row
