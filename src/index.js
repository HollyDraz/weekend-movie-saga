import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    //yield takeEvery('FETCH_GENRES', fetchMovieGenres);
    yield takeEvery('FETCH_DETAILS', fetchMovieDetails);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

// create saga to fetch the movie genres 
// function* fetchMovieGenres(){
//     //get genres from the database:
//     try{
//         const genres = yield axios.get('/api/genres');
//         console.log('get all info', genres.data);
//         yield put ({type: 'SET_GENRES', payload:genres.data })
//     }catch{
//         console.log('an error occurred in genres getter')
//     }
// }

// fetch movie details 
function* fetchMovieDetails(action){
    try{
        const details = yield axios.get(`/api/movie/${action.payload}`);
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        console.log('MOVIE DETAILS', details.data);
        yield put ({type: 'SET_DETAILS', payload: details.data })
        yield put ({type: 'SET_GENRES', payload: genres.data })
    }catch{
        console.log('an error occurred in details getter')
    }
}


//reducer for movie details 
const details = (state = [], action ) => {
    if(action.type === 'SET_DETAILS'){
        return action.payload;
    }
    return state;

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}




// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details,
       
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
