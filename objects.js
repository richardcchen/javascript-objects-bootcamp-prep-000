var playlist = {Slowdive: "Alison"};

function updatePlaylist(playlist, artistname, songtitle){
  playlist[artistname] = songtitle;
  return playlist
}

function removeFromPlaylist(playlist, artistname){
  delete playlist[artistname];
  return playlist
}