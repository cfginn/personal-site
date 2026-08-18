(function () {
  "use strict";
  var btn = document.getElementById("themeBtn");
  if (!btn) return;

  var isDark = document.documentElement.getAttribute("data-theme") === "dark"
    || (!document.documentElement.getAttribute("data-theme")
        && window.matchMedia("(prefers-color-scheme: dark)").matches);
  btn.textContent = isDark ? "Light" : "Dark";

  btn.addEventListener("click", function () {
    var dark = document.documentElement.getAttribute("data-theme") === "dark"
      || (!document.documentElement.getAttribute("data-theme")
          && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", dark ? "light" : "dark");
    btn.textContent = dark ? "Dark" : "Light";
  });
})();
