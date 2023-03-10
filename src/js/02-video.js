import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function(currentTime) {
       localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime)); 
});

const time = localStorage.getItem('videoplayer-current-time');
//console.log(time);
const playStopTime = JSON.parse(time);
//console.log(playStopTime);

player.setCurrentTime(playStopTime.seconds||0).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
