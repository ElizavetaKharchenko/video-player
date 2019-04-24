import "@babel/polyfill";

export default () => {

  const video = document.getElementById('mainVideo');
  const playPause = document.getElementById('playPause');
  const dynamic = document.getElementById('dynamic');
  const overlayPlayBtn = document.getElementById('overlay-btn-play');
  const overlayReloadBtn = document.getElementById('overlay-btn-reload');
  const progressBar = document.querySelector('.progress-bar');
  const progressElem = document.querySelector('.progress');

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
    overlayReloadBtn.style.visibility = 'hidden';
    video.load();
    video.play();
  })

  dynamic.addEventListener('click', () => {
    video.muted = !video.muted;
    dynamic.classList.contains('fa-volume-off') ? dynamic.classList.replace('fa-volume-off', 'fa-volume-up') :
      dynamic.classList.replace('fa-volume-up', 'fa-volume-off');
  });
  
  video.addEventListener('timeupdate', () => {
    let progress = Math.floor(video.currentTime) / Math.floor(video.duration);
    progressBar.style.width = `${Math.floor(progress * progressElem.offsetWidth)}px`;
  }, false);
  

};
