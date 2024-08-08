// margin top header
document.querySelectorAll('.anchor-link').forEach(function(anchor) {
  anchor.addEventListener('click', function(event) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      const headerHeight = document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    }
  });
});

// smooth scroll to anchor -header height from another pages(widget solution)
function goToAnchor() {
  if (window.location.pathname === '/' || window.location.pathname === '') {
    const anchor = window.location.hash.substring(1);
    if (anchor) {
      const targetElement = document.getElementById(anchor);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        setTimeout(function() {
          window.scrollTo({
            top: targetElement.offsetTop - headerHeight,
            behavior: 'smooth'
          });
        }, 1000);
      }
    }
  }
}
goToAnchor();

// carousel toggle info cards
function toggleStockContent(button, action) {
  document.querySelectorAll(button).forEach((e) => {
    e.addEventListener("click", () => {
      const stockCarouselBlock = e.closest(".stocks__carousel-block");
      const stocksInfo = stockCarouselBlock.querySelector(
        ".stocks__carousel-back",
      );
      stocksInfo.classList[action]("stocks__carousel_opened");
    });
  });
}
toggleStockContent(".stocks__button", "add");
toggleStockContent(".stocks__button-close", "remove");

// button view awards
const buttonAwards = document.querySelector(".view-awards");
const infoAboutAwards = document.querySelector(".about__info");
buttonAwards.addEventListener("click", () => {
  infoAboutAwards.classList.toggle('about__info_active');
})

// show favorable offers
const favorableBlock = document.querySelector(".favorable-offers");
const footerBlock = document.querySelector(".footer");

window.addEventListener('scroll', function() {
  const footerRect = footerBlock.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
    favorableBlock.classList.add('favorable-offers_active');
  } else {
    favorableBlock.classList.remove('favorable-offers_active');
  }
});