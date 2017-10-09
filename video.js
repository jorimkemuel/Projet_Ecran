

function getId(monId) { 
var myVideo = document.getElementsByClassName("premVideo")[0]; 
id = monId.id;
myVideo.id = document.getElementById(id).src;
myVideo.src = id; 
} 

function getTitle(videoId,number) {
var ytApiKey = "AIzaSyBPWD_e5dWJvXKOknGuPkDY9Hbdkyur5GA";
jQuery.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + ytApiKey, function(data) {
document.getElementsByClassName("videoTitle")[number].innerHTML = data.items[0].snippet.title;
 });   
}