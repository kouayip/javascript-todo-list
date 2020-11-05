const menu = document.querySelector("nav.nav-menu");
const toggle = document.querySelector(".nav-menu-toggle");

const openCLass = "open";
let isMenuOpen = false;

const toggleMobileMenu = () => {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
  isMenuOpen = !isMenuOpen;
};

const closeMenu = () => {
  menu.classList.remove(openCLass);
};

const openMenu = () => {
  menu.classList.add(openCLass);
};

toggle.addEventListener("click", () => {
  toggleMobileMenu();
});
