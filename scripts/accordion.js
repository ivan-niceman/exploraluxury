// accordion
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  const title = item.querySelector(".accordion-title");
  title.addEventListener("click", () => {
    const content = item.querySelector(".accordion-content");
    const activeItem = document.querySelector(".accordion-item.active");

    if (activeItem && activeItem !== item) {
      activeItem.classList.remove("active");
      activeItem.querySelector(".accordion-content").style.maxHeight = 0;
    }

    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = 0;
    }
  });
});