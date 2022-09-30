import React from 'react';
import {useState} from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';

const MovieDetails = () => {
    //may be needed to go back to movie list page
    const history = useHistory();
    //selector and dispatch 
    const details = useSelector ( store => store.details);
    const dispatch = useDispatch();

    // dispatch called 
    //how do I know when to call a payload? 
    const handleDetails = (event) => {
        dispatch({type: 'SET_DETAILS', payload: event.target.value } )
    }
    return(
        <>
        <p>movie details here :3 </p>
        <button onClick={() => history.push('/')}>Back</button>
        </>
    )

}

export default MovieDetails;