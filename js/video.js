var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 + "%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9; 
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up")
	video.playbackRate /= .90; 
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	console.log(video.CurrentTime)

	if((video.currentTime + 10) < video.duration){
		video.currentTime +=10;
	}
	else(
		video.currentTime = 0
	);
	console.log(video.currentTime)});

document.querySelector("#slider").addEventListener("change", function(){
	console.log("Slider");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == true){
		console.log("unmuted");
		video.muted = false;
		this.innerHTML = "Mute"}
	else{
		console.log("Mute");
		video.muted = true;
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Old School");
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("Original");
	video.className = "orig";
});
