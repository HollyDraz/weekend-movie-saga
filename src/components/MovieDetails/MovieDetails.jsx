import React from 'react';
import {useState} from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const MovieDetails = () => {
    //may be needed to go back to movie list page
    const history = useHistory();
    //selector and dispatch 
    const details = useSelector ( store => store.details);
    const dispatch = useDispatch();
    
  


    const handleDetails = () => {
        console.log('movie detail test', details);
        dispatch({type: 'FETCH_DETAILS'});
    }


    useEffect (() => {
        console.log('comp did mount for movie details');
        handleDetails();
    }, []);

    return(
        <>
        <ul>
           
        </ul>

        <button onClick={() => history.push('/')}>Back</button>
        </>
    )

}

export default MovieDetails;