import React, {Fragment, useState} from 'react';
import { calcularTotal } from '../helpers/helpers';

function Formulario(props) {

    // Propiedades
    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, guardarCargando} = props;

    // Definir State
    const [error, guardarError] = useState(false);
    
    // Al hacer submit
    const calcularPrestamo = e => {
        e.preventDefault(); // Evita que se recargue la pagina
        //console.log('Jala');

        // Validacion
        if( cantidad === 0 || plazo === '') {
            guardarError(true);
            return;
        }

        // Elimina el error
        guardarError(false);

        // Habilitar Spinner
        guardarCargando(true);

        setTimeout(() => {
            
            // Realizar la cotizacion
            const total = calcularTotal(cantidad, plazo);
            //console.log(total);

            // Guarda el total
            guardarTotal(total);

            // Deshabilitar el spinner
            guardarCargando(false);
        }, 3000);

        

    }

    return(
        <Fragment>
            <form onSubmit={ calcularPrestamo }>

                <div className="row">
                    <div>
                        <label>Monto de tu prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={ e => guardarCantidad( parseInt( e.target.value ) ) }
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => guardarPlazo( parseInt( e.target.value ) ) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            { (error) ? <p className='error'>Todos los campos son obligatorios.</p> : null }

            
        </Fragment>
    )
};

export default Formulario;