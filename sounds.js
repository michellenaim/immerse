let classes = []

let colors = {
    'rain': [135,206,235],
    'ocean': [100,149,237],
    'thunder': [128,128,128],
    'fire': [255,132,0],
    'lake': [1,180,186],
    'leaf': [1,94,77],
    'river': [135,206,250],
    'bird': [237,197,56],
    'wind': [169,169,169],
    'cat': [218,112,214],
    'night': [153,50,204],
    'car': [255,1,0],
}

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

                // add different background colors
                classes.push(icon.id);

                rgbString = computeAverage(classes);
                document.body.style = rgbString

            } else {
                audio.pause();
                icon.children[0].classList.remove('playing')
                volumeSlider.classList.remove('playing')
                
                let index = classes.indexOf(icon.id);
                classes.splice(index, 1);
                rgbString = computeAverage(classes);
                document.body.style = rgbString
            }
        });

        // SET UP SLIDER
        volumeSlider.addEventListener('input', function(event) {
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
            classes = []
            document.body.style = 'background-color: rgb(204, 219, 234)'
        }
    })

}


// RGB Averages
function computeAverage(classes) {
    if (classes.length === 0 ) {
        return 'background-color: rgb(204, 219, 234)'
    }

    let count = 0;
    let rgb = [0,0,0]

    for (let i = 0; i < classes.length; i++) {
        count += 1
        rgb[0] += colors[classes[i]][0]
        rgb[1] += colors[classes[i]][1]
        rgb[2] += colors[classes[i]][2]
    }

    rgb[0] = rgb[0] / count
    rgb[1] = rgb[1] / count
    rgb[2] = rgb[2] / count

    return `background-color: rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
}


window.addEventListener("load", audioPlayer);




    
