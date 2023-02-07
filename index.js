"use strict";

const headerButton = document.querySelector(".header__button-container");
const headerNav = document.querySelector(".header__nav-container");

headerButton.addEventListener("click", element =>  {
    headerNav.classList.toggle("active");
}); 