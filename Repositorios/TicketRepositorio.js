import {Ticket} from '../Modelo/Ticket.js';

export class TicketRepositorio{

    generarTicket(vehiculo){
        return new Ticket(vehiculo.matricula,new Date(),vehiculo.id);
    }

    imprimirTicketDeposito(ticket){
        ticket.pin=this.generarPin();
        console.log(`Vehiculo con matricula: ${ticket.matricula}\n`)
        console.log(`Fecha llegada ${ticket.fechaLlegada}\n`);
        console.log(`Su pin para recoger el vehiculo es ${ticket.pin}`);
    }
    imprimirTicketRetirarda(ticket){
        ticket.fechaLlegada = new Date();
        console.log(`Vehiculo con matricula: ${ticket.matricula}\n`)
        console.log(`Fecha llegada ${ticket.fechaLlegada}\n`);
        console.log(`Fecha salida ${ticket.fechaSalida}\n`);
        console.log(`El precio de su estancia es de ${ticket.precio}`);
 
    }
    generarPin(){
        return Math.floor((Math.random()*(900000-100000)+100000));
    }

    
}