class VehiculoRepositorio{

    constructor(listaMotocicletas,listaTurismos,listaCaravanas){
        this.listaMotocicletas = listaMotocicletas;
        this.listaTurismos =listaTurismos;
        this.listaCaravanas=listaCaravanas;
    }

    buscarPorMatricula(matricula){
        let parkingCompleto = parkingCompleto.concat(this.listaMotocicletas,this.listaCaravanas,this.listaTurismos);
        for(let i=0;i<parkingCompleto.lenght();i++){
            if(parkingCompleto[i].matricula.equalsIgnoreCase(matricula)){
                return parkingCompleto[i];
            }
        }
    }
    
    buscarPorId(id){
        let parkingCompleto = parkingCompleto.concat(this.listaMotocicletas,this.listaCaravanas,this.listaTurismos);
        for(let i=0;i<parkingCompleto.lenght();i++){
            if(parkingCompleto[i].id == id){
                return parkingCompleto[i];
            }
        }
    }
    

   
    agregarVehiculo(vehiculo) {
            if(vehiculo.tipo.equalsIgnoreCase("Motocicleta") && this.listaMotocicletas.lenght()<15){
                return listaMotocicletas.push(vehiculo);
            }else if(vehiculo.tipo.equalsIgnoreCase("Caravana") && this.listaCaravanas.lenght()<15){
                return listaMotocicletas.push(vehiculo);
            }else if(vehiculo.tipo.equalsIgnoreCase("Turismo") && this.listaTurismos.lenght()<15){
                return listaMotocicletas.push(vehiculo);
            }
        
    }


    eliminarVehiculoPorId(id){
        
    }



    /*
    function calcularPago(horaLlegada,horaSalida, tipo){
            if(tipo.equalsIgnoreCase("Motocicleta")){
                let tarifacion=0.08;
            }else if(tipo.equalsIgnoreCase("Caravana")){
                let tarifacion=0.45;
            }else if(tipo.equalsIgnoreCase("Turismo")){
                let tarifacion=0.12;
            }
            minutosTotales =(horaSalida/60)-(horaLlegada/60);
            return minutosTotales*tarifacion;
        }
        
    */


}