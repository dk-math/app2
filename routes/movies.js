const { response } = require('express');
var express = require('express');
var router = express.Router();
require('dotenv').config();

router.get('/' ,function(req, res, next) {
    let keyword = req.query.keyword;
    const movieApiKey = process.env.TMDB_API_KEY;
    const fontawesomeApiKey = process.env.FONTAWESOME_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie/?api_key=${movieApiKey}&language=ja&region=JP&query=${keyword}&page=1`;
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(result => {
        const movies = result.results;
        movies.sort((a, b) => a.release_date < b.release_date ? 1 : -1);
        const data = {
          title: "映画GO",
          movies: result.results,
          fontawesomeApiKey: fontawesomeApiKey
        }
        res.render('movies', data);
      })
      .catch(err => {
        console.log(err);
      });
  
  });

  module.exports = router;