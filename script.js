var songlist = [
    {
        title: "Mr. Brightside",
        album: "Hot Fuss",
        artist: "The Killers",
        bannersource : "url(images/hotfuss.jpg)",
        source: "audio/song1.mp3"
    },
    {
        title: "Tranquilize",
        album: "Sawdust",
        artist: "The Killers ft. Lou Reed" ,
        bannersource : "url(images/sawdust.png)",
        source: "audio/song2.mp3"
    },
    {
        title: "This River is Wild",
        album: "Sam's Town",
        artist: "The Killers",
        bannersource : "url(images/samstown.png)",
        source: "audio/song3.mp3"
    },
    {
        title: "When the Dreams Run Dry",
        album: "Imploding the Mirage",
        artist: "The Killers",
        bannersource : "url(images/imploding.png)",
        source: "audio/song4.mp3"
    },
    {
        title: "Cody",
        album: "Pressure Machine",
        artist: "The Killers",
        bannersource : "url(images/pressuremachine.jpg)",
        source: "audio/song5.mp3"
    }
]

var sound = document.getElementById('audio-player');
var buttonPp = document.getElementById('btn-pp')
var spinDeg = 0;
var songIndex = 4;
var volumeBar = document.getElementById('vol-bar-fill')
var volVal
var vol = sound.volume

function actionPp(){
    if(sound.paused){
        sound.play();
        buttonPp.innerHTML = '<i id="icon-pause" class="fas fa-pause"></i>'
        isRotating = 1
    } else{
        sound.pause();
        buttonPp.innerHTML = '<i id="icon-pause" class="fas fa-play"></i>'
        isRotating = 0
    }
}

var allSongs = document.querySelectorAll('.songs')

function changeSong(num){
    document.getElementById('song-banner').style.backgroundImage = songlist[num].bannersource
    document.getElementById('song-title').innerHTML = songlist[num].title
    document.getElementById('song-album').innerHTML = songlist[num].album
    document.getElementById('song-artist').innerHTML = songlist[num].artist
    sound.src = songlist[num].source
    for(let i = 0; i < allSongs.length;i++){
        allSongs[i].style.border = 'none';   
    }
    document.getElementById(`song${num}`).style.border = "5px solid orange"
    
    
    songIndex = num;
    buttonPp.innerHTML = '<i id="icon-pause" class="fas fa-play"></i>'
    isRotating = 0
    rotation = 1
    document.getElementById('song-banner').style.transform = `rotate(${rotation}deg)`
}

function cycle(direction){
    songIndex += direction;
    if(songIndex > 4){
        songIndex = 0
    }
    if(songIndex < 0){
        songIndex = 4
    }
    changeSong(songIndex);
}



function actionVol(value){
    if(sound.muted){
        sound.muted = false
    }

    vol += value
    if(vol > 1){
        vol = 1;
    } else if (vol < 0){
        vol = 0;
    }

    sound.volume = vol

    updateVol()
}

function updateVol(){

    if(sound.muted){
        volumeBar.style.opacity = "0"
    } else volumeBar.style.opacity = "1"
    var volVal = vol*100
    volumeBar.style.width = (volVal +'%')
}

var rotation = 0
var isRotating = 0

setInterval(function(){
    if(isRotating){
        rotation += 5
        document.getElementById('song-banner').style.transform = `rotate(${rotation}deg)`
    }
}, 100
)

setInterval(function(){
    document.getElementById('bar-current').style.width = (sound.currentTime /sound.duration)*100 + '%' 
},1000)