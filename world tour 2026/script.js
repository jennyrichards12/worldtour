const video = document.getElementById("bgVideo");
const btn = document.querySelector(".mute-btn");

// Mute toggle
function toggleSound(){
if(video.muted){
video.muted = false;
btn.innerText = "Mute";
}else{
video.muted = true;
btn.innerText = "Unmute";
}
}

// TELEGRAM LINK
function goTelegram(){
window.location.href = "https://t.me/perflactor";
}

