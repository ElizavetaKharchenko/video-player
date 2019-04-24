// import WatchJS from 'melanke-watchjs';
import "@babel/polyfill";
import formattedTime from './utils';

export default () => {
  
  const video = document.getElementById('mainVideo');
  const playPause = document.getElementById('playPause');
  const dynamic = document.getElementById('dynamic');

  const togglePlayPause = () => video.paused ? video.play() : video.pause();

  video.onplay = () => playPause.classList.replace('fa-play-circle', 'fa-stop');
  video.onpause = () => playPause.classList.replace('fa-stop', 'fa-play-circle');
  video.onclick = () => togglePlayPause();
  
  playPause.addEventListener('click', () => {
    togglePlayPause();
  });

  dynamic.addEventListener('click', () => {
    video.muted = !video.muted;
    dynamic.classList.contains('fa-volume-off') ? dynamic.classList.replace('fa-volume-off', 'fa-volume-up') :
      dynamic.classList.replace('fa-volume-up', 'fa-volume-off');
  });
  
  

};
