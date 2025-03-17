let legendaLinks = document.querySelectorAll(".js-legendaLink");
let parallaxImage = document.querySelector(".js-parallax")
let active = false;
let scrollers = document.querySelectorAll('.scroller');
let navbarToggler = document.querySelector(".hamburger.navbar-toggler")
let nav = document.querySelector('nav')


/**
 * @description - make the video in the case cards pause and play on mouseover
 */
const cardsWithVideo = document.querySelectorAll('.card-frame video')

const isMobile = () => {
  return window.innerWidth <= 768
}

if (cardsWithVideo.length > 0 && !isMobile()) {
  cardsWithVideo.forEach(video => {
    video.parentElement.parentElement.addEventListener('mouseover', () => {
      video.play();
    })

    video.parentElement.parentElement.addEventListener('mouseout', () => {
      video.pause();
    })
  })
}

/**
 * @description toggler for hamburger menu animation, simple toggle is-active class
 */
function toggleHamburger() {
  if (!navbarToggler.classList.contains('is-active')) {
    document.querySelector('body').style.overflow = 'hidden'
    navbarToggler.classList.add('is-active')
    return
  }
  navbarToggler.classList.remove('is-active')
  document.querySelector('body').style.overflow = 'auto'
}

/**
 * @description Function to detect browser by useragent.
 */
function detectBrowser() {
  let agent = window.navigator.userAgent.toLowerCase()
  switch (true) {
    case agent.indexOf("edge") > -1: return "edge";
    case agent.indexOf("edg/") > -1: return "chromium based edge (dev or canary)";
    case agent.indexOf("opr") > -1 && !!window.opr: return "opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome: return "chrome";
    case agent.indexOf("trident") > -1: return "ie";
    case agent.indexOf("firefox") > -1: return "firefox";
    case agent.indexOf("safari") > -1: return "safari";
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

  // Animation function
  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;

    // Elapsed time
    const time = timestamp - start;

    // Percentage of completion
    let percent = Math.min(time / duration, 1);

    // Ease in-out effect
    percent = percent < 0.5 ? 2 * percent * percent : -1 + (4 - 2 * percent) * percent;

    // Scroll to the specified position
    window.scrollTo(0, startingY + diff * percent);

    // Continue the animation until duration is reached
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
}

/**
 * @param {Event} event mouse click event
 * @param {String} hash location.hash
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

        const stateObj = { title: "bar" };
        history.replaceState(stateObj, "", hash);
      }
    } catch (error) {
      console.error("Error while scrolling to hash:", error);
    }
  }
};


const parallax = () => {
  if (!parallaxImage) return;
  const offsetTop = parallaxImage.offsetTop;
  const calcTop = window.scrollY / 50;
  const prevTop = 33; // Access CSS variable

  // Use requestAnimationFrame for smoother animation
  requestAnimationFrame(() => {
    parallaxImage.style.top = prevTop - calcTop + "%";
  });
}

// Throttle scroll event (basic implementation)
let isThrottled = false;

window.addEventListener('scroll', () => {
  if (!isThrottled) {
    parallax();
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, 100); // Adjust throttle time as needed
  }
});

/**
 * 
 * @param {HTMLElement} element het element waar je de class op wil toggelen
 * @param {string} className classname van de class die je wil toggelen
 */
function removeActive(elements, className) {
  active = false;
  elements.forEach(element => {
    element.classList.remove(className)
  })
}

// gebruik js-legendaLink om een on click event te triggeren
if (legendaLinks) {
  legendaLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}

if (navbarToggler) {
  navbarToggler.addEventListener('click', toggleHamburger)
}

window.addEventListener('DOMContentLoaded', (e) => {
  smoothScroll(e);
})

// verantwoordelijk voor het doorgeven van de active state, en class on mouse-down.
scrollers.forEach(element => {
  element.addEventListener('mousedown', function scrolling() {
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

// scroll body to 0px on click
$('#back-to-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 800);
  return false;
});

//if(!('ontouchstart' in window)) {
//  $('[data-toggle="tooltip"]').tooltip();
//}

document.addEventListener('mouseup', () => { removeActive(scrollers, 'scrolling') })
document.addEventListener('mouseleave', () => { removeActive(scrollers, 'scrolling') })

if (parallaxImage) window.addEventListener('scroll', parallax, { passive: true })

//$('body').scrollspy({offset: 100})

function initializeSwipers() {

  const homeSwiper = new Swiper(".swiper_home_projects", {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: ".swiper_container .swiper-button-next",
      prevEl: ".swiper_container .swiper-button-prev",
    },
    pagination: {
      el: ".swiper_container .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 48,
      },
    },
  });

  const imageSwiper = new Swiper(".swiper_image_gallery", {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".swiper_image_container .swiper-button-next",
      prevEl: ".swiper_image_container .swiper-button-prev",
    },
    pagination: {
      el: ".swiper_image_container .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 48,
      },
    },
  });

  const videoSwiper = new Swiper(".swiper_video_gallery", {
    slidesPerView: 1.2,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper_video_container .swiper-button-next",
      prevEl: ".swiper_video_container .swiper-button-prev",
    },
    pagination: {
      el: ".swiper_video_container .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 48,
      },
    },
  });

}

