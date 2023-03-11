import React from 'react'

const Appointment = ({appointment, deleteAppointments}) => {
    return ( 
        <div className='cita'>
            <p>Pet: <span>{appointment.pet}</span> </p>
            <p>Owner: <span>{appointment.owner}</span> </p>
            <p>Date: <span>{appointment.date}</span> </p>
            <p>Time: <span>{appointment.time}</span> </p>
            <p>Symptoms: <span>{appointment.symptoms}</span> </p>

            <button
                className='button eliminar u-full-width'
                onClick={ () => deleteAppointments(appointment.id)}
            >Delete</button>
        </div>
    );
}
 
export default Appointment;