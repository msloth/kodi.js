/*---------------------------------------------------------------------------*/
kodi = require("kodi");
/*---------------------------------------------------------------------------*/
var movie = 493; // a movie from your library

kodi.get_movie_details(movie, function(err, resp){
  if (!err) {
    console.log("get_movie_details OK! " + JSON.stringify(resp));
  } else {
    console.log("get_movie_details FAIL!");
  }
});
