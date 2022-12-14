import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import Movies from '../Movies/Movies';
import { useHistory } from 'react-router-dom';


function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Movies movie={movie}/>
                        // <div key={movie.id} >
                        //     <h3>{movie.title}</h3>
                        //     <img src={movie.poster} alt={movie.title}/>
                        //     <br/>
                        //     <button onClick={handleDetails} className="movie-button">Details</button>
                        //     <br/>
                            
                        // </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;