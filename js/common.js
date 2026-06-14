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
  // PIN Lock (soft front-end gate)
  ========================== */

  var pinLockedMain = document.querySelector('[data-pin-locked]');

  if (pinLockedMain) {
    var pinOverlay = pinLockedMain.querySelector('[data-pin-lock]');
    var pinForm = pinLockedMain.querySelector('[data-pin-form]');
    var pinDigits = pinLockedMain.querySelectorAll('.pin-lock__digit');
    var pinError = pinLockedMain.querySelector('[data-pin-error]');
    var pinHash = (pinLockedMain.getAttribute('data-pin-hash') || '').toLowerCase();
    // Session key is scoped to the hash, so changing the PIN invalidates old unlocks.
    var pinSessionKey = 'priam-pin-unlocked-' + pinHash;

    var unlockPage = function() {
      pinLockedMain.removeAttribute('data-pin-locked');
      if (pinOverlay && pinOverlay.parentNode) {
        pinOverlay.parentNode.removeChild(pinOverlay);
      }
    };

    var readPin = function() {
      var value = '';
      for (var i = 0; i < pinDigits.length; i++) {
        value += pinDigits[i].value;
      }
      return value;
    };

    var sha256Hex = function(message) {
      var data = new TextEncoder().encode(message);
      return crypto.subtle.digest('SHA-256', data).then(function(buffer) {
        var bytes = Array.prototype.slice.call(new Uint8Array(buffer));
        return bytes.map(function(b) {
          return ('0' + b.toString(16)).slice(-2);
        }).join('');
      });
    };

    var showPinError = function(message) {
      if (pinError) {
        pinError.textContent = message;
      }
      pinForm.classList.remove('pin-lock__form--shake');
      // Force reflow so the animation can restart.
      void pinForm.offsetWidth;
      pinForm.classList.add('pin-lock__form--shake');
    };

    var clearPin = function() {
      for (var i = 0; i < pinDigits.length; i++) {
        pinDigits[i].value = '';
      }
      if (pinDigits[0]) {
        pinDigits[0].focus();
      }
    };

    // Already unlocked this session?
    var alreadyUnlocked = false;
    try {
      alreadyUnlocked = sessionStorage.getItem(pinSessionKey) === '1';
    } catch (e) {}

    if (alreadyUnlocked) {
      unlockPage();
    } else if (pinOverlay) {
      // Auto-advance + backspace navigation between digit boxes.
      for (var d = 0; d < pinDigits.length; d++) {
        (function(index) {
          var input = pinDigits[index];
          input.addEventListener('input', function() {
            this.value = this.value.replace(/[^0-9]/g, '');
            if (this.value && index < pinDigits.length - 1) {
              pinDigits[index + 1].focus();
            }
          });
          input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && !this.value && index > 0) {
              pinDigits[index - 1].focus();
            }
          });
        })(d);
      }

      if (pinDigits[0]) {
        pinDigits[0].focus();
      }

      pinForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var entered = readPin();

        if (entered.length !== pinDigits.length) {
          showPinError('Please enter all 4 digits.');
          return;
        }

        if (!window.crypto || !crypto.subtle) {
          showPinError('This browser cannot verify the PIN.');
          return;
        }

        sha256Hex(entered).then(function(enteredHash) {
          if (enteredHash.toLowerCase() === pinHash) {
            try {
              sessionStorage.setItem(pinSessionKey, '1');
            } catch (e) {}
            unlockPage();
          } else {
            showPinError('Incorrect PIN. Try again.');
            clearPin();
          }
        });
      });
    }
  }


  /* ==========================
  // Zhihu Hot — localize "Updated" timestamp
  ========================== */

  var zhihuUpdated = document.querySelectorAll('[data-zhihu-updated]');
  for (var z = 0; z < zhihuUpdated.length; z++) {
    var iso = zhihuUpdated[z].getAttribute('data-zhihu-updated');
    var parsed = iso ? new Date(iso) : null;
    if (parsed && !isNaN(parsed.getTime())) {
      zhihuUpdated[z].textContent = parsed.toLocaleString();
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


  /* ==========================
  // Blog Composer Login (soft gate) + post exporter
  ========================== */

  var blogLogin = document.querySelector('[data-blog-login]');

  if (blogLogin) {
    var loginView = blogLogin.querySelector('[data-login-view]');
    var composerView = blogLogin.querySelector('[data-composer-view]');
    var loginForm = blogLogin.querySelector('[data-login-form]');
    var usernameInput = blogLogin.querySelector('[data-login-username]');
    var passwordInput = blogLogin.querySelector('[data-login-password]');
    var loginError = blogLogin.querySelector('[data-login-error]');
    var usernameHash = (blogLogin.getAttribute('data-username-hash') || '').toLowerCase();
    var passwordHash = (blogLogin.getAttribute('data-password-hash') || '').toLowerCase();
    var loginSessionKey = 'priam-blog-login-' + usernameHash;

    var sha256 = function(message) {
      var data = new TextEncoder().encode(message);
      return crypto.subtle.digest('SHA-256', data).then(function(buffer) {
        var bytes = Array.prototype.slice.call(new Uint8Array(buffer));
        return bytes.map(function(b) {
          return ('0' + b.toString(16)).slice(-2);
        }).join('').toLowerCase();
      });
    };

    var showComposer = function() {
      if (loginView) { loginView.setAttribute('hidden', ''); }
      if (composerView) { composerView.removeAttribute('hidden'); }
      var titleField = blogLogin.querySelector('[data-field-title]');
      if (titleField) { titleField.focus(); }
    };

    var showLogin = function() {
      if (composerView) { composerView.setAttribute('hidden', ''); }
      if (loginView) { loginView.removeAttribute('hidden'); }
    };

    // Restore session
    var loggedIn = false;
    try {
      loggedIn = sessionStorage.getItem(loginSessionKey) === '1';
    } catch (e) {}

    // Default a sensible date if the field is empty.
    var dateField = blogLogin.querySelector('[data-field-date]');
    if (dateField && !dateField.value) {
      var now = new Date();
      var iso = now.getFullYear() + '-' +
        ('0' + (now.getMonth() + 1)).slice(-2) + '-' +
        ('0' + now.getDate()).slice(-2);
      dateField.value = iso;
    }

    if (loggedIn) {
      showComposer();
    }

    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!window.crypto || !crypto.subtle) {
          loginError.textContent = 'This browser cannot verify the login.';
          return;
        }
        var user = (usernameInput.value || '').trim();
        var pass = passwordInput.value || '';

        Promise.all([sha256(user), sha256(pass)]).then(function(hashes) {
          if (hashes[0] === usernameHash && hashes[1] === passwordHash) {
            try { sessionStorage.setItem(loginSessionKey, '1'); } catch (e) {}
            loginError.textContent = '';
            showComposer();
          } else {
            loginError.textContent = 'Incorrect username or password.';
            passwordInput.value = '';
            passwordInput.focus();
          }
        });
      });
    }

    var logoutBtn = blogLogin.querySelector('[data-logout]');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function() {
        try { sessionStorage.removeItem(loginSessionKey); } catch (e) {}
        if (passwordInput) { passwordInput.value = ''; }
        showLogin();
      });
    }

    /* ---- Composer: build the post markdown ---- */

    var composerForm = blogLogin.querySelector('[data-composer-form]');

    var getVal = function(selector) {
      var el = blogLogin.querySelector(selector);
      return el ? el.value : '';
    };

    var slugify = function(text) {
      return text.toString().toLowerCase().trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    };

    var buildPost = function() {
      var title = getVal('[data-field-title]').trim();
      var description = getVal('[data-field-description]').trim();
      var date = getVal('[data-field-date]').trim();
      var tagsRaw = getVal('[data-field-tags]').trim();
      var image = getVal('[data-field-image]').trim();
      var body = getVal('[data-field-body]');

      if (!date) {
        var n = new Date();
        date = n.getFullYear() + '-' + ('0' + (n.getMonth() + 1)).slice(-2) + '-' + ('0' + n.getDate()).slice(-2);
      }
      var timePart = '00:00:00 +0000';

      var tags = tagsRaw
        ? tagsRaw.split(',').map(function(t) { return t.trim(); }).filter(Boolean)
        : [];

      // YAML-escape double quotes in single-line string values.
      var esc = function(s) { return s.replace(/"/g, '\\"'); };

      var fm = '---\n';
      fm += 'layout: post\n';
      fm += 'title: "' + esc(title) + '"\n';
      if (description) { fm += 'description: "' + esc(description) + '"\n'; }
      fm += 'date: ' + date + ' ' + timePart + '\n';
      if (image) { fm += "image: '" + image + "'\n"; }
      if (tags.length) { fm += 'tags: [' + tags.join(', ') + ']\n'; }
      fm += '---\n\n';

      return fm + body + '\n';
    };

    var buildFilename = function() {
      var title = getVal('[data-field-title]').trim();
      var date = getVal('[data-field-date]').trim();
      if (!date) {
        var n = new Date();
        date = n.getFullYear() + '-' + ('0' + (n.getMonth() + 1)).slice(-2) + '-' + ('0' + n.getDate()).slice(-2);
      }
      var slug = slugify(title) || 'untitled';
      return date + '-' + slug + '.md';
    };

    var composerError = blogLogin.querySelector('[data-composer-error]');
    var previewBox = blogLogin.querySelector('[data-preview]');
    var filenameBox = blogLogin.querySelector('[data-filename]');

    var validate = function() {
      var title = getVal('[data-field-title]').trim();
      var body = getVal('[data-field-body]').trim();
      if (!title) { return 'Please enter a title.'; }
      if (!body) { return 'Please write some body content.'; }
      return '';
    };

    var showFilename = function() {
      if (filenameBox) {
        filenameBox.textContent = 'File: _posts/' + buildFilename();
        filenameBox.removeAttribute('hidden');
      }
    };

    if (composerForm) {
      // Download .md
      composerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var err = validate();
        if (err) { composerError.textContent = err; return; }
        composerError.textContent = '';

        var content = buildPost();
        var filename = buildFilename();
        var blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showFilename();
      });

      composerForm.addEventListener('click', function(e) {
        var btn = e.target.closest('[data-action]');
        if (!btn) { return; }
        var action = btn.getAttribute('data-action');

        if (action === 'preview') {
          if (previewBox) {
            previewBox.textContent = buildPost();
            previewBox.removeAttribute('hidden');
          }
          showFilename();
        }

        if (action === 'copy') {
          var err = validate();
          if (err) { composerError.textContent = err; return; }
          composerError.textContent = '';
          var text = buildPost();
          var done = function() {
            btn.textContent = 'Copied!';
            setTimeout(function() { btn.textContent = 'Copy Markdown'; }, 1500);
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done, function() {
              composerError.textContent = 'Copy failed — use Download instead.';
            });
          } else {
            composerError.textContent = 'Clipboard not available — use Download instead.';
          }
          showFilename();
        }
      });
    }
  }

});
