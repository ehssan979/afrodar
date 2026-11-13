var menuBtn = document.getElementById("menuBtn");
var menu = document.getElementById("menu");
var topBtn = document.getElementById("topBtn");

// فتح وقفل القائمة في الموبايل
menuBtn.onclick = function () {
  menu.classList.toggle("open");
};

// قفل القائمة بعد الضغط على أي رابط
var links = menu.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    menu.classList.remove("open");
  };
}

// زر الرجوع لأعلى الصفحة
window.onscroll = function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};