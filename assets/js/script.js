(function () {
  // Init AOS
  AOS.init({
    duration: 680,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
  });

  // Preloader
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    setTimeout(function () {
      preloader.classList.add("hidden");
      setTimeout(function () {
        preloader.remove();
      }, 700);
    }, 900);
  });

  // Sticky header
  const header = document.getElementById("header");
  window.addEventListener(
    "scroll",
    function () {
      header.classList.toggle("scrolled", window.scrollY > 40);
    },
    { passive: true },
  );

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");
  hamburger.addEventListener("click", function () {
    const isOpen = mobileNav.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
  document.addEventListener("click", function (e) {
    if (!header.contains(e.target) && mobileNav.classList.contains("open")) {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--nav-height",
        ),
      );
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  });

  // Scroll top button
  const scrollTopBtn = document.getElementById("scroll-top");
  window.addEventListener(
    "scroll",
    function () {
      scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
    },
    { passive: true },
  );
  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

const modal = document.getElementById("myModal");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target == modal) {
    closeModal();
  }
};

const dropdownBtns = document.querySelectorAll(".mobile-dropdown-btn");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    const parent = this.parentElement;

    // Close other dropdowns
    document.querySelectorAll(".mobile-dropdown").forEach((item) => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    // Toggle current dropdown
    parent.classList.toggle("active");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".mobile-dropdown").forEach((item) => {
    item.classList.remove("active");
  });
});
