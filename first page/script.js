document
  .querySelectorAll(".form-group input, .form-group textarea")
  .forEach((element) => {
    element.addEventListener("focus", (event) => {
      event.target.previousElementSibling.style.color = "#245d51";
    });

    element.addEventListener("blur", (event) => {
      event.target.previousElementSibling.style.color = "#a8a8a8";
    });
  });

document.getElementById("hamburger").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu");
  navMenu.style.display = navMenu.style.display == "flex" ? "none" : "flex";
});
