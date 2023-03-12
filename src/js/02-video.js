import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time'))) 
const saveCurrentTime = event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}
player.on('timeupdate', throttle(saveCurrentTime, 1000));

