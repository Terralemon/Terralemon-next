const legendaLinks = document.querySelectorAll(".js-legendaLink");
const parallaxImage = document.querySelector(".js-parallax")
const scrollers = document.querySelectorAll('.scroller');
const navbarToggler = document.querySelector(".hamburger.navbar-toggler")
const nav = document.querySelector('nav')

let active = false;

/**
 * @description - make the video in the case cards pause and play on mouseover
 */
const cardsWithVideo = document.querySelectorAll('.card-frame video');

const isMobile = () => window.innerWidth <= 768;

if (cardsWithVideo.length > 0 && !isMobile()) {
  cardsWithVideo.forEach(video => {
    video.parentElement.parentElement.addEventListener('mouseover', () => video.play());
    video.parentElement.parentElement.addEventListener('mouseout', () => video.pause());
  });
}

document.addEventListener("DOMContentLoaded", function() {
  var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(video) {
        if (video.isIntersecting) {
          for (const source in video.target.children) {
            const videoSource = video.target.children[source];
            if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
              videoSource.src = videoSource.dataset.src;
            }
          }
          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach(function(lazyVideo) {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});


/**
 * @description toggler for hamburger menu animation, simple toggle is-active class
 */
function toggleHamburger() {
  const body = document.querySelector('body');
  if (!navbarToggler.classList.contains('is-active')) {
    body.style.overflow = 'hidden';
    navbarToggler.classList.add('is-active');
  } else {
    navbarToggler.classList.remove('is-active');
    body.style.overflow = 'auto';
  }
}

/**
 * @description Function to detect browser by useragent.
 * @returns {string} Browser name
 */
function detectBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  switch (true) {
    case agent.includes("edge"): return "edge";
    case agent.includes("edg/"): return "chromium based edge (dev or canary)";
    case agent.includes("opr") && !!window.opr: return "opera";
    case agent.includes("chrome") && !!window.chrome: return "chrome";
    case agent.includes("trident"): return "ie";
    case agent.includes("firefox"): return "firefox";
    case agent.includes("safari"): return "safari";
    default: return "other";
  }
}

/**
 * Smoothly scroll to the specified y position
 * @param {number} y The vertical position to scroll to
 * @param {number} duration The duration of the scrolling animation in milliseconds
 */
function smoothScrollTo(y, duration) {
  const startingY = window.scrollY || window.pageYOffset;
  const diff = y - startingY;
  let start;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    let percent = Math.min(time / duration, 1);
    percent = percent < 0.5 ? 2 * percent * percent : -1 + (4 - 2 * percent) * percent;
    window.scrollTo(0, startingY + diff * percent);
    if (time < duration) window.requestAnimationFrame(step);
  });
}

/**
 * @param {Event} event mouse click event
 * @description Uses click event to get the #section and scroll to it
 */
const smoothScroll = (event) => {
  event.preventDefault();
  const hash = event.target.hash || window.location.hash;

  if (hash) {
    try {
      const target = document.querySelector(hash);
      if (target) {
        const offset = 126; // Adjust the offset as needed
        const toPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        smoothScrollTo(toPosition, 400);
        history.replaceState({ title: "bar" }, "", hash);
      }
    } catch (error) {
      console.error("Error while scrolling to hash:", error);
    }
  }
};

/**
 * @description Parallax scrolling effect
 */
const parallax = () => {
  if (!parallaxImage) return;
  const calcTop = window.scrollY / 50;
  const prevTop = 33; // Access CSS variable

  requestAnimationFrame(() => {
    parallaxImage.style.top = `${prevTop - calcTop}%`;
  });
}

// Throttle scroll event (basic implementation)
let isThrottled = false;

window.addEventListener('scroll', () => {
  if (!isThrottled) {
    parallax();
    isThrottled = true;
    setTimeout(() => { isThrottled = false; }, 100); // Adjust throttle time as needed
  }
});

/**
 * @param {NodeList} elements Elements to remove class from
 * @param {string} className Class name to remove
 */
function removeActive(elements, className) {
  active = false;
  elements.forEach(element => element.classList.remove(className));
}

// Add event listeners
if (legendaLinks) {
  legendaLinks.forEach(link => link.addEventListener("click", smoothScroll));
}

if (navbarToggler) {
  navbarToggler.addEventListener('click', toggleHamburger);
}

window.addEventListener('DOMContentLoaded', smoothScroll);

scrollers.forEach(element => {
  element.addEventListener('mousedown', () => {
    active = true;
    element.classList.add('scrolling');
  });
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut(300);
  }
});

$('#back-to-top').click(function () {
  $('body,html').animate({ scrollTop: 0 }, 800);
  return false;
});

document.addEventListener('mouseup', () => removeActive(scrollers, 'scrolling'));
document.addEventListener('mouseleave', () => removeActive(scrollers, 'scrolling'));

