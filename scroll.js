function scrollear(nodo){
   let salto = nodo.clientHeight;
   let altura = nodo.scrollTop;
   let alturaMaxima =salto*(nodo.children.length-1);

   if((altura<alturaMaxima)){
    nodo.scrollBy({
    top: salto,
    behavior: "smooth"
    })
   }
   else{
    nodo.scrollTo({
        top: 0,
        behavior: "smooth"
        })
   } 
}