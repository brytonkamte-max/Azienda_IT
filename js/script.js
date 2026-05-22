const menuButton = document.getElementById("menuButton");
const dropdownMenu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
});