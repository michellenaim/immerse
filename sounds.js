// PLAY PAUSE SOUNDS LINKED TO IMG & SLIDER

function initAudioPlayer(){
    icons = document.getElementsByClassName("icon");
    for (let i = 0; i < icons.length; i++){
        let icon = icons[i];
        let audio = icon.nextElementSibling;
        let volumeSlider = audio.nextElementSibling;
        
        // Play/pause audio on click
        icon.addEventListener("click", function(event) {
            if (audio.paused) {
                audio.loop = true;
                volumeSlider.value = 0.1
                audio.volume = volumeSlider.value
                audio.play();
                icon.children[0].classList.add('playing')
                volumeSlider.classList.add('playing')
            } else {
                audio.pause();
                icon.children[0].classList.remove('playing')
                volumeSlider.classList.remove('playing')            }
        });

        // Set up slider
        volumeSlider.addEventListener('input', function(event) {
            console.log(event.currentTarget.value)
            audio.volume = event.currentTarget.value
        });
    }
}

window.addEventListener("load", initAudioPlayer);

// BACKGROUND CHANGES

icons = document.getElementsByClassName("icon");

for (let i = 0; i < icons.length; i++){
    let icon = icons[i];
    let audio = icon.nextElementSibling;
    let volumeSlider = audio.nextElementSibling;

    rainId = document.getElementById('rain');
    carId = document.getElementById('car');

    icon.addEventListener("click", function(event) {
        if (icon === carId){
            document.body.classList.add("blue")
        }
    })
}

// MUTE BUTTON

// var playing_sounds = [];
// function muteDocument() {
// 	if (!is_muted) {
// 		playing_sounds.length=0;
// 		is_muted = true;
// 		document.querySelector('.unmuted').style.display="none";
// 		document.querySelector('.muted').style.display="inline";
// 		var all_audio = document.querySelectorAll('audio');
// 		for (var i = 0; i < all_audio.length; i++) {
// 			if(!all_audio[i].paused){
// 				playing_sounds.push([all_audio[i],all_audio[i].volume]);
// 			}	
// 		}
// 		playing_sounds.forEach(function (sound) {
// 			sound[0].volume=0;
// 		});
// 	}
// 	else{
// 		is_muted = false;
// 		document.querySelector('.unmuted').style.display="inline";
// 		document.querySelector('.muted').style.display="none";
// 		playing_sounds.forEach(function (sound) {
// 			sound[0].volume=sound[1];
// 		});
// 	}
// }