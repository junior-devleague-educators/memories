var score = 0;
var clicks = 0;
var first;
var second;
var time = 60;
var i = 0;
var backcard = "assets/cardback.jpg"
var imgArray = ["assets/cat1.jpeg", "assets/cat2.jpg", "assets/dog1.jpg", "assets/dog2.jpg", "assets/cat1.jpeg", "assets/cat2.jpg", "assets/dog1.jpg", "assets/dog2.jpg"];

var cardArray = [];
// cardArray[0]=document.getElementById("c1");
// cardArray[1]=document.getElementById("c2");
// cardArray[2]=document.getElementById("c3");
// cardArray[3]=document.getElementById("c4");
// cardArray[4]=document.getElementById("c5");
// cardArray[5]=document.getElementById("c6");
// cardArray[6]=document.getElementById("c7");
// cardArray[7]=document.getElementById("c8");

//var cardArray[] = document.getElementById();


function on(card){
	
	if (clicks === 0 && time === 60){
		countDown();
		
	}
		choose(card);
	//flip();
} 

function countDown(){
 //timer function
 
 var downloadTimer = setInterval(function() {
 time--;
 // Display the result in the element with id="demo"
 document.getElementById("timer").innerHTML = time;

 // If thscore = 0;e count down is finished, write some text
 if (time < 0) {
   	clearInterval(downloadTimer);
   	document.getElementById("timer").innerHTML = "EXPIRED";
	}
	}, 1000);
}

// function flip(){
//  	if(){
//  		.....
//  	}

// 		match(click1, click2);
// }

function choose(card){
	if (clicks === 2) {
    	return;
    }
    if (clicks === 0) {
        first = card;
	    document.images[card].src = imgArray[card];
	    console.log(document.images[card]);
	    clicks ++;
	    console.log(clicks, "card#", card);
	    }
	if (clicks ===1){
    	console.log(clicks);
        clicks++;
        second = card;
        console.log(clicks);
        document.images[card].src = imgArray[card];
        console.log(card);
        match();
        }
    }
function match(){
	
	if (imgArray[second] == imgArray[first]) {
            score++;
            document.getElementById("score").innerHTML = score;
            clicks = 0;
        } else {
            document.images[first].src = backcard;
            document.images[second].src = backcard;
            clicks = 0;
            return;
        }
    }
 // 		unFlip();

// 	}
			

// function unFlip(){

// }
function reset(){
	console.log("hi");
	score = 0;
	document.getElementById("score").innerHTML = score;
	time = 60;
	clicks = 0;
	console.log(score, time);
	for (i; i<imgArray.length;i++)
	document.images[i].src = backcard;
}
