export class TicketServicio{
    ticketRepositorio;
    constructor(ticketRepositorio){
        this.ticketRepositorio=ticketRepositorio;
    }

    imprimirTicketDeposito(ticket){
        return this.ticketRepositorio.imprimirTickeTDeposito(ticket);
    }
    imprimirTicketRetirada(ticket){
        return this.ticketRepositorio.imprimirTicketRetirada(ticket);
    }


}