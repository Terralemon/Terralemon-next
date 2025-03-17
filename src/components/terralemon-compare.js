document.addEventListener('DOMContentLoaded', () => {
  let active = false;
  const comparableImages = document.querySelectorAll('.js-image-compare');

  function updateImageVisibility(x, element) {
    const containerWidth = element.querySelector('.js-image-compare-wrapper').offsetWidth;
    const scrollerPosition = Math.max(0, Math.min(x, containerWidth));
    const visiblePercentage = (scrollerPosition / containerWidth) * 100;

    element.querySelector('.after').style.setProperty('clip-path', `polygon(0 0, ${visiblePercentage}% 0, ${visiblePercentage}% 100%, 0 100%)`, 'important');
    element.querySelector('.scroller').style.setProperty('left', `${scrollerPosition}px`, 'important');
  }

  comparableImages.forEach(element => {
    element.addEventListener('mousedown', (event) => {
      active = true;
      document.body.style.cursor = 'move'; // No !important needed for cursor changes
      element.style.cursor = 'move';
    });

    element.addEventListener('mousemove', (event) => {
      if (!active) return;
      const x = event.pageX - element.querySelector('.js-image-compare-wrapper').getBoundingClientRect().left;
      updateImageVisibility(x, element);
    });

    const endScrolling = () => {
      if (active) {
        active = false;
        document.body.style.cursor = '';
        element.style.cursor = '';
      }
    };

    element.addEventListener('mouseup', endScrolling);
    element.addEventListener('mouseleave', endScrolling);

    element.addEventListener('touchstart', () => {
      active = true;
      document.body.style.cursor = 'move';
      element.style.cursor = 'move';
    }, {passive: true});

    element.addEventListener('touchend', endScrolling);
    
    element.addEventListener('touchmove', (event) => {
      if (!active) return;
      const x = event.touches[0].pageX - element.querySelector('.js-image-compare-wrapper').getBoundingClientRect().left;
      updateImageVisibility(x, element);
    }, {passive: true});
  });

  window.addEventListener('load', () => {
    const wrappers = document.querySelectorAll('.js-image-compare .js-image-compare-wrapper');
    wrappers.forEach(wrapper => {
      const wrapperWidth = wrapper.offsetWidth / 2;
      updateImageVisibility(wrapperWidth, wrapper.closest('.js-image-compare'));
    });
  });
});
