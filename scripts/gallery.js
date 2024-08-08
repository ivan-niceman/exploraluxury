// change gallery
const galleryContent = document.querySelectorAll('.gallery__content');
const galleryButtons = document.querySelectorAll('.gallery__button');

galleryButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    galleryButtons.forEach((btn) =>
      btn.classList.remove('gallery__button_active'),
    );
    this.classList.add('gallery__button_active');

    galleryContent.forEach((elem) => {
      elem.classList.remove('gallery__content_active')
    });
    galleryContent[index].classList.add("gallery__content_active");
  });
});