// change suites
const suites = document.querySelectorAll('.suite');
const suiteButtons = document.querySelectorAll('.suites__button');

suiteButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    suiteButtons.forEach((btn) =>
      btn.classList.remove('suites__button_active'),
    );
    this.classList.add('suites__button_active');

    suites.forEach((suite) => {
      suite.classList.remove('suites_active')
    });
    suites[index].classList.add("suites_active");
  });
});

// popup
const popupOcean = document.querySelector('.suites__popup');
const layoutButtons = document.querySelectorAll('.suites__layout');
const closePopupButton = document.querySelector('.suites__close-popup');
const popupSuiteImage = document.querySelector('.suites__popup-image');

const oceanImages = [
  './images/ocean-suites/plan-1.webp',
  './images/ocean-suites/plan-2.webp',
];

const penthouseImages = [
  './images/penthouses/plan-1.webp',
  './images/penthouses/plan-2.webp',
  './images/penthouses/plan-3.webp',
  './images/penthouses/plan-4.webp'
];

const residenceImages = [
  './images/residences/plan-1.webp',
  './images/residences/plan-2.webp',
  './images/residences/plan-3.webp',
  './images/residences/plan-4.webp',
  './images/residences/plan-5.webp'
];

function openPopup(images, index) {
  popupOcean.classList.add('suites__popup_opened');
  popupSuiteImage.setAttribute('src', images[index]);
}

function closePopup() {
  popupOcean.classList.remove('suites__popup_opened');
  popupSuiteImage.setAttribute('src', '');
}

function handleOverlayClick(event) {
  if (event.target.contains(popupOcean) && event.target === popupOcean) {
    closePopup();
  }
}

function addDataIndex() {
  document.querySelectorAll('.suite').forEach(suite => {
    const buttons = suite.querySelectorAll('.suites__layout');
    buttons.forEach((button, index) => {
      button.setAttribute('data-index', index);
    });
  });
}
addDataIndex();

layoutButtons.forEach(button => {
  const index = button.getAttribute('data-index');
  button.addEventListener('click', () => {
    if (document.querySelector('.suites__ocean.suites_active')) {
      openPopup(oceanImages, index);
    } else if (document.querySelector('.suites__penthouse.suites_active')) {
      openPopup(penthouseImages, index);
    } else if (document.querySelector('.suites__residence.suites_active')) {
      openPopup(residenceImages, index);
    }
  });
});

closePopupButton.addEventListener('click', closePopup);
document.addEventListener('click', handleOverlayClick);

// decks plans
const buttonDeckList = document.querySelector('.plan__button-list');
const imageDeck = document.querySelector('.plan__image');

for (let i = 3; i <= 14; i++) {
  if (i === 13) continue;
  const planItem = document.createElement('li');
  planItem.classList.add('plan__item');

  const planButton = document.createElement('button');
  planButton.textContent = `Палуба ${i}`;
  planButton.classList.add('plan__button');

  if (i === 3) {
    planButton.classList.add('plan__button_active');
  }

  planButton.onclick = () => {
    const planButtons = document.querySelectorAll('.plan__button');
    planButtons.forEach((button) =>
      button.classList.remove('plan__button_active'),
    );
    planButton.classList.add('plan__button_active');

    imageDeck.src = `./images/decks/deck-${i}.webp`;
    imageDeck.style.display = 'block';
  };
  planItem.appendChild(planButton);
  buttonDeckList.appendChild(planItem);
}

// movement images
const imageContainer = document.querySelector('.plan__image-container');
const moveImage = imageContainer.querySelector('.plan__image');

imageContainer.addEventListener('mousemove', (e) => {
  const rect = imageContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  moveImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
});

// show suites info
const suitesButtons = document.querySelectorAll(".suites__read-more");

suitesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const suitesInfo = button.closest('.suites__content').querySelector(".suites__info");
    if (suitesInfo) {
      suitesInfo.classList.toggle("suites__info_show");
    }
  })
})