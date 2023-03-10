import React, {Fragment, useState} from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment'

function App() {

  //Create array of appointments
  const [appointments, SetAppointments] = useState([])

  // function that takes the current appointments and adds the new ones
  const createAppointment = appointment => {
    SetAppointments([
      ...appointments,
      appointment
    ])
  }
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
            <h2>Manage your appointments </h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default App;
