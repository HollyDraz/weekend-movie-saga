import React from 'react';
import {useState} from 'react';
import {useDispatch } from 'react-redux';
import {useSelector} from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const MovieDetails = () => {
    //may be needed to go back to movie list page
    const history = useHistory();
    //selector and dispatch 
    const details = useSelector ( store => store.details);
    const genres = useSelector (store => store.genres);
    const dispatch = useDispatch();
    const {id} = useParams();
    // 

  


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
        <Box x={{ border: 3 }}>
            <Card>
                <CardContent>
         <img src={details.poster}></img>
            <p>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {details.title}
            {details.description}
            </Typography>
            </p>
            <section className='genres'>
                {genres.map(genre => {
                    return (<div> 
                        <h3>{genre.name}</h3>

                    </div>)
                })}
            </section>
                 </CardContent>
                </Card>
            </Box>
            <br/>
     

        <Button onClick={() => history.push('/')}>Back</Button>
        </>
    )

}

export default MovieDetails;