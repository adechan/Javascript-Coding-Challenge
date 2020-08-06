## Drum Kit
![drums](https://user-images.githubusercontent.com/29714385/89533438-1b6bc700-d7fc-11ea-92b3-84c267d5cf7e.PNG)

Things that I have learned doing this challenge:

### data-attributes
``` <div data-key="65" class="key">```
<br>
*data-key* is a custom data-attribute to store custom data for mapping buttons and audios to get the `keyCode`s via *keydown* or *click* events

### bind an event to our keys when they are pressed
``` window.addEventListener('keydown', playSound) ```
<br> 
`playSound()` is a listener for `keydown` events registered using `window.addEventListener`

### checking if the event is *click* or *keydown*
using *event.type*
- `event.currentTarget.dataset.key` (for *click* events): dataset reads the data-xx attribute in a give DOM element
- `event.keyCode` (for *keydown* events)
