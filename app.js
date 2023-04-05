//Ejercicio descuento según marca y modelo del auto:
//Le pedimos al usuario que ingrese marca y modelo del auto, 
//en caso que el auto sea Ford fiesta el descuento que se aplica será del 5%, 
//si es un Ford Focus el descuento será del 10%.
 //Mostramos por consola el descuento que obtendrá.



let marcamodelo = prompt("Ingrese marca y modelo del auto");

 if(marcamodelo.toLowerCase().indexOf ("ford fiesta") != -1)  {

console.log("El auto ford fiesta tiene un 5% de descuento.") 

 }else if (marcamodelo.toLowerCase().indexOf("ford focus") != -1 ){

    console.log("El auto Ford focus tiene un 10% de descuento.")
}else {
    console.log("Este modelo de auto no tiene ningun descuento.")
}

  