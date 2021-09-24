// setInterval(moveBox, 1000)

// function moveBox(){
//     console.log('test')
// }

// setInterval(function(){
//     console.log('running without function')
// }, 1000)


// var timer = setInterval(function(){
//     console.log('using timer var')
// },1000)

// clearInterval(timer);

var counter = 0;

setTimeout(function(){
    clearInterval(interval1)
    clearInterval(interval2)
    clearInterval(interval3)
    clearInterval(interval4)
    setInterval(function(){
        counter+=1;
        document.getElementById('time').innerHTML = counter;
    },1000)
}, 5100);

var interval1 = setInterval(function(){
    counter+=1;
    document.getElementById('time').innerHTML = counter;
},1000)

var box1X = -100;
var box2Y = -100;
var box3X = -100;
var box3Y = -100;

var interval2 = setInterval(function(){
    if(box1X == 900){
        box1X = -100
    }
    box1X += 5;
    document.getElementById('moving-box1').style.left = box1X + 'px';
},10)

var interval3 = setInterval(function(){
    if(box2Y == 700){
        box2Y = -100
    }
    box2Y += 5;
    document.getElementById('moving-box2').style.top = box2Y + 'px';
},20)

var interval4 = setInterval(function(){
    if(box3Y == 700){
        box3Y = -100
    }
    if(box3X == 900){
        box3X = -100
    }
    box3X += 5;
    box3Y += 5;
    document.getElementById('moving-box3').style.left = box3X + 'px';
    document.getElementById('moving-box3').style.top = box3Y + 'px';
},30)

