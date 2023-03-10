
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

    return ( 
        <Fragment>
            <h2>Create appointment</h2>
            
            <form>
                <label>Pet Name</label>
                <input
                    type='text'
                    name='pet'
                    className='u-full-width'
                    placeholder='Pet name'
                    onChange={updateState}
                />
                <label>Owner's Name</label>
                <input
                    type='text'
                    name='owner'
                    className='u-full-width'
                    placeholder='Pet owner name'
                    onChange={updateState}
                />
                <label>Date</label>
                <input
                    type='date'
                    name='date'
                    className='u-full-width'
                    onChange={updateState}
                />
                <label>Time</label>
                <input
                    type='time'
                    name='time'
                    className='u-full-width'
                    onChange={updateState}
                />
                <label>Symptoms</label>
                <textarea
                    className='u-full-width'
                    name='symptoms'
                    onChange={updateState}
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