if (parallaxImage) window.addEventListener('scroll', parallax, { passive: true });

/**
 * @description Initialize Swiper instances
 */
function initializeSwipers() {
  const swiperConfigs = [
    {
      selector: ".swiper_home_projects",
      options: {
        spaceBetween: 24,
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        },
      }
    },
    {
      selector: ".swiper_image_gallery",
      options: {
        spaceBetween: 16,
        breakpoints: {
          992: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        },
      }
    },
    {
      selector: ".swiper_video_gallery",
      options: {
        spaceBetween: 0,
        autoplay: {
          delay: 8000,
          disableOnInteraction: false,
        },
        breakpoints: {
          992: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        },
      }
    }
  ];

  const commonOptions = {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  };

  swiperConfigs.forEach(config => {
    new Swiper(config.selector, { ...commonOptions, ...config.options });
  });
}

document.addEventListener('DOMContentLoaded', initializeSwipers);

const cards = document.querySelectorAll('.card');
const frontendPanels = document.querySelectorAll('.frontend-panel');

/**
 * @description Check if a cookie exists
 * @param {string} cookieName Name of the cookie
 * @returns {boolean} True if cookie exists, false otherwise
 */
function cookieExists(cookieName) {
  return document.cookie.split(';').some(cookie => cookie.trim().startsWith(`${cookieName}=`));
}

/**
 * @description Create a button element
 * @param {HTMLElement} element Element to append the button to
 * @param {Object} options Button options
 * @param {string} options.className Button class name
 * @param {string} options.textContent Button text content
 * @param {string} options.linkUrl Button link URL
 * @param {string} [options.appendToSelector] Selector to append the button to
 */
function createButton(element, { className, textContent, linkUrl, appendToSelector }) {
  const editButton = document.createElement('a');
  editButton.classList.add('btn', `btn-${className}`, 'btn-xs', 'me-2');
  editButton.href = linkUrl;
  editButton.textContent = textContent;
  editButton.target = '_blank';
  if (appendToSelector) {
    element.querySelector(appendToSelector).appendChild(editButton);
  } else {
    element.appendChild(editButton);
  }
}

/**
 * @description Add edit buttons to an element
 * @param {HTMLElement} element Element to add buttons to
 * @param {boolean} [appendToSelf=true] Whether to append buttons to the element itself
 */
function addEditButtons(element, appendToSelf = true) {
  const url = window.location.href;

  if (element.dataset.caseLink && !url.includes('cases')) {
    createButton(element, {
      className: 'primary',
      textContent: 'to case',
      linkUrl: element.dataset.caseLink,
      appendToSelector: appendToSelf ? null : '.card-body'
    });
  }

  if (element.dataset.projectLink && (!url.includes('projects') || new URL(url).pathname.split('/').filter(segment => segment !== '').length < 2)) {
    createButton(element, {
      className: 'warning',
      textContent: 'to project',
      linkUrl: element.dataset.projectLink,
      appendToSelector: appendToSelf ? null : '.card-body'
    });
  }

  if (element.dataset.editLink) {
    createButton(element, {
      className: 'dark',
      textContent: 'edit project',
      linkUrl: element.dataset.editLink
    });
  }
}

/**
 * @description Show frontend panel
 * @param {HTMLElement} frontendPanel Frontend panel element
 */
function showFrontendPanel(frontendPanel) {
  frontendPanel.classList.toggle('d-none');
  addEditButtons(frontendPanel);
}

// Usage
if (cookieExists('exp_sessionid')) {
  cards.forEach(card => addEditButtons(card, false));
  frontendPanels.forEach(showFrontendPanel);
}

/**
 * @description Function to initialize the cookie consent modal
 * @returns {void}
 */
function initCookieConsent() {
  const cookiePreferencesBtn = document.querySelector(".js-cookie-preferences");
  const cookieSubmitBtn = document.querySelector("#cookie-submit");
  const jsCookiebarForm = document.querySelector(".js-cookiebar-form");
  const preferencesCheckboxes = document.querySelectorAll('.cookiebar-preferences .checkbox__input');
  const consentCheckboxes = document.querySelectorAll('.accept-all .checkbox__input');

  if (!cookiePreferencesBtn || !cookieSubmitBtn || !jsCookiebarForm || !preferencesCheckboxes || !consentCheckboxes) {
    return;
  }

  const setCookieCheckboxes = (event) => {
    const name = event.currentTarget.name;
    consentCheckboxes.forEach(checkbox => {
      if (checkbox.name === name) {
        checkbox.checked = !checkbox.checked;
      }
    });
  };

  const setCookiePreferences = () => {
    jsCookiebarForm.classList.toggle('active');
    cookieSubmitBtn.value = 'Opslaan';
  };

  preferencesCheckboxes.forEach(checkbox => checkbox.addEventListener('click', setCookieCheckboxes));
  cookiePreferencesBtn.addEventListener("click", setCookiePreferences);
}

