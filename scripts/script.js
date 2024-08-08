// open mobile menu
const mobileNav = document.querySelector(".header__mobile-nav");
const mobileNavAnchor = mobileNav.querySelectorAll('.anchor-link');
const mobileMenu = mobileNav.querySelector(".header__mobile-menu");

function handleOpenMobileNav() {
  mobileNav.classList.add("header__mobile-nav_open");
  mobileMenu.classList.add("header__mobile-menu_open");
  document.body.classList.add("body__hidden");
}
function handleCloseMobileNav() {
  mobileNav.classList.remove("header__mobile-nav_open");
  mobileMenu.classList.remove("header__mobile-menu_open");
  document.body.classList.remove("body__hidden");
}
function handleOverlayCloseMobileNav(event) {
  if (event.target.contains(mobileNav) && event.target === mobileNav) {
    handleCloseMobileNav();
  }
}
mobileNavAnchor.forEach(anchor => {
  anchor.addEventListener("click", handleCloseMobileNav);
})
const mobileNavButton = document.querySelector(".burger-button");
const mobileCloseMenu = document.querySelector(".close-mobile-menu");
mobileNavButton.addEventListener("click", handleOpenMobileNav);
mobileCloseMenu.addEventListener("click", handleCloseMobileNav);
document.addEventListener("click", handleOverlayCloseMobileNav);


// scroll to top
const scrollToTopButton = document.querySelector('.upward');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});