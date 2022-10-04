import React from 'react';
import {useState} from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';

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
        <Button onClick={handleDetails} className="movie-button">Details</Button>
        <br/>    
    </div>
    )


}

export default Movies;