var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

var vid = document.getElementById("player1");
vid.autoplay = false;
vid.load();

var vid = document.getElementById("player1");
vid.loop = true;

document.querySelector("#play").addEventListener("click", function(playVid) {
	console.log("Play Video");
	vid.play()
});

document.querySelector("#pause").addEventListener("click", function(pauseVid) {
	console.log("Pause Video");
	vid.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	var vid = document.getElementById("player1");
	vid.playbackRate = 0.5; 
	// 0.95
	console.log("Slow Down" alert(vid.playbackRate))
});

document.querySelector("#faster").addEventListener("click", function() {
	var vid = document.getElementById("player1");
	vid.playbackRate = 2;
	// 1.05
	// console.log("Speed Up current speed" = playbackspeed);
});



