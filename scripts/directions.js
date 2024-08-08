// movement images
const imageContainer = document.querySelector('.direction__map-block');
const moveImage = imageContainer.querySelector('.direction__map-img');

imageContainer.addEventListener('mousemove', (e) => {
  const rect = imageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  moveImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
});