document.addEventListener('DOMContentLoaded', function () {
  // Cookie consent functionaliteit tijdelijk uitgeschakeld
  // fetch('/testing/ajax_cookie_consent')
  //  .then(response => response.text())
  //  .then(data => {
  //    document.body.insertAdjacentHTML('beforeend', data);
  //  })
  //  .then(() => {
  //    // check if user has given consent and is not a logged in user.
  //    if (!cookieExists('exp_visitor_consents') && !cookieExists('exp_sessionid')) {
  //      initCookeConsent();
  //      $('#cookieModal').modal('show');
  //    }
  //  })
  
  // Initialiseer andere functionaliteit
  initializeSwipers();
});



const cards = document.querySelectorAll('.card');
const frontendPanels = document.querySelectorAll('.frontend-panel');

function cookieExists(cookieName) {
  return document.cookie.split(';').some(cookie => cookie.trim().startsWith(`${cookieName}=`));
}

function createButton(element, options) {
  const { className, textContent, linkUrl, appendToSelector } = options;
  let editButton = document.createElement('a');
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

function addEditButtons(element, appendToSelf = true) {
  let url = window.location.href;

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

function showFrontendPanel(frontendPanel) {
  frontendPanel.classList.toggle('d-none');
  addEditButtons(frontendPanel);
}

// Usage
if (cookieExists('exp_sessionid')) {
  cards.forEach(card => {
    addEditButtons(card, false);
  });

  frontendPanels.forEach(showFrontendPanel);
}

/**
 * @description Function to initialize the cookie consent modal
 * @returns {void}
 */
function initCookeConsent() {
  const cookiePreferencesBtn = document.querySelector(".js-cookie-preferences");
  const cookieSubmitBtn = document.querySelector("#cookie-submit");
  const jsCookiebarForm = document.querySelector(".js-cookiebar-form");
  const preferencesCheckboxes = document.querySelectorAll('.cookiebar-preferences .checkbox__input')
  const consentCheckboxes = document.querySelectorAll('.accept-all .checkbox__input')

  if (!cookiePreferencesBtn || !cookieSubmitBtn || !jsCookiebarForm || !preferencesCheckboxes || !consentCheckboxes) {
    return;
  }
  
  const setCookieCheckboxes = () => {
    let name = event.currentTarget.name
    consentCheckboxes.forEach(checkbox => {
      if (checkbox.name === name) {
        checkbox.checked = !checkbox.checked
      }
    })
  }

  const setCookiePreferences = () => {
    jsCookiebarForm.classList.toggle('active');
    cookieSubmitBtn.value = 'Opslaan'
  }

  preferencesCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('click', setCookieCheckboxes)
  })

  cookiePreferencesBtn.addEventListener("click", setCookiePreferences);
}

const hasSession = document.cookie.includes('exp_sessionid');

// Check if user is logged in and display Vimeo links if so
(() => {
  if (hasSession) {
    document.querySelectorAll('.vimeo-link').forEach(link => {
      link.classList.remove('d-none');
    });
  }
})();


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

    lazyElements.forEach((lazyElement) => {
      lazyObserver.observe(lazyElement);
    });
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    lazyElements.forEach((lazyElement) => {
      lazyElement.src = lazyElement.dataset.src;
      lazyElement.removeAttribute('data-src');
    });
  }
};


document.addEventListener("DOMContentLoaded", () => {
  lazyLoad(0.1);
});