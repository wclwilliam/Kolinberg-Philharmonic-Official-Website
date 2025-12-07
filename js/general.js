// 漢堡
// 1. 點選漢堡時toggle "active"
// 2. 點選漢堡內任一連結時，remove "active"


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector("header .hamburger");
    const nav = document.querySelector("header nav");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
    });

    document.querySelectorAll("header nav li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            nav.classList.remove("active");
        });
    });
});

