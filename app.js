var imgArray = ["cat4.jpg"];
var cardArray = [];
cardArray[0]=document.getElementById("c1");
cardArray[1]=document.getElementById("c2");
cardArray[2]=document.getElementById("c3");
cardArray[3]=document.getElementById("c4");
cardArray[4]=document.getElementById("c5");
cardArray[5]=document.getElementById("c6");
cardArray[6]=document.getElementById("c7");
cardArray[7]=document.getElementById("c8");
var i = 0;
var imgElement = document.getElementById("c1");

function on(){
 
 var time = 60;

 var downloadTimer = setInterval(function() {
 time--;
 // Display the result in the element with id="demo"
 document.getElementById("timer").innerHTML = time;

 // If the count down is finished, write some text
 if (time < 0) {
   clearInterval(downloadTimer);
   document.getElementById("timer").innerHTML = "EXPIRED";
 }
 }, 1000);
}
var x = document.getElementById("c1");
console.log(x);
function flip(){
	console.log("hi");
	imgElement.src = cardArray[i];
	if (x.style.backgroundImage==="dog3.jpg"&& cardArray[i]){
		i = 1;
	}else if(i === 0 && getElementById("c2")){
		i = 2;
	}else if(i === 0 && getElementById("c3")){
		i = 3;
	}else if(i === 0 && getElementById("c4")){
		i = 4;
	}else if(i === 0 && getElementById("c5")){
		i = 5;
	}else if(i === 0 && getElementById("c6")){
		i = 6;
	}else if(i === 0 && getElementById("c7")){
		i = 7;
	}else if(i === 0 && getElementById("c8")){
		i = 8;
	}else{
		i = 0;
	}
}


>>>>>>> f4913dc73ea16ee9d04a5bc733872d65eecce841
