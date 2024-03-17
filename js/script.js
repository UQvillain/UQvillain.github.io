// toggle active class
const navbarNav = document.querySelector(".navbar-nav");
// ketka hamburger menu nya di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik dimanasaja untuk menghilangkan hamburger menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