document.addEventListener('DOMContentLoaded', () => {
  // Cookie consent functionaliteit tijdelijk uitgeschakeld
  // fetch('/testing/ajax_cookie_consent')
  //  .then(response => response.text())
  //  .then(data => {
  //    document.body.insertAdjacentHTML('beforeend', data);
  //  })
  
  // Initialiseer andere functionaliteit
});

/**
 * @description Function that removes the d-none class from the vimeo links if the session cookie exists
 * if the session cookie exists that means the user is logged in and the vimeo links should be visible
 * @returns {void}
 */
(() => {
  const hasSession = document.cookie.includes('exp_sessionid');

  if (hasSession) {
    document.querySelectorAll('.vimeo-link').forEach(link => link.classList.remove('d-none'));
  }
})();

// Function to get and decode consent levels from cookies
function getConsentLevels() {
  const cookies = document.cookie.split(';').map(cookie => cookie.trim());
  const consentCookie = cookies.find(cookie => cookie.startsWith('exp_visitor_consents='));

  if (!consentCookie) {
    console.warn('Consent cookie not found');
    return null;
  }

  const consentLevels = consentCookie.split('=')[1];
  const consentLevelsDecoded = decodeURIComponent(consentLevels);

  try {
    const jsonString = consentLevelsDecoded.match(/({.*})/)[1];
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing consent levels:', error);
    return null;
  }
}

const consentLevelsObject = getConsentLevels();
const externalScripts = [
  "https://www.googletagmanager.com/gtag/js?id=UA-6642249-1",
  "/js/ext_ga4.js",
  "/js/ext_matomo.js",
];

function loadScripts() {
  if (
    consentLevelsObject[2].has_granted ||
    consentLevelsObject[3].has_granted
  ) {
    externalScripts.forEach((script) => {
      const scriptElement = document.createElement("script");
      scriptElement.src = script;
      // append the script to the head of the document
      document.head.appendChild(scriptElement);
    }); 
  }
}

document.addEventListener('DOMContentLoaded', loadScripts);

/**
 * @description Lazy load images and iframes
 * @param {number} [threshold=0.1] Intersection observer threshold
 */
const lazyLoad = (threshold = 0.1) => {
  const lazyElements = Array.from(document.querySelectorAll("img[data-src], iframe[data-src]"));

  if ("IntersectionObserver" in window) {
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.src = element.dataset.src;
          element.removeAttribute('data-src');
          lazyObserver.unobserve(element);
        }
      });
    }, { threshold });

    lazyElements.forEach(lazyElement => lazyObserver.observe(lazyElement));
  } else {
    lazyElements.forEach(lazyElement => {
      lazyElement.src = lazyElement.dataset.src;
      lazyElement.removeAttribute('data-src');
    });
  }
};

document.addEventListener("DOMContentLoaded", () => lazyLoad(0.1));

document.addEventListener('DOMContentLoaded', () => {
  let active = false;
  const comparableImages = document.querySelectorAll('.js-image-compare');

  /**
   * @description Update image visibility based on scroller position
   * @param {number} x Scroller position
   * @param {HTMLElement} element Image compare element
   */
  function updateImageVisibility(x, element) {
    const containerWidth = element.querySelector('.js-image-compare-wrapper').offsetWidth;
    const scrollerPosition = Math.max(0, Math.min(x, containerWidth));
    const visiblePercentage = (scrollerPosition / containerWidth) * 100;

    element.querySelector('.after').style.setProperty('clip-path', `polygon(0 0, ${visiblePercentage}% 0, ${visiblePercentage}% 100%, 0 100%)`, 'important');
    element.querySelector('.scroller').style.setProperty('left', `${scrollerPosition}px`, 'important');
  }

  comparableImages.forEach(element => {
    element.addEventListener('mousedown', () => {
      active = true;
      document.body.style.cursor = 'move';
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
    }, { passive: true });

    element.addEventListener('touchend', endScrolling);

    element.addEventListener('touchmove', (event) => {
      if (!active) return;
      const x = event.touches[0].pageX - element.querySelector('.js-image-compare-wrapper').getBoundingClientRect().left;
      updateImageVisibility(x, element);
    }, { passive: true });
  });

  window.addEventListener('load', () => {
    const wrappers = document.querySelectorAll('.js-image-compare .js-image-compare-wrapper');
    wrappers.forEach(wrapper => {
      const wrapperWidth = wrapper.offsetWidth / 2;
      updateImageVisibility(wrapperWidth, wrapper.closest('.js-image-compare'));
    });
  });
});
