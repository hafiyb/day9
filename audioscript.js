var sound = document.getElementById('my-song')

var songlist1 ={
    src: 'audio/littlebit.mp3',
    title : "littlebit",
    artist : 'N/A'
}

var songlist2 ={
    src: 'audio/bloop.mp3',
    title : "bloop",
    artist : 'none'
}

function getSong(num){
    document.getElementById('songsrc').innerHTML = num.src
    document.getElementById('songtitle').innerHTML = num.title
    document.getElementById('songartist').innerHTML = num.artist
    sound.src = num.src

    // switch(num){
    //     case songlist1:
    //         console.log('case1');
    //         break;
    //     case songlist2:
    //         console.log('case2');
    //         break;
    //     default:
    //         console.log('default');
    //         break;
    // }
}


function playSong(){
    sound.play();
}

function pauseSong(){
    sound.pause()
}

setInterval(checkTime,1000) 

function checkTime() {
    console.log(Math.round(sound.duration))
    console.log(Math.round(sound.currentTime))
    document.getElementById('bar-inside').style.width = (sound.currentTime/sound.duration * 100) + '%';

    var clrR = (Math.random()*255).toFixed(2);
    var clrG = (Math.random()*255).toFixed(2);
    var clrB = (Math.random()*255).toFixed(2);

    //var RGBval = "R: " + clrR + ", G: " + clrG + ", B: " + clrB
    RGBval = `${clrR}, ${clrG}, ${clrB}`
    document.getElementById('bar-inside').style.backgroundColor = "rgb(" + RGBval + ")";
    console.log("rgb(" + RGBval + ")")
}