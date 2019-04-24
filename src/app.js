// import WatchJS from 'melanke-watchjs';
import "@babel/polyfill";
import formattedTime from './utils';

export default () => {

  const video = document.getElementById('mainVideo');
  const playPause = document.getElementById('playPause');
  const dynamic = document.getElementById('dynamic');
  const overlayPlayBtn = document.getElementById('overlay-btn-play');
  const overlayReloadBtn = document.getElementById('overlay-btn-reload');

  const togglePlayPause = () => video.paused ? video.play() : video.pause();

  video.onplay = () => {
    playPause.classList.replace('fa-play-circle', 'fa-stop')
    overlayPlayBtn.style.visibility = 'hidden';
  };
  video.onpause = () => {
    playPause.classList.replace('fa-stop', 'fa-play-circle');
    overlayPlayBtn.style.visibility = 'visible';
  };
  video.onclick = () => togglePlayPause();
  video.onended = () => {
    overlayReloadBtn.style.visibility = 'visible';
    overlayPlayBtn.style.visibility = 'hidden';
  }

  overlayReloadBtn.style.visibility = 'hidden';

  
  playPause.addEventListener('click', () => {
    togglePlayPause();
  });

  overlayPlayBtn.addEventListener('click', () => {
    video.play();
  });

  overlayReloadBtn.addEventListener('click', () => {
    video.load();
    video.play();
    overlayReloadBtn.style.visibility = 'hidden';
  })

  dynamic.addEventListener('click', () => {
    video.muted = !video.muted;
    dynamic.classList.contains('fa-volume-off') ? dynamic.classList.replace('fa-volume-off', 'fa-volume-up') :
      dynamic.classList.replace('fa-volume-up', 'fa-volume-off');
  });
  
  

};
