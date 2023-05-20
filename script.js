const btnMenu = document.querySelector(".menu-btn");
btnMenu.addEventListener("click", () =>
  document.querySelector(".side-menu").classList.toggle("show-menu")
);

document.addEventListener("visibilitychange", (e) => {
  e.preventDefault();
  if (document.visibilityState == "visible") {
    document.title = "Lucas M. Lara";
  } else {
    document.title = "Volte logo! =D";
  }
});
