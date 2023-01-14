const { response } = require('express');
var express = require('express');
var router = express.Router();
require('dotenv').config();

router.get('/', (req, res, next) => {
  const movieApiKey = process.env.TMDB_API_KEY;
  const fontawesomeApiKey = process.env.FONTAWESOME_API_KEY;
  const url1 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${movieApiKey}&language=ja&region=JP&page=1`;
  const url2 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${movieApiKey}&language=ja&resion=JP&page=2`;
  const url3 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${movieApiKey}&language=ja&resion=JP&page=3`;
  const url4 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${movieApiKey}&language=ja&resion=JP&page=4`;
  const url5 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${movieApiKey}&language=ja&resion=JP&page=5`;
  let movieList;
  fetch(url1)
  .then(res => {
    return res.json();
  })
  .then(result => {
    movieList = result.results;
    return fetch(url2);
  })
  .then(res => {
    return res.json();
  })
  .then(result => {
    movieList = movieList.concat(result.results);
    return fetch(url3);
  })
  .then(res => {
    return res.json();
  })
  .then(result => {
    movieList = movieList.concat(result.results);
    return fetch(url4);
  })
  .then(res => {
    return res.json();
  })
  .then(result => {
    movieList = movieList.concat(result.results);
    return fetch(url5);
  })
  .then(res => {
    return res.json();
  })
  .then(result => {
    movieList = movieList.concat(result.results);
    const data = {
      title: "映画GO",
      movies: movieList,
      fontawesomeApiKey: fontawesomeApiKey
    };
    res.render('index', data)
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;
