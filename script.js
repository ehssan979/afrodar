/* =========================
   AFRODAR WEBSITE
   MAIN JAVASCRIPT
========================= */


/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navbar.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {
            navbar.classList.remove("active");
        }

    });

    // Close menu after clicking a navigation link
    navbar.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {
            navbar.classList.remove("active");
        });

    });

}


/* LANGUAGE SWITCHING */

const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("afrodarLanguage") || "ar";


function changeLanguage(language) {

    currentLanguage = language;

    // Change page direction and language
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.body.dir = language === "ar" ? "rtl" : "ltr";

    // Change all bilingual elements
    const bilingualElements = document.querySelectorAll("[data-ar][data-en]");

    bilingualElements.forEach(function (element) {

        if (language === "ar") {
            element.textContent = element.getAttribute("data-ar");
        } else {
            element.textContent = element.getAttribute("data-en");
        }

    });

    // Update language button
    if (languageToggle) {

        languageToggle.textContent =
            language === "ar" ? "English" : "العربية";

    }

    // Save selected language
    localStorage.setItem("afrodarLanguage", language);

}


// Language button event
if (languageToggle) {

    languageToggle.addEventListener("click", function () {

        const newLanguage =
            currentLanguage === "ar" ? "en" : "ar";

        changeLanguage(newLanguage);

    });

}


// Apply saved language on page load
changeLanguage(currentLanguage);


/* CURRENT YEAR */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* BACK TO TOP */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 350) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* BOTTOM NAVIGATION */

const bottomLinks = document.querySelectorAll(".bottom-nav a");

bottomLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const targetId = link.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* NAVBAR ACTIVE LINK */

const navigationLinks = document.querySelectorAll(".navbar a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigationLinks.forEach(function (item) {
            item.classList.remove("active-link");
        });

        link.classList.add("active-link");

    });

});
