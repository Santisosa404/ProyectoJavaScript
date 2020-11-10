class Parking {
    dimension =45;
    constructor(listaMotocicletas,listaTurismos,listaCaravanas){
        this.listaMotocicletas=listaMotocicletas;
        this.listaTurismos=listaTurismos;
        this.listaCaravanas = listaCaravanas;
    }
}
function esCompleto(dimension,listaCaravanas,listaMotocicletas,listaTurismos){
    completado=listaCaravanas.lenght+listaMotocicletas.lenght+listaTurismos.lenght;
    if(completado==dimension){
        return true;
    }else{
        return false;
    }
}