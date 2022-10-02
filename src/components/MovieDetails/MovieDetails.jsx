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
   // const [newDetail, setNewDetail] = useState(''); 
    const dispatch = useDispatch();

  
    // dispatch called for movie details 
    //how do I know when to call a payload? 
    // const handleDetails = () => {
    //     dispatch({type: 'SET_DETAILS'})
    // }

    //get movie genres 
    const getPlants = () => {
        dispatch({type: 'FETCH_PLANTS' });
}



    useEffect (() => {
        console.log('comp did mount');
        handleDetails();
    }, []);

    return(
        <>
        {details.map(detail => {
                <li key={detail} >{detail}</li>
            })}

        <button onClick={() => history.push('/')}>Back</button>
        </>
    )

}

export default MovieDetails;