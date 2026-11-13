document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");
    const navigationLinks = document.querySelectorAll(".navigation a");

    // فتح وإغلاق القائمة
    menuToggle.addEventListener("click", function () {
        navigation.classList.toggle("show");
    });

    // إغلاق القائمة عند اختيار قسم
    navigationLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("show");
        });
    });

    // تحديد القسم الحالي أثناء التمرير
    const sections = document.querySelectorAll("main section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navigationLinks.forEach(function (link) {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });

    });

});
