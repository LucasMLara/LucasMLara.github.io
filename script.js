const browserName = (function (agent) {
  switch (true) {
    case agent.indexOf("edge") > -1:
      return "MS Edge";
    case agent.indexOf("edg/") > -1:
      return "Edge ( chromium based)";
    case agent.indexOf("opr") > -1 && !!window.opr:
      return "Opera";
    case agent.indexOf("chrome") > -1 && !!window.chrome:
      return "Chrome";
    case agent.indexOf("trident") > -1:
      return "MS IE";
    case agent.indexOf("firefox") > -1:
      return "Mozilla Firefox";
    case agent.indexOf("safari") > -1:
      return "Safari";
    default:
      return "other";
  }
})(window.navigator.userAgent.toLowerCase());

console.log("You are using " + browserName + " browser");

const menuLink = document.querySelectorAll(".menu-link");

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    if (innerWidth < 750) {
      document.querySelector(".topnav").classList.remove("showmenu");
    }
  });
});

const navbtnmenu = document.getElementById("clickmenu");

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
