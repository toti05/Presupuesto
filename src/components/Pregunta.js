import React, { useState } from 'react';
import MensajeError from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {
    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //funcion que lee el presupuesto
    //e para tener acceso .target, .name, .value
    const definirPresupuesto = e => {
        //console.log(parseInt(e.target.value))
        guardarCantidad(parseInt(e.target.value, 10));
    };

    //submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return;
        }

        // si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return (
        <div>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <MensajeError mensaje='El Presupuesto es Incorrecto' /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input
                    //lo que lees de un input normalmente devuelve un string aunque sea tipo number
                    type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />

                <input
                    type='submit'
                    className='button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
        </div>
    );
};

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;