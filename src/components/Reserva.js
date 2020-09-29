import React from 'react'
import PropTypes from 'prop-types';

const Reserva = ({reserva,quitarReserva}) =>
    (
        <div className='cita'>
            <p>Alumno: <span>{reserva.alumno}</span></p>
            <p>Entrenador: <span>{reserva.coach}</span></p>
            <p>Fecha: <span>{reserva.date}</span></p>
            <p>Hora: <span>{reserva.time}</span></p>
            <p>Descripción: <span>{reserva.descripcion}</span></p>

            <button
                className='button eliminar u-full-width'
                onClick={() => quitarReserva(reserva.id)}
            >Eliminar &times;
            </button>
        </div>
    )


Reserva.propTypes = {
    reserva: PropTypes.object.isRequired,
    quitarReserva: PropTypes.func.isRequired
}

export default Reserva;