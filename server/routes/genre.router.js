const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  const query = `SELECT  "genres"."name" FROM "genres"
  JOIN "movies_genres" on "movies_genres"."genre_id" = "genres"."id" 
  JOIN "movies" on "movies"."id" = "movies_genres"."movie_id"
  WHERE "movies"."id" = $1`;
  pool.query(query, [req.params.id])
  .then( result => {
    //why don't we need the results.rows[0]?
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: get movie details', err);
    res.sendStatus(500)
  })

})


module.exports = router;