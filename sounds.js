let audio, playbtn, volumeslider

function initAudioPlayer(){
	// audio = new Audio();
	// audio.src = "sounds/birds.mp3";
	// audio.loop = true;

    // sounds = 

    // playbtn = document.getElementsByClassName("play");
	// volumeslider = document.getElementsByClassName("volume_bar");

	// function playPause(){
	// 	if(audio.paused){
	// 	    audio.play();
	//     } else {
	// 	    audio.pause();
	//     }
	// }
	// function setvolume(){
	//     audio.volume = volumeslider.value / 100;
    // }
    icons = document.getElementsByClassName("icon");
    for (let i = 0; i < icons.length; i++){
        icon = icons[i]
        let audio = icon.nextElementSibling;
        let volumeSlider = audio.nextElementSibling;

        icon.addEventListener("click", function(event) {
            if (audio.paused) {
                audio.loop = true;
                volumeSlider.value = 0.2 
                audio.volume = volumeSlider.value
                audio.play();

            } else {
                audio.pause();
            }
        });

        // grab volume slider from icon, sibling
        volumeSlider.addEventListener('input', function(event) {
            // console.log(event.currentTarget)
            console.log(event.currentTarget.value)
            audio.volume = event.currentTarget.value
        });
    }
}

window.addEventListener("load", initAudioPlayer);

// <a onclick="myAudioFunction('a');">
//         <img src="icons/bird.png">
//     </a>
//     <a onclick="myAudioFunction('b');">
//         <img src="icons/cat.png">
//     </a>
//     <script>
//         var aAudio = new Audio('/sounds/birds.mp3');
//         var bAudio = new Audio('/sounds/cat_purring.mp3');
//         function myAudioFunction(letter) {
//             if (letter == 'a') {
//                 aAudio.play();
//             } else if (letter == 'b') {
//                 bAudio.play();
//             }
//         }
//     </script>