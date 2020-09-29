import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Reserva from './components/Reserva';


function App() {

  let reservasIniciales = JSON.parse(localStorage.getItem('reservas'))
  if(!reservasIniciales){
    reservasIniciales = []
  }

  const[reservas,setReservas] = useState(reservasIniciales)

  

  useEffect(()=>{
    console.log('Compoenente cargado o cambios en Reservas')
    if(reservasIniciales){
      localStorage.setItem('reservas',JSON.stringify(reservas))
    }
  },[reservas,reservasIniciales])

  const agregarReserva = reserva => {
    setReservas([
      ...reservas,
      reserva
    ])
  }

  const quitarReserva = id =>{
    const nuevasReservas = reservas.filter(reserva => reserva.id !== id)
    setReservas(nuevasReservas)
  }

  const title = reservas.length === 0 ? 'No hay Reservas' : 'Administra tus Reservas'

  return (
    <Fragment>
      <h1>Administrador de Entrenamientos Personalizados</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form 
              agregarReserva = {agregarReserva}
            />
          </div>
          <div className='one-half column'>
            <h1>{title}</h1>
            {reservas.map( reserva => (
              <Reserva 
                key = {reserva.id}
                reserva = {reserva}
                quitarReserva = {quitarReserva}
              />
            ))}
            
          </div>
        </div>
      </div>
    </Fragment>


  );
}

export default App;
