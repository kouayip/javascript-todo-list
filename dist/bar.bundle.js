/******/ (() => { // webpackBootstrap
/*!**********************************!*\
  !*** ./src/assets/js/toolbar.js ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
var menu = document.querySelector("nav.nav-menu");
var toggle = document.querySelector(".nav-menu-toggle");
var openCLass = "open";
var isMenuOpen = false;

var toggleMobileMenu = function toggleMobileMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }

  isMenuOpen = !isMenuOpen;
};

var closeMenu = function closeMenu() {
  menu.classList.remove(openCLass);
};

var openMenu = function openMenu() {
  menu.classList.add(openCLass);
};

toggle.addEventListener("click", function () {
  toggleMobileMenu();
});
/******/ })()
;
//# sourceMappingURL=bar.bundle.js.map