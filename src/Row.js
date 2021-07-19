import React , {useState,useEffect}from 'react'
import axios from './axios';
import './Row.css';
const base_url = 'http://image.tmdb.org/t/p/original/';

function Row({title,fetchUrl,isLargeRows}) {
    const [movies,setMovies]=useState([]);

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

    console.log(movies)
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRows && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRows? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div> 
        </div>
    )
}

export default Row
