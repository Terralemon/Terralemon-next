const cardsWithVideo  = document.querySelectorAll('.card-frame video')

const isMobile = () => {
  return window.innerWidth <= 768
}

if (cardsWithVideo.length > 0 && !isMobile()) {
  cardsWithVideo.forEach(video =>  {
    video.parentElement.parentElement.addEventListener('mouseover', () => {
      video.play();
    })

    video.parentElement.parentElement.addEventListener('mouseout', () => {
      video.pause();
    })
  })
}
