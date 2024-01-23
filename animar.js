function animacion(elemento, crecimiento='1.01'){
    this.elemento=elemento;
    this.indiceAnimar=0;
    this.intervaloAnimar;
    this.escalas=[crecimiento,'1']   
}
    animacion.prototype= {
        constructor:animacion,
        animar:function (){
            intervaloAnimar = setInterval(function (x){
                
                x.elemento.style.transform = 
                "scale("+x.escalas[x.indiceAnimar]+","+x.escalas[x.indiceAnimar]+")";
                x.indiceAnimar=(x.indiceAnimar?0:1);
                console.log(x)
            }, 500, this)
            },
        desanimar:function(){
            clearInterval(intervaloAnimar); 
            this.elemento.style.transform="scale("+this.escalas[1]+')'},

}