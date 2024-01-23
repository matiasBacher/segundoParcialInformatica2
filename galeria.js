function galeria(nodo, imagenes, tiempo){
    this.nodo=nodo;
    this.imagenes=imagenes; 
    this.tiempo=tiempo;
    this.crearNodo();
}

galeria.prototype = {
    constructor: galeria,

    crearNodo: function() {
       
        
        for(let i=0, div, img; i<this.imagenes.length ; i++){
            div = document.createElement('div');
            div.classList.add("porta-imagen");
            
            div.id= (this.nodo.id+i);

            img = document.createElement('img');
            img.src= this.imagenes[i];

            div.appendChild(img);

            this.nodo.appendChild(div);
        }
    },


}