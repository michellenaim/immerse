// PLAY PAUSE SOUNDS LINKED TO IMG & SLIDER
function initAudioPlayer(){
    
    let icons = document.getElementsByClassName("icon");

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

                // add background for 3s
                document.body.classList.add(icon.id)
                setTimeout(function(){ document.body.classList.remove(icon.id)}, 3000)
            } else {
                audio.pause();
                icon.children[0].classList.remove('playing')
                volumeSlider.classList.remove('playing')
            }
        });

        // Set up slider
        volumeSlider.addEventListener('input', function(event) {
            console.log(event.currentTarget.value)
            audio.volume = event.currentTarget.value
        });

        
    }

    // MUTE BUTTON

    let mute = document.querySelector(".mute")
    let unmute = document.querySelector(".unmute")

    mute.addEventListener('click', function(){
        for(let i = 0; i < icons.length; i++){
            let icon = icons[i];
            let audio = icon.nextElementSibling;

            audio.muted = true
        }

        mute.style.display="none";
        unmute.style.display="inline";
    });

    unmute.addEventListener('click', function(){
        for(let i = 0; i < icons.length; i++){
            let icon = icons[i];
            let audio = icon.nextElementSibling;

            audio.muted = false
        }
        mute.style.display="inline";
        unmute.style.display="none";
    });

}

window.addEventListener("load", initAudioPlayer);




    
