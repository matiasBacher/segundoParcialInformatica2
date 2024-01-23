function ajustar(selector){
    
    let portaImagenes = document.querySelectorAll(selector);
    
    
            for (let i = 0, alto, ancho, imagen, altoImagen, anchoImagen; i < portaImagenes.length; i++) {
                ancho= portaImagenes[i].clientWidth;
                alto= portaImagenes[i].clientHeight;
                imagen=portaImagenes[i].querySelector('img');
                altoImagen=imagen.clientHeight;
                anchoImagen=imagen.clientWidth;
                if (altoImagen<alto){
                    imagen.classList.add("imagenVertical");
                }
                else if(anchoImagen<ancho){
                    imagen.classList.remove("imagenVertical")
                }
            }
        // }, 1000)

    
        
        
        
    }


