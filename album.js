
window.onload = () => {
    fetchingAlbumApi()


}


const fetchingAlbumApi = function(){
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${119606}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const mydata = data

        const applyTheAblumFeatures = function(id){
            let albumImageDiv = document.querySelector("#main_content .row")
            console.log(albumImageDiv);

            //creating the first img cover 
            let imageDiv = document.createElement("div")
            imageDiv.classList.add("col-sm-12", "col-md-5", "col-lg-5", "image")
            albumImageDiv.appendChild(imageDiv)
            imageDiv.innerHTML += ` <div class="image-div"><img src="${id.cover}" alt="Album cover">
                                                <div class="album_name">${id.title}</div>
                                                <div class="artist-name">${id.artist.name}</div> <br>
                                                <button type="button" class="btn btn-success btn-md p-l-4">PLAY</button>
                                                <div class="img-lst-cnt">${id.duration} . ${id.tracks.data.length} SONGS</div>
                                                <div class="font-aw"><i class="far fa-heart"></i><i class="fas fa-ellipsis-h"></i></div>
                                                </div>`
            // Creating Div > Ul to add the list content
            const ulParentDiv = document.createElement("div")
            ulParentDiv.classList.add("col-sm-12", "col-md-7", "col-lg-7")
            albumImageDiv.appendChild(ulParentDiv)
            const ulDiv = document.createElement("ul")
            ulDiv.classList.add("audio-list")
            ulParentDiv.appendChild(ulDiv)

            //looping through each track to update the list
            let tracks = id.tracks.data
                for(i=0;i<tracks.length;i++) {
                    ulDiv.innerHTML += `<li><div class="song-list"><div class="song-title"><i class="fas fa-music"></i>${tracks[i].title}</div><div class="timer">${tracks[i].duration}</div></div>
                                                 <div class="artist-name">${id.artist.name}</div></li>`
                };
        };

     applyTheAblumFeatures(mydata)
            

    });
}