import React, {Fragment,useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({agregarReserva}) => {

    const [reserva, setReserva] = useState({
        alumno: '',
        coach:'',
        date:'',
        time:'',
        descripcion:''
    })

    const [error, setError] = useState(false)


    //Actualizamos el state
    const handleChange = e =>{
        setReserva({
            ...reserva,
            [e.target.name] : e.target.value
        })
    }

    //Extraemos los datos
    const {alumno,coach,date,time,descripcion} = reserva

    //Enviar formulario
    const handleSubmit = e =>{
        e.preventDefault()

        //Validamos que no esten vacios
        if(alumno.trim() === '' || coach.trim() === '' || date.trim() === '' || 
        time.trim() === '' || descripcion.trim() === ''){
            setError(true)
            return;
        }

        setError(false)
        reserva.id = uuidv4()

        agregarReserva(reserva)

        setReserva({
            alumno: '',
            coach:'',
            date:'',
            time:'',
            descripcion:''
        })
        
    }
    
    return ( 
        <Fragment>
            <h1>Crear Reserva</h1>
            {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}
            <label>Nombre Alumno(a)</label>
            <form 
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    name="alumno"
                    placeholder="Nombre Alumno"
                    className="u-full-width"
                    onChange={handleChange}
                    value={alumno}
                />
                <label>Nombre Coach</label>
                <input 
                    type="text"
                    name="coach"
                    placeholder="Nombre Coach"
                    className="u-full-width"
                    onChange={handleChange}
                    value={coach}
                />
                <label>Fecha</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label>Descripción</label>
                <textarea 
                    name="descripcion"
                    className="u-full-width"
                    onChange={handleChange}
                    value={descripcion}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Reserva</button>
            </form>
        </Fragment>
     );
}

Form.propTypes = {
    agregarReserva: PropTypes.func.isRequired
}
 
export default Form;
