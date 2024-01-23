
let iconos={carrito:'&#61725',corazon:'&#60943', 
            ojo:'&#60596', buscar:'&#61649', 
            facebook:"&#60604", instagram:'&#61030',
            twiter:"&#62010", pinterest:"&#61439",
            flecha:"&#59982" }
function prenda(imagen, descripcion ,precio, grande=false, rebaja=0){
    this.imagen=imagen;
    this.precio=precio;
    this.grande=grande;
    this.rebaja=rebaja;
    this.descripcion=descripcion;
    this.precioFormateado= new Intl.NumberFormat('de-DE').format(this.precio);
    this.rebajaFormateado= new Intl.NumberFormat('de-DE').format(this.rebaja);
}

prenda.prototype = {
    constructor:prenda,
    crearCaja: function (){
            let elemento,  rebajado,precioArticulo,imagenArticulo, detalles;
            
                 elemento=document.createElement("article");
                elemento.classList.add("prendas");
                if(this.grande){
                    elemento.classList.add("grande")
                }
                
                 precioArticulo=document.createElement('p');
                precioArticulo.classList.add('precio');

                
                if(this.rebaja>0){
                    precioArticulo.innerHTML='<span class="tachado"> $'+
                                            this.precioFormateado+'</span> '+
                                            this.rebajaFormateado;    
                }
                else{
                    
                    precioArticulo.innerHTML='$'+this.precioFormateado ;    
                }
                
                imagenArticulo=document.createElement('img');
                imagenArticulo.src=this.imagen;
                
                
                elemento.appendChild(precioArticulo);
                elemento.appendChild(imagenArticulo);

                this.nodo=elemento;
            },

            crearDetalles:function(){
                let icono_detalles = Object.values(iconos);
                let detalles = document.createElement('div');
                detalles.classList.add("detalles");

                detalles.appendChild(document.createElement('p'))
                detalles.children[0].innerHTML=
                this.descripcion + (this.rebaja>0 ?
                (' <span class="tachado">$'+this.precioFormateado+'</span> $'+
                this.rebajaFormateado) : ' $'+this.precioFormateado);

                detalles.appendChild(document.createElement('div'))
                for(let i=0; i<3; i++){
                    detalles.children[1].innerHTML+=('<span class="icono_detalles">'+icono_detalles[i]+'</span>')
                }
                this.nodo.appendChild(detalles);
            }
        }





