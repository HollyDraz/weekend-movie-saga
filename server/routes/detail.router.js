const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// get to fetch the movie details from database 
router.get('/:id', (req, res) => {
    const query = `SELECT * FROM movies WHERE id=$1;`;
    pool.query(query, [req.params.id])
      .then( result => {
        res.send(result.rows[0]);
      })
      .catch(err => {
        console.log('ERROR: get movie details', err);
        res.sendStatus(500)
      })
  
  })



module.exports = router;