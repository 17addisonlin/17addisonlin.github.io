document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  /* ==========================
  // Menu
  ========================== */

  // Menu Dragscroll
  !function(e,n){"function"==typeof define&&define.amd?define(["exports"],n):"undefined"!=typeof exports?n(exports):n(e.dragscroll={})}(this,(function(e){var n,t,o=window,l=document,c="mousemove",r="mouseup",i="mousedown",m="EventListener",d="add"+m,s="remove"+m,f=[],u=function(e,m){for(e=0;e<f.length;)(m=(m=f[e++]).container||m)[s](i,m.md,0),o[s](r,m.mu,0),o[s](c,m.mm,0);for(f=[].slice.call(l.getElementsByClassName("dragscroll")),e=0;e<f.length;)!function(e,m,s,f,u,a){(a=e.container||e)[d](i,a.md=function(n){e.hasAttribute("nochilddrag")&&l.elementFromPoint(n.pageX,n.pageY)!=a||(f=1,m=n.clientX,s=n.clientY,n.preventDefault())},0),o[d](r,a.mu=function(){f=0},0),o[d](c,a.mm=function(o){f&&((u=e.scroller||e).scrollLeft-=n=-m+(m=o.clientX),u.scrollTop-=t=-s+(s=o.clientY),e==l.body&&((u=l.documentElement).scrollLeft-=n,u.scrollTop-=t))},0)}(f[e++])};"complete"==l.readyState?u():o[d]("load",u,0),e.reset=u}));


  /* ==========================
  // Global Image Parallax
  ========================== */
  window.addEventListener('scroll', function() {
    var scroll = window.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;
    var image = document.querySelector('.global-cover img');
    if (image) {
      image.style.transform = 'translate3d(0, ' + scroll / 3 + 'px, 0)';
    }
  });


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  })


  /* =======================
  // Zoom Image
  ======================= */
  const lightense = document.querySelector(".page__content img, .post__content img"),
  imageLink = document.querySelectorAll(".page__content a img, .post__content a img");

  if (imageLink) {
    for (var i = 0; i < imageLink.length; i++) imageLink[i].parentNode.classList.add("image-link");
    for (var i = 0; i < imageLink.length; i++) imageLink[i].classList.add("no-lightense");
  }

  if (lightense) {
    Lightense(".page__content img:not(.no-lightense), .post__content img:not(.no-lightense)", {
    padding: 60,
    offset: 30
    });
  }


  // =====================
  // Load More Posts
  // =====================
  var load_posts_button = document.querySelector('.load-more-posts');

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(".pagination"),e=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(e).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.querySelector(".grid"),a=n.querySelectorAll(".grid__post"),i=0;i<a.length;i++)t.appendChild(a.item(i));new LazyLoad({elements_selector:".lazy"});pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")})});


  /* ============================
  // Testimonials Slider
  ============================ */
  const testimonialsSlider = document.querySelector(".testimonials__slider");

  if (testimonialsSlider) {
    new Splide(testimonialsSlider, {
      perPage: 2,
      perMove: 1,
      gap: 32,
      arrows: false,
      drag: false,
      pagination: false,
      type: 'loop',
      autoScroll: {
        autoStart: false,
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false
      },
      intersection: {
        inView: {
          autoScroll: true,
        },
        outView: {
          autoScroll: false,
        },
      },
      breakpoints: {
        768: {
          perPage: 1
        },
        576: {
          drag: true,
        }
      }
    }).mount(window.splide.Extensions);
  }

  /* ==========================
  // Theme Toggle
  ========================== */

  var themeToggle = document.querySelector(".theme-toggle");
  var themeStorageKey = "priam-color-scheme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch (e) {
      return;
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function getCurrentTheme() {
    if (document.body.classList.contains("scheme--dark")) {
      return "dark";
    }
    if (document.body.classList.contains("scheme--light")) {
      return "light";
    }
    if (document.body.classList.contains("scheme--toggle")) {
      return getSystemTheme();
    }
    return getSystemTheme();
  }

  function updateThemeToggle(theme) {
    if (!themeToggle) {
      return;
    }
    themeToggle.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    themeToggle.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  function applyTheme(theme) {
    document.body.classList.remove("scheme--light", "scheme--dark", "scheme--toggle");
    document.body.classList.add("scheme--" + theme);
    updateThemeToggle(theme);
  }

  if (themeToggle) {
    var savedTheme = getStoredTheme();
    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    } else {
      updateThemeToggle(getCurrentTheme());
    }

    themeToggle.addEventListener("click", function() {
      var nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      setStoredTheme(nextTheme);
    });

    var prefersDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

    if (prefersDark) {
      if (typeof prefersDark.addEventListener === "function") {
        prefersDark.addEventListener("change", function() {
          if (!getStoredTheme() && document.body.classList.contains("scheme--toggle")) {
            updateThemeToggle(getCurrentTheme());
          }
        });
      } else if (typeof prefersDark.addListener === "function") {
        prefersDark.addListener(function() {
          if (!getStoredTheme() && document.body.classList.contains("scheme--toggle")) {
            updateThemeToggle(getCurrentTheme());
          }
        });
      }
    }
  }


  /* ==========================
  // Translate Toggle
  ========================== */

  var translateButtons = document.querySelectorAll('.translate__btn');

  function setTranslateLanguage(lang) {
    var combo = document.querySelector('select.goog-te-combo');
    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
      return;
    }
    document.cookie = "googtrans=/en/" + lang + ";path=/";
    window.location.reload();
  }

  if (translateButtons.length) {
    for (var i = 0; i < translateButtons.length; i++) {
      translateButtons[i].addEventListener('click', function() {
        setTranslateLanguage(this.getAttribute('data-lang'));
      });
    }
  }

});
