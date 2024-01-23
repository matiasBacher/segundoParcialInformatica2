let nombre = document.URL.split('/');
nombre = nombre[nombre.length - 1]; //una variable para saber en que archivo uno se encuentra

const carpetaImg = 'imagenes/' //array con imagenes para la galeria 
const imagenes = [carpetaImg+"ropa-mayoreo-bombombom.mx_.jpg", 
                carpetaImg+"collage-COLORES.png",
                carpetaImg+"crear-tu-propia-marca-de-ropa.jpg",
                carpetaImg+"colores-tendencia-2022.jpeg"]


const galeriaElemento = document.getElementById('galeria') // se referencia a la galeria
let g= new galeria(galeriaElemento,imagenes,500); // se  crea un objeto de la clase galeria 
                                               //que se encuentra galeria.js con lo cual se 
                                               //colacan las imagenes en la galeria

if(nombre == "" || nombre == "index.html"){  //esta parte solo se carga en la pagina index.html
    let prendas= [ //un array  de objetos tipo prenda del archivo prendas.js
        new prenda("imagenes/item-1.png", "Blaser de Mujer", 30000),
        new prenda("imagenes/item-2.png", "Jeen para mujer", 17500),
        new prenda("imagenes/item-3.png", "Remera Hombrea", 6900, true),
        new prenda("imagenes/item-4.png", "Abrigo", 50700, true, 42900),
        new prenda("imagenes/item-5.png", "Jeen Mujer", 12000),
        new prenda("imagenes/item-6.png", "Blusa Mujer", 15000),
        ]
        for(let i=0; i<prendas.length; i++){
            prendas[i].crearCaja(); //se crean los elementos html relacionado con las prendas
            prendas[i].crearDetalles(); //se crea la parte de los detalles
            document.getElementById('sub'+(i<3?1:2)).appendChild(prendas[i].nodo);//y se los incluye en la galeria de prendas
        }
    
        
   
    
        for(let i=0,x; i<prendas.length; i++){ //se añade a todas las prendas una animacion y
            x= new animacion(prendas[i].nodo); //un evento para mostrar los detalles las funciones respetivas
            prendas[i].nodo.addEventListener("mouseenter", function(){mostrarDetalle(prendas[i].nodo); x.animar()}); //se encuentran animar.js y añadirDetalle.js
            prendas[i].nodo.addEventListener("mouseleave", function(){sacarDetalles(prendas[i].nodo); x.desanimar()});
        
    
        }
    }
    
   const tresRayitas = document.querySelector("#tres-rayitas"); 
   const menus=document.querySelector("#tres-rayitas");
   const contenedorBuscar=document.querySelector("#contedor-buscar");
    
    document.body.onload = () => { //se añade un evento cuando se termina de cargar la pagina
        ajustar(".porta-imagen"); //con esta funcion se ajustan el tamaño de las imagenes de la galeria
        
        if(window. innerWidth <= 400) { //si la pantalla es chica  aparecen las tres rayitas
            
            
            
            mostrar(tresRayitas)   
        }
        else{ //si la pantalla es mas grande hace lo contrario dentro del If
    
            ocultar(tresRayitas)  //funcion para ocultar elementos se encuetra en ocultar.js
            cerrarHamburguesa() 

        }
        if(nombre == "" || nombre == "index.html ") ajustar(".prendas") //si se encuentra en index se ajusta las imagenes de las prendas
    }
    document.body.onresize = document.body.onload //esto es para que haga lo mismo cuando se redimensiona la ventana

    document.querySelector("#icono-buscar span").innerHTML=iconos.buscar; //se agrega el icono de buscar
    document.querySelector("#menu-carrito span").innerHTML=iconos['carrito']; //y el de carrito

    for(let redesIconos = document.querySelectorAll("#redes-footer span"), //for para asignar iconos a las redes y animaciones
        i=0, x; i < redesIconos.length; i++){
            redesIconos.item(i).innerHTML=iconos[redesIconos.item(i).dataset.icono];
            x= new animacion(redesIconos.item(i).parentNode,'1.2');
            redesIconos.item(i).parentNode.addEventListener("mouseenter", function(){x.animar()})
            redesIconos.item(i).parentNode.addEventListener("mouseleave", function(){ x.desanimar()});
        }

    let ofertaInvierno= {encabezado:"Ofertas de Invierno", cuerpo:"Desde el 50% de descuento"} //creamos un objeto para la oferta de la ventana desplegable

    let ventanaHombre= new ventana([["Casual",'Abrigos', 'Deportivos', 'Pantalones', 'Remeras'], //creamos las dos ventanas para el menu hombre y mujer
                                  ['Formal', 'Chaqueta', 'Camisetas', 'Trajes', 'Pantalones']],
                                  ofertaInvierno)

    let ventanaMujer= new ventana([ ['Casual', 'Remeras', 'Bikinis', 'Juvenil', 'Deportivos'],
                                    ['Formal/Noche', 'Vestidos', 'Accesorios', 'Trajes', 'Nueva Temporada']],
                                    ofertaInvierno)
    
    let menuMujer=document.querySelector('#menu-mujer'); //referenciamos los menus hombre y mujer
    let menuHombre=document.querySelector('#menu-hombre');

    menuHombre.firstChild.innerHTML +="<span class='icono_detalles'>"+iconos.flecha+"</span>" // añadimos icono de flecha al menu
    menuMujer.firstChild.innerHTML +="<span class='icono_detalles'>"+iconos.flecha+"</span>"
    
    menuHombre.appendChild(ventanaHombre.nodo); //añadimos las ventanas
    menuMujer.appendChild(ventanaMujer.nodo)

    let tOcultarHombre; //variables para guardar setTimeOut y poder eliminarlos
    let tMostrarHombre;
    menuHombre.onmouseenter= function () { 
        clearTimeout(tOcultarHombre); //cuando se pasa el mouse sobre el menu se cancela la orden de ocultar
        tMostrarHombre= setTimeout(()=>{ventanaHombre.mostrar()},300); //despues de 300ms de mantener el puntero
        //sobre el menu se muestra la ventana
    }

    

    menuHombre.onmouseleave = function () {
        clearTimeout(tMostrarHombre);
        tOcultarHombre=setTimeout(() => { ventanaHombre.ocultar()},500);
    }

    let tOcultarMujer;
    let tMostrarMujer;
    menuMujer.onmouseenter= function () {
        clearTimeout(tOcultarMujer);
        tMostrarMujer= setTimeout(()=>{ventanaMujer.mostrar()},300);
    }

    

    menuMujer.onmouseleave = function () {
        clearTimeout(tMostrarMujer);
        tOcultarMujer=setTimeout(() => { ventanaMujer.ocultar()},500);
    }
    
    setInterval(()=>{scrollear(galeriaElemento)}, 5000); //intervalo para scrollear la galeria
