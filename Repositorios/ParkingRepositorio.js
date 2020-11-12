
export class ParkingRepositorio{
    parking;
    vehiculoRepositorio;
    ticketRepositorio;
    constructor(parking,vehiculoRepositorio,ticketRepositorio) {
        this.parking=parking;
        this.vehiculoRepositorio=vehiculoRepositorio;
        this.ticketRepositorio = ticketRepositorio;
    }

    precioEstancia(matricula,pin){
        let vehiculo =this.vehiculoRepositorio.buscarPorMatricula(matricula);
        let ticket = this.ticketRepositorio.buscarPorPin(pin);
        ticket.fechaSalida=new Date();
        console.log(ticket);
        let minutosTotales= (ticket.fechaSalida-ticket.fechaLlegada)/60000 ;
        console.log(`Ha estado ${minutosTotales} eb el parking`);
        if(vehiculo.tipo =="Turismo"){
            return ticket.precio= minutosTotales*0.12;
        }else if(vehiculo.tipo =="Motocicleta"){
            return ticket.precio=minutosTotales*0.08;
        }else if(vehiculo.tipo=="Caravana"){
            return ticket.precio=minutosTotales*0.45;
        }
    }

    
    
}