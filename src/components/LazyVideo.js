import { useEffect } from 'react';

export default function useLazyVideo() {
  useEffect(() => {
    const lazyVideos = document.querySelectorAll('video.lazy');
    
    if ('IntersectionObserver' in window) {
      const lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (let source in video.target.children) {
              const videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
            
            video.target.load();
            video.target.play();
            video.target.classList.remove('lazy');
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
      
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }, []);
} 