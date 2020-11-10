export class Parking {
    dimension =45;
    constructor(dicMotocicletas,dicTurismos,dicCaravanas){
        this.dicMotocicletas=dicMotocicletas;
        this.dicTurismos=dicTurismos;
        this.dicCaravanas = dicCaravanas;
    }
}

function esCompleto(dimension,dicCaravanas,dicMotocicletas,dicTurismos){
    completado=dicCaravanas.lenght+dicMotocicletas.lenght+dicTurismos.lenght;
    if(completado==dimension){
        return true;
    }else{
        return false;
    }
}