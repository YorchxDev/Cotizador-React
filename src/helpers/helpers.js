
export function calcularTotal(cantidad, plazo) {

    // Calcular Cantidades
    // 0 - 1000 = 25%
    // 1001 - 5000 = 20%
    // 5001 - 10000 = 15%
    // +10000 = 10%
    
    let cantidadTotal;

    if( cantidad <= 1000) {
        cantidadTotal = cantidad * 0.25;
    }
    else if( cantidad > 1000 && cantidad <= 5000) {
        cantidadTotal = cantidad * 0.20;
    }
    else if( cantidad > 5000 && cantidad <= 10000) {
        cantidadTotal = cantidad * 0.15;
    }
    else if( cantidad > 10000) {
        cantidadTotal = cantidad * 0.10;
    }

    //console.log(cantidadTotal);

    // Calcular el plazo
    // 3 = 5%
    // 6 = 10%
    // 12 = 15%
    // 24 = 20%

    let plazoTotal = 0;

    switch (plazo) {
        case 3:
            plazoTotal = cantidad * 0.05;
            break;
        case 6:
            plazoTotal = cantidad * 0.10;
            break;
        case 12:
            plazoTotal = cantidad * 0.15;
            break;
        case 24:
            plazoTotal = cantidad * 0.20;
            break;
        default:
            break;
    }

    //console.log(plazoTotal);

    return plazoTotal + cantidadTotal + cantidad;

}