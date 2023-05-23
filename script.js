const menuLink = document.getElementsByClassName("menu-link");
console.log(menuLink);

// menuLink.forEach((link) => {
//   console.log(link);
//   link.addEventListener("click", () => {
//     if (innerWidth < 750) {
//       link.classList.remove("showmenu");
//     }
//   });
// });

const navbtnmenu = document.getElementsByClassName("clickmenu")[0];

navbtnmenu.addEventListener("click", () => {
  document.querySelector(".topnav").classList.toggle("showmenu");
});

document.addEventListener("visibilitychange", (e) => {
  e.preventDefault();
  if (document.visibilityState == "visible") {
    document.title = "Lucas M. Lara";
  } else {
    document.title = "Volte logo! =D";
  }
});
