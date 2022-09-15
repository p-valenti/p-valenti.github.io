const menuBtn = document.querySelector(".sidebar-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

// let i=0;
// const txt = 'Hi there! My name is Valentina';
// const speed = 50;
//
// function typingText() {
//     if (i < txt.length) {
//         document.getElementById("hello").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typingText, speed);
//     }
// }