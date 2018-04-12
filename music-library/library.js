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

function getKeys(obj) {
  return Object.keys(obj);
}

function getPlaylist(playlistId) {
  return library.playlists[playlistId];
}

function getTrack(trackId) {
  return library.tracks[trackId];
}

function formatPlaylist(playlistId) {
  const playlist = getPlaylist(playlistId)
  return `${playlist['id']}: ${playlist['name']} - ${playlist['tracks'].length} tracks`
}

function formatTracks(trackId) {
  const track = getTrack(trackId);
  return `${track['id']}: ${track['name']} by ${track['artist']} (${track['album']})`
}

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  const output = []
  const playlists = library.playlists;
  for (const keys in playlists) {
    const formatPlaylist =  `${playlists[keys].id}: ${playlists[keys].name} - ${playlists[keys].tracks.length} tracks`;
    output.push(formatPlaylist);
  }
  return output.join('\n')
}

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  const output = [];
  const tracks = library.tracks;
  for (const keys in tracks) {
    const formatTracks =  `${tracks[keys].id}: ${tracks[keys].name} by ${tracks[keys].artist} (${tracks[keys].album})`;
    output.push(formatTracks);
  }
  return output.join('\n')
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  const output = [];
  const playlist = getPlaylist(playlistId)
  output.push(formatPlaylist(playlistId))
  for (const values of playlist.tracks) {
    const formattedTracks = formatTracks(values)
    output.push(formattedTracks);
  }
  return output.join('\n')
}

// adds an existing track to an existing playlist

function playlistExists(playlistId) {
  if (getPlaylist(playlistId)) return true;
  else return false
}

function trackExists(trackId) {
  if (getTrack(trackId)) return true;
  else return false
}

// Get track  info - done
// modify the object

var addTrackToPlaylist = function (trackId, playlistId) {
  if (trackExists(trackId) && playlistExists(playlistId)) {
    return library.playlists[playlistId]['tracks'].push(trackId)
  } else {
    console.log('invalid input')
  }
}

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library


var addTrack = function (name, artist, album) {
  const newTrack = {
    'id': uid(),
    'name': name,
    'artist': artist,
    'album': album
  }
  const id = newTrack.id;
  library.tracks[id] = newTrack
  return newTrack;
}

// adds a playlist to the library

var addPlaylist = function (name) {
  const newPlaylist = {
    'id': uid(),
    'name' : name
  }
  const id = newTrack.id;
  library.playlists[id] = newPlaylist
  return newPlaylist;
}

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  const regex = new Regex(query, 'g');
  console.log(regex)
}