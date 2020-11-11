export class Plaza{
    numero;
    ocupada;
    vehiculo;
    constructor(numero,ocupada,vehiculo) {
        this.numero=numero;
        this.ocupada=ocupada;
        this.vehiculo=vehiculo;
    }

    getNumero(){
        return this.numero;
    }
    isOcupada(){
        return this.ocupada;
    }
    getvehiculo(){
        return this.vehiculo;
    }
    setNumero(numero){
        this.numero=numero;
    }
    setVehiculo(vehiculo){
        this.vehiculo=vehiculo;
    }
}