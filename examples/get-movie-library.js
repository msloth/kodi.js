/*---------------------------------------------------------------------------*/
kodi = require("kodi");
/*---------------------------------------------------------------------------*/
kodi.get_movie_library(function(err, resp){
  if (!err) {
    // This will print out the entire movie library.
    console.log("get_movie_library OK! " + JSON.stringify(resp));
  } else {
    console.log("get_movie_library FAIL!");
  }
});
