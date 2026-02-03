let userIcon = document.querySelector(".header-user-icon");
let menu = document.querySelector(".settings-menu");

userIcon.addEventListener("click", () => {
  menu.classList.toggle("settings-menu-height");
});
