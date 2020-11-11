import {Ticket} from '../Modelo/Ticket.js';

export class TicketRepositorio{

    generarTicket(matricula,fechaLlegada,identificador){
        return new Ticket(matricula,fechaLlegada,identificador);
    }

    imprimirTicketDeposito(Ticket){

        Ticket.pin=this.generarPin();
        console.log(`Vehiculo con matricula: ${Ticket.matricula}\n`)
        console.log(`Fecha llegada ${Ticket.fechaLlegada}\n`);
        console.log(`Su pin para recoger el vehiculo es ${Ticket.pin}`);
    }
    imprimirTicketRetirarda(Ticket){
        Ticket.fechaLlegada = new Date();
        console.log(`Vehiculo con matricula: ${Ticket.matricula}\n`)
        console.log(`Fecha llegada ${Ticket.fechaLlegada}\n`);
        console.log(`Fecha salida ${Ticket.fechaSalida}\n`);
        console.log(`El precio de su estancia es de ${Ticket.precio}`);
 
    }
    generarPin(){
        return Math.floor((Math.random()*(900000-100000)+100000));
    }

    
}