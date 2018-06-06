var library = {
tracks: { t01: { id: "t01",
                 name: "Code Monkey",
                 artist: "Jonathan Coulton",
                 album: "Thing a Week Three" },
          t02: { id: "t02",
                 name: "Model View Controller",
                 artist: "James Dempsey",
                 album: "WWDC 2003"},
          t03: { id: "t03",
                 name: "Four Thirty-Three",
                 artist: "John Cage",
                 album: "Woodstock 1952"}
        },
playlists: { p01: { id: "p01",
                    name: "Coding Music",
                    tracks: ["t01", "t02"]
                  },
             p02: { id: "p02",
                    name: "Other Playlist",
                    tracks: ["t03"]
                  }
           },
printTracks: function () {
var libTrack = library.tracks
for (var trackProperty in libTrack){
 var phraseAgain = libTrack[trackProperty].id + ': '+ libTrack[trackProperty].name + ' by '+ libTrack[trackProperty].artist + ' (' +libTrack[trackProperty].album+ ')';
 return phraseAgain;
}
},

printPlaylists: function () {
 var libPlay = this.playlists
   for (var playlistProperty in libPlay){
   returnPhrase = libPlay[playlistProperty].id + ': '+ libPlay[playlistProperty].name + ' - '+ libPlay[playlistProperty].tracks.length + ' tracks';
     return returnPhrase;
  }
 },

 printPlaylist: function (playlistId) {
  var libPlay = this.playlists
  var libTrack = this.tracks
  console.log(libPlay[playlistId].id + ': '+ libPlay[playlistId].name + ' - '+ this.playlists[playlistId].tracks.length + ' tracks')

  for (i in libPlay[playlistId].tracks){
   var trackNumber = libPlay[playlistId].tracks[i];
   var phrase = this.tracks[trackNumber].id + ': '+ this.tracks[trackNumber].name + ' by '+ this.tracks[trackNumber].artist + ' (' + this.tracks[trackNumber].album + ')';
    return phrase;
    }
 },

 addTrackToPlaylist: function (trackId, playlistId) {
  var inputTrackId = this.tracks[trackId].id;
  library.playlists[playlistId].tracks.push(inputTrackId);
   },

 addTrack: function (name, artist, album) {
  var newId = uid();
  this.tracks[newId] = {
    'id': newId,
    'name': name,
    'artist': artist,
    'album': album
  };
 },

 addPlaylist: function (name) {
  var newPlaylistId = uid();
  this.playlists[newPlaylistId] = {
    'id': newPlaylistId,
    'name': name,
    'tracks': [],
   };
 },

}


var uid = function() {
return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}