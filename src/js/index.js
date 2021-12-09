/** Functions */
var songsOnPage = 2;

function getAlbums(albums) {
    document.getElementById("albumsGallery").innerHTML = "";

    let i = 0;
    let text = [];
    albums.forEach(album => {
        document.getElementById("albumsGallery").innerHTML += ` <span class="img-gal"><img width="300" height="300" src=${album.url} alt="NO ICON" /></span>`;
        i++;
        text.push(album.name + " (" + album.released_at + ")");
        if (i % 3 == 0) document.getElementById("albumsGallery").innerHTML += "<br>";
    });
    document.getElementById("albumsSingles").innerText = text.join(" | ");
}

function getSongs(songs) {
    document.getElementById("tableBody").innerHTML = "";
    var i=0;
    songs.forEach(song => {
        let visibility="display: center";
        if(i>=songsOnPage) visibility="display: none";
        document.getElementById("tableBody").innerHTML += `<tr style="${visibility}" class = "topSongsList">
         <td><img class="albumcover" width="100" height="100" src="${song.url}" alt="NO ICON" /></td>
         <td>${song.name}</td>
         <td>${song.album}</td>
         <td>${song.released_at}</td>
         </tr><br>`;
         i++;
    });
}

function showLess(pages) {
    let topSongs = document.getElementsByClassName("topSongsList");

    songsOnPage = songsOnPage - pages <= 0 ? 1 : songsOnPage - pages;

    for(let i=songsOnPage; i< topSongs.length; i++) {
       topSongs[i].setAttribute("style","display: none");
    }

}

function showMore(pages) {
    let topSongs = document.getElementsByClassName("topSongsList");
    songsOnPage = songsOnPage + pages > topSongs.length ? topSongs.length : songsOnPage + pages;
    for(let i=0; i< songsOnPage; i++) {
       topSongs[i].setAttribute("style","display: center");
    }

}


function sortBySong(songs) {
    songs = songs.sort((a,b)=>{
        return a.name.localeCompare(b.name);
    });
    getSongs(songs);
}

function sortByAlbum(songs) {
    songs = songs.sort((a,b)=>{
        return a.album.localeCompare(b.album);
    });
    getSongs(songs);
}

function sortByDate(songs) {
    songs = songs.sort((a,b)=>{
        return a - b;
    });
    getSongs(songs);
}