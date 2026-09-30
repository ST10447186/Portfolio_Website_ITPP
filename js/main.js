(function () {
  // Mobile navigation menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Keep the footer year current
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Reflection word count: only shows when previewing on your own computer,
  // never on the published GitHub Pages site.
  var isLocal =
    location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1";
  var reflection = document.querySelector("[data-word-count]");

  if (isLocal && reflection) {
    var words = 0;
    reflection.querySelectorAll("p").forEach(function (p) {
      if (!p.classList.contains("todo")) {
        words += p.textContent.trim().split(/\s+/).filter(Boolean).length;
      }
    });
    var badge = document.createElement("p");
    badge.className = "word-count";
    badge.textContent =
      "Preview only: your reflection has " + words + " words (aim for 300 to 500).";
    reflection.parentNode.insertBefore(badge, reflection);
  }
})();