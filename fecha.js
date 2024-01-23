function fecha (){
    this.fecha=new Date();

}

fecha.prototype = {
    constructor:fecha,
    dias: ['Domingo',"Lunes","Martes", 'Miercoles', "Jueves", "Viernes", "Sabado"],
    meses: ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
    obtenerFecha: function (){
    return this.dias[this.fecha.getDay()]+", "+this.fecha.getDate()+" de "+
    this.meses[this.fecha.getMonth()]+" de "+this.fecha.getFullYear()
   },
}