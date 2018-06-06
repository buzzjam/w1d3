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
            }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
 var libPlay = library.playlists
 for (var playlistProperty in libPlay){
   console.log(libPlay[playlistProperty].id + ': '+ libPlay[playlistProperty].name + ' - '+ libPlay[playlistProperty].tracks.length + ' tracks')
 }
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
 var libTrack = library.tracks
 for (var trackProperty in libTrack){
   console.log(libTrack[trackProperty].id + ': '+ libTrack[trackProperty].name + ' by '+ libTrack[trackProperty].artist + ' (' +libTrack[trackProperty].album+ ')')
 }
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
 var libPlay = library.playlists
 var libTrack = library.tracks
 console.log(libPlay[playlistId].id + ': '+ libPlay[playlistId].name + ' - '+ libPlay[playlistId].tracks.length + ' tracks')

 for (i in libPlay[playlistId].tracks){
   var trackNumber = libPlay[playlistId].tracks[i];
   console.log(library.tracks[trackNumber].id + ': '+ library.tracks[trackNumber].name + ' by '+ library.tracks[trackNumber].artist + ' (' +library.tracks[trackNumber].album+ ')')
}
}



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
 var inputTrackId = library.tracks[trackId].id;
 library.playlists[playlistId].tracks.push(inputTrackId);
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
 return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
 var newId = uid();
 library.tracks[newId] = {
   'id': newId,
   'name': name,
   'artist': artist,
   'album': album
 };

}


// adds a playlist to the library

var addPlaylist = function (name) {
 var newPlaylistId = uid();
 library.playlists[newPlaylistId] = {
   'id': newPlaylistId,
   'name': name,
   'tracks': [],
   };

}



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

//printPlaylists();
//printTracks();
//printPlaylist('p02');
// addTrackToPlaylist('t01','p02');
// console.log(library.playlists);

// console.log(addTrack('TEST','joHN','joHNAlbum'));
// console.log(addPlaylist('playlistname'));
// console.log(library);