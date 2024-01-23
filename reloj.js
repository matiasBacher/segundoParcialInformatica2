let doblePunto = false
function reloj(){
    let reloj = new Date;
    let hora= reloj.getHours();
    let minutos = reloj.getMinutes();
    let segundos = reloj.getSeconds();
    let puntos=(doblePunto?" ":":")
    let momentoDia = hora<=12?"AM":"PM";
    hora = hora % 12;
    if(hora==0)hora=12;
    
    return ""+(hora<10?"0":"")+hora+puntos+minutos+puntos+(segundos<10?"0":"")+segundos+" "+momentoDia;
    

}