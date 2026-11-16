// AFRODAR WEBSITE INTERACTIONS

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Mobile Navigation Menu
if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !navLinks.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      navLinks.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

// Back To Top Button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.classList.toggle(
      "visible",
      window.scrollY > 450
    );
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Automatic Copyright Year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
