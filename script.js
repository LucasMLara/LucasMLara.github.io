const menuLink = document.querySelectorAll(".menu-link");

//para fechar o menu com dispositivo pequeno quando clicar em algum link
menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    if (innerWidth < 750) {
      document.querySelector(".topnav").classList.remove("showmenu");
    }
  });
});

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
