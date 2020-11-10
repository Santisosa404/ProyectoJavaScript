import * as Parking from './Modelo/Parking.js'; 
import * as Automovil from './Modelo/Automovil.js'
import * as Plaza  from './Modelo/Plaza.js';

let listaVehiculos=[];

let turis1 = new Automovil("56678-B","Turismo");
let plaza1 = new Plaza("pruebaLlegada","pruebaSalida",1);
let parkingGeneral = new Parking(listaVehiculos);
dicTurismos.set(turis1,plaza1);

console.log(dicTurismos);
console.log("Bienvenido al parking bustillo\n");

do{
switch(op){

    case 1:

        break;
    
    case 2:
        
        break;
    
    default:


}
}while(op!=0);