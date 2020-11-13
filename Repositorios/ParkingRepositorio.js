
export class ParkingRepositorio{
    parking;
    vehiculoRepositorio;
    ticketRepositorio;
    abonadoRepositorio;
    constructor(parking,vehiculoRepositorio,ticketRepositorio,abonadoRepositorio) {
        this.parking=parking;
        this.vehiculoRepositorio=vehiculoRepositorio;
        this.ticketRepositorio = ticketRepositorio;
        this.abonadoRepositorio=abonadoRepositorio;
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

    plazasDisponibles(){
        let contTicket=0;
        let contAbonado=0;
        this.ticketRepositorio.listaTickets.forEach(Ticket => {
            contTicket++;
        });
        this.abonadoRepositorio.listaAbonados.forEach(Abonado => {
            contAbonado++;
        });
        let ocupadas =contTicket+contAbonado;
        if(ocupadas < this.parking.numPlazas){
            console.log(`Quedan ${this.parking.numPlazas-ocupadas} plazas disponibles`);
            return true;
        }else{
            return false;
        }
    }

    estadoParking(){
        let contTicket=0;
        let numPlazasTicket=[];
        let contAbonado=0;
        let numPlazasAbonados=[]
        this.ticketRepositorio.listaTickets.forEach(Ticket => {
            contTicket++;
            numPlazasTicket.push(Ticket.plaza);
        });
        this.abonadoRepositorio.listaAbonados.forEach(Abonado => {
            contAbonado++;
            numPlazasAbonados.push(Abonado.numPlaza);
        });
        let ocupadas =contTicket+contAbonado;
        console.log(`Hay ${ocupadas} plazas ocupadas\nLas plazas abonadas son ${contAbonado}\nLas plazas ocupadas por no abonados son ${contTicket}`);
        console.log(`Los numeros de las plazas abonadas son ${numPlazasAbonados}`);
        console.log(`Los numeros de las plazas con ticket son ${numPlazasTicket}\n`);

    }

    facturacion(fecha1,fecha2,listaTicketsPagados){
        let facturados =[]
       listaTicketsPagados.forEach(Ticket => {
           if(Ticket.fechaSalida.isBetween(fecha1,fecha2)){
                facturados.push(Ticket);
           }
       });
        return facturados;
    }
    
    
}