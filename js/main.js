/* =========================================================
   Portfolio – Vanilla JavaScript
   ========================================================= */

(function () {
  "use strict";

  /* -------------------------------------------------------
     Active nav-link on scroll
     ------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const NAVBAR_HEIGHT = 72; // px offset

  function updateActiveLink() {
    const scrollY = window.scrollY;

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - NAVBAR_HEIGHT - 10;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  /* -------------------------------------------------------
     Scroll-to-top button
     ------------------------------------------------------- */
  const scrollTopBtn = document.getElementById("scrollTop");

  function toggleScrollTop() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* -------------------------------------------------------
     Collapse mobile navbar on link click
     ------------------------------------------------------- */
  const navbarCollapse = document.getElementById("mainNav");
  if (navbarCollapse) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        // Bootstrap 5 collapse API
        const bsCollapse = window.bootstrap &&
          bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

  /* -------------------------------------------------------
     Throttled scroll handler
     ------------------------------------------------------- */
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        toggleScrollTop();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Run once on load
  updateActiveLink();
  toggleScrollTop();
})();
