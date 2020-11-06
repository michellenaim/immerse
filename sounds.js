function audioPlayer(){
    
    let icons = document.getElementsByClassName("icon");

    for (let i = 0; i < icons.length; i++){
        let icon = icons[i];
        let audio = icon.nextElementSibling;
        let volumeSlider = audio.nextElementSibling;
        
        // PLAY/PAUSE SOUND

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

        // SET UP SLIDER
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

    // RESET SOUNDS

    let reset = document.querySelector('.reset');

    reset.addEventListener('click', function(){
        for (let i = 0; i < icons.length; i++) {
            let icon = icons[i];
            let audio = icon.nextElementSibling;
            let volumeSlider = audio.nextElementSibling;
            audio.pause();	
            icon.children[0].classList.remove('playing')
            volumeSlider.classList.remove('playing')
            document.body.classList.remove(icon.id)
        }
    })

}


window.addEventListener("load", audioPlayer);




    