if(nombre == "" || nombre == "index.html") 
{ 
    let f = new fecha(); //objeto de la clase fecha en fecha.js
    let elementoFecha= document.querySelector('#fecha'); //se referencia al elemento con la fecha
    elementoFecha.textContent=f.obtenerFecha();  //y se escribe la fecha

    
    let tOcultarFecha;
    let tMostrarFecha;
    document.querySelector('#contenedorRegistro').onmouseenter= function () { //evento para que se muestre la fecha al pasar el puntero por el menu registro
        clearTimeout(tOcultarFecha);
        tMostrarFecha= setTimeout(()=>{elementoFecha.style.height='30px'},300);
    }

    

    document.querySelector('#contenedorRegistro').onmouseleave = function () { //para ocultar la fecha
        clearTimeout(tMostrarFecha);
        tOcultarFecha=setTimeout(() => { elementoFecha.style.height='0px'},500);
    }
}

if(nombre=="contacto.html"){ //bloque para crear un reloj y que se actualice por medio de un intervalo
   
    let elementoReloj = document.querySelector('#reloj');
    let intervaloReloj = setInterval(function () {
        elementoReloj.textContent = reloj()
        doblePunto=(doblePunto?false:true) //variable para que tintine lOs dos puntos del reloj se encuentra en reloj.js
    },1000 )
}
let banderaTresRayitasClick = true;
tresRayitas.onclick = function (){
    if(banderaTresRayitasClick){
        abrirHamburguesa();
        banderaTresRayitasClick=false
    }
    else{
        cerrarHamburguesa();
        banderaTresRayitasClick=true;
    }
}
