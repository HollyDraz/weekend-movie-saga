import React from 'react';
import {useState} from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MovieDetails = () => {
    //may be needed to go back to movie list page
    const history = useHistory();
    //selector and dispatch 
    const details = useSelector ( store => store.details);
    const genres = useSelector (store => store.genres);
    const dispatch = useDispatch();
    const {id} = useParams();
    
  


    const handleDetails = () => {
        console.log('movie detail test', details);
        dispatch({type: 'FETCH_DETAILS', payload: id});
    }


    useEffect (() => {
        console.log('comp did mount for movie details');
        handleDetails();
    }, [id]);

    return(
        <>
         <img src={details.poster}></img>
            <p>
            {details.title}
            {details.description}
            </p>
            <section className='genres'>
                {genres.map(genre => {
                    return (<div> 
                        <h3>{genre.name}</h3>

                    </div>)
                })}
            </section>
           
     

        <button onClick={() => history.push('/')}>Back</button>
        </>
    )

}

export default MovieDetails;