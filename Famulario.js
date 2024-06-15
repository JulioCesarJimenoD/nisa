
import './Formulario.css'
// import './nice.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'

document.getElementById("icon_menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

    document.querySelector(".menu").classList.toggle("mostrar_menu");
    
}
document.addEventListener("click", function(event) {
    const menu = document.querySelector(".menu");
    const iconMenu = document.getElementById("icon_menu");

    if (!menu.contains(event.target) && event.target !== iconMenu) {
        menu.classList.remove("mostrar_menu");
    }
});

document.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu");
    menu.classList.remove("mostrar_menu");
});




