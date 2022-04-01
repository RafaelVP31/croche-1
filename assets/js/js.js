const botaoMenu = document.querySelector(".button__menu");
const menuLateral = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("menu-lateral__ativo");
})

