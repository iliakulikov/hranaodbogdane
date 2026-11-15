"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");
function setMenu(open) {
  navigation.classList.toggle("nav-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
}
menuToggle.addEventListener("click", () =>
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true"),
);
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    menuToggle.focus();
  }
});

const filters = document.querySelectorAll(".category-tabs button");
const dishes = document.querySelectorAll(".dish-card");
filters.forEach((button) =>
  button.addEventListener("click", () => {
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    const category = button.textContent.trim();
    dishes.forEach((dish) => {
      dish.hidden =
        category !== "Все блюда" && dish.dataset.category !== category;
    });
  }),
);

const advisor = document.querySelector(".bogdana-advisor");
const advisorCard = document.querySelector(".advisor-card");
const advisorAvatar = document.querySelector(".advisor-avatar");
const advisorClose = document.querySelector(".advisor-close");
function setAdvisor(open) {
  advisor.classList.toggle("is-open", open);
  advisorCard.hidden = !open;
  advisorAvatar.hidden = open;
  advisorAvatar.setAttribute("aria-expanded", String(open));
  (open ? advisorClose : advisorAvatar).focus({ preventScroll: true });
}
advisorClose.addEventListener("click", () => setAdvisor(false));
advisorAvatar.addEventListener("click", () => setAdvisor(true));
