document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelectorAll(".sidenav");
  const navInstance = M.Sidenav.init(nav, {});

  const collapsible = document.querySelectorAll(".collapsible");
  const collInstance = M.Collapsible.init(collapsible, {});
});
