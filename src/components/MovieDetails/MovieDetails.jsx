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
    //const details = useSelector ( store => store.details);
   // const [newDetail, setNewDetail] = useState(''); 
    const dispatch = useDispatch();


    const handleDetails = () => {
        dispatch({type: 'SET_DETAILS'});
    }


    useEffect (() => {
        console.log('comp did mount');
        handleDetails();
    }, []);

    return(
        <>

        <button onClick={() => history.push('/')}>Back</button>
        </>
    )

}

export default MovieDetails;