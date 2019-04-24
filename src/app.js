// import WatchJS from 'melanke-watchjs';
import "@babel/polyfill";
import formattedTime from './utils';

export default () => {

  const video = document.getElementById('mainVideo');
  const playPause = document.getElementById('playPause');
  const dynamic = document.getElementById('dynamic');
  const overlayBtn = document.getElementById('overlay-btn-play');

  const togglePlayPause = () => video.paused ? video.play() : video.pause();

  video.onplay = () => {
    playPause.classList.replace('fa-play-circle', 'fa-stop')
    overlayBtn.style.visibility = 'hidden';
  };
  video.onpause = () => {
    playPause.classList.replace('fa-stop', 'fa-play-circle');
    overlayBtn.style.visibility = 'visible';
  };
  video.onclick = () => togglePlayPause();
  
  playPause.addEventListener('click', () => {
    togglePlayPause();
  });

  overlayBtn.addEventListener('click', () => {
    video.play();
  });

  dynamic.addEventListener('click', () => {
    video.muted = !video.muted;
    dynamic.classList.contains('fa-volume-off') ? dynamic.classList.replace('fa-volume-off', 'fa-volume-up') :
      dynamic.classList.replace('fa-volume-up', 'fa-volume-off');
  });
  
  

};
