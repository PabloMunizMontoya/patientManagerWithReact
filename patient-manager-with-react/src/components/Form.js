
import React, {Fragment, useState} from 'react'


const Form = () => {

    // Create appointment state
    const [appointment, SetAppointment] = useState({
        pet: '',
        owner: '',
        date: ',',
        time: '',
        symptoms: ''
    })

    //function that is executed when th user writhe an input
    const updateState = e => {
        SetAppointment({
            ...appointment,
            [e.target.name] : e.target.value
        })
    }

    //Extract the values
    const { pet, owner, date, time, symptoms} = appointment 

    //function that activates the submission of the form
    const submitAppointment = (e) => {
        e.preventDefault()

        
    }

    return ( 
        <Fragment>
            <h2>Create appointment</h2>
            
            <form
                onSubmit={submitAppointment}
            >
                <label>Pet Name</label>
                <input
                    type='text'
                    name='pet'
                    className='u-full-width'
                    placeholder='Pet name'
                    onChange={updateState}
                    value={pet}
                />
                <label>Owner's Name</label>
                <input
                    type='text'
                    name='owner'
                    className='u-full-width'
                    placeholder='Pet owner name'
                    onChange={updateState}
                    value={owner}
                />
                <label>Date</label>
                <input
                    type='date'
                    name='date'
                    className='u-full-width'
                    onChange={updateState}
                    value={date}
                />
                <label>Time</label>
                <input
                    type='time'
                    name='time'
                    className='u-full-width'
                    onChange={updateState}
                    value={time}
                />
                <label>Symptoms</label>
                <textarea
                    className='u-full-width'
                    name='symptoms'
                    onChange={updateState}
                    value={symptoms}
                ></textarea>

                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Add appointment</button>
            </form>

        </Fragment>
    );
}

export default Form;