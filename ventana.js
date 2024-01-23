
function ventana (menus, oferta=false){
    this.menus=menus;
    this.oferta=oferta;
    this.crearVentana();

}

ventana.prototype = {

    constructor:ventana,

    
    crearVentana: function (){
        this.nodo=document.createElement('div');
        this.nodo.classList.add('ventana', 'oculto')
        
        let contenedorMenus =document.createElement('div')
        contenedorMenus.classList.add('contenedorMenus');

        for(let i=0, x ; i<this.menus.length; i++){
            x=document.createElement('ul');
            x.classList.add("listaMenu",);
            for(let j=0, y, a; j<this.menus[i].length; j++){
                y=document.createElement('li');

                a=document.createElement('a')
                a.href='#'+this.menus[i][j];
                a.innerHTML=this.menus[i][j];

                y.appendChild(a);
                x.appendChild(y);
            }
            contenedorMenus.appendChild(x)
        }
        this.nodo.appendChild(contenedorMenus);
        if(this.oferta){
            let divOferta=document.createElement('div');
            divOferta.classList.add("oferta");
            divOferta.innerHTML="<h1>"+this.oferta.encabezado+'</h1>'+"<p>"+this.oferta.cuerpo+'</p>';
            this.nodo.appendChild(divOferta)
        }

        
    },
    mostrar: function (){
        mostrar(this.nodo);

    },
    ocultar: function (){
        ocultar(this.nodo);
        
}
}
    

