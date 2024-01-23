function abrirHamburguesa () {
    let contenedor_supra_menus = document.querySelector("#contenedor-Supra-menus");

    contenedor_supra_menus.classList.add('contenedorPantallaChica');
    
   

}

function cerrarHamburguesa () {
    let contenedor_supra_menus = document.querySelector("#contenedor-Supra-menus")
    contenedor_supra_menus.classList.remove('contenedorPantallaChica');
}