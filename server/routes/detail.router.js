const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// get to fetch the movie details from database 
router.get('/', (req, res) => {
    const query = `SELECT id, description FROM movies;`;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: get movie details', err);
        res.sendStatus(500)
      })
  
  })



module.exports = router;