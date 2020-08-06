function playSound (e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) 
        return;

    // sets the current position of the audio playback (to the start)
    audio.currentTime = 0; // rewind to the start
    audio.play();

    // Add "playing" class to the current key div, so we can add special CSS to the key
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;

    console.log(e);
    // Remove the class "playing" after 0.07s
    e.target.classList.remove('playing');
}


const keys = Array.from(document.querySelectorAll(`.key`));

// Each key gets an event listener added to it (transitionend). When the transition is ended we will remove it
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Listen for the keydown event, and when that happens we will run the function, which will give us the event 
window.addEventListener('keydown', playSound);
