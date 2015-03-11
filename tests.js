/*---------------------------------------------------------------------------*/
kodi = require("./kodi-controller");
/*---------------------------------------------------------------------------*/
kodi.get_player(function(err, resp){
  if (!err) {
    console.log("get_player OK! " + JSON.stringify(resp));
  } else {
    console.log("get_player FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.send_input(kodi.remote_inputs["Back"], function(err, resp){
  if (!err) {
    console.log("send_input OK! " + JSON.stringify(resp));
  } else {
    console.log("send_input FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.send_input_action('close', function(err, resp){
  if (!err) {
    console.log("send_input_action OK! " + JSON.stringify(resp));
  } else {
    console.log("send_input_action FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.get_movie_library(function(err, resp){
  if (!err) {
    console.log("get_movie_library OK! " + JSON.stringify(resp));
  } else {
    console.log("get_movie_library FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.get_movie_details(493, function(err, resp){
  if (!err) {
    console.log("get_movie_details OK! " + JSON.stringify(resp));
  } else {
    console.log("get_movie_details FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.get_playlists(function(err, resp){
  if (!err) {
    console.log("get_playlists OK! " + JSON.stringify(resp));
  } else {
    console.log("get_playlists FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.clear_playlist(1, function(err, resp){
  if (!err) {
    console.log("clear_playlist OK! " + JSON.stringify(resp));
  } else {
    console.log("clear_playlist FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.insert_at_playlist(1, 0, 493, function(err, resp){
  if (!err) {
    console.log("insert_at_playlist OK! " + JSON.stringify(resp));
  } else {
    console.log("insert_at_playlist FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.get_playlist_items(1, function(err, resp){
  if (!err) {
    console.log("get_playlist_items OK! " + JSON.stringify(resp));
  } else {
    console.log("get_playlist_items FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
kodi.start_playlist(1, 0, function(err, resp){
  if (!err) {
    console.log("start_playlist OK! " + JSON.stringify(resp));
  } else {
    console.log("start_playlist FAIL!");
  }
});
/*---------------------------------------------------------------------------*/
// kodi.start_movie(493, function(err, resp){
//   if (!err) {
//     console.log("start_movie OK! " + JSON.stringify(resp));
//   } else {
//     console.log("start_movie FAIL!");
//   }
// });
/*---------------------------------------------------------------------------*/
