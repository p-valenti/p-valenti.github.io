const menuBtn = document.querySelector(".sidebar-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});