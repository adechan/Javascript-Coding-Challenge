function playSound (e) {
    var keyCode;

    // determine if the event is Click or Keydown
    if (e.type == "click")  
        keyCode = e.currentTarget.dataset.key; // dataset reads the data-xx attribute in a give DOM element
    else 
        keyCode = e.keyCode; // from the keyboard

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) 
        return;

    // sets the current position of the audio playback (to the start)
    audio.currentTime = 0; // rewind to the start
    audio.play();

    // add "playing" class to the current key div, so we can add special CSS to the key
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;

    // remove the class "playing" after 0.07s
    e.target.classList.remove('playing');
}


const keys = Array.from(document.querySelectorAll(`.key`));

// each key gets an event listener added to it (transitionend). When the transition is ended we will remove it
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// listen for the keydown event, and when that happens we will run the function, which will give us the event 
window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('click', playSound));  // for clicks
