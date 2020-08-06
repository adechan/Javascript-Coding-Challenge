const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; // We add 90 because we changed it so we move Top-Bottom by adding 90 degrees
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform =  `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform =  `rotate(${hourDegrees}deg)`;

    if (secondsDegrees === 90) 
        secondHand.style.transition = 'all 0s';
    else 
        secondHand.style.transition = 'all 0.05s';

    if (minsDegrees === 90) 
        minsHand.style.transition = 'all 0s';    
    else 
        minsHand.style.transition = 'all 0.1s';

    console.log("it is " + hour + " and " + mins + " and " + seconds);
}

// 1000 miliseconds = 1 second
setInterval(setDate, 1000);


