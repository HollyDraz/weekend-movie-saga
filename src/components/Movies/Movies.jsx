import React from 'react';
import {useState} from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';

function Movies({movie}){
    const history = useHistory();

    const handleDetails = () => {
        history.push(`/details/${movie.id}`)
    }

    return(
    <div key={movie.id} >
        <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title}/>
        <br/>
        <button onClick={handleDetails} className="movie-button">Details</button>
        <br/>    
    </div>
    )


}

export default Movies;