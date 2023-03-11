import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment'
import PropTypes from 'prop-types'

function App() {

  //appointments on local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'))
  if(!initialAppointments) {
    initialAppointments = []
  }
  //Create array of appointments
  const [appointments, SetAppointments] = useState(initialAppointments)

  //useEffect for realize operation when the state change
  useEffect( () => {
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'))
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments] )

  // function that takes the current appointments and adds the new ones
  const createAppointment = appointment => {
    SetAppointments([
      ...appointments,
      appointment
    ])
  }

  //function that eliminate a appointment by id
  const deleteAppointments = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id  )
    SetAppointments(newAppointments)
  }

  // conditional message
  const tittle = appointments.length === 0 ? 'no appointments' : 'Manage your appointments'

  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form
              createAppointment ={createAppointment}
            />
          </div>
          <div className='one-half column'>
            <h2>{tittle}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointments={deleteAppointments}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

  Form.propTypes = {
    createAppointment: PropTypes.func.isRequired
  };
  

export default App;
