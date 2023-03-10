
import React, {Fragment} from 'react'


const Form = () => {
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
                />
                <label>Owner's Name</label>
                <input
                    type='text'
                    name='owner'
                    className='u-full-width'
                    placeholder='Pet owner name'
                />
                <label>Date</label>
                <input
                    type='date'
                    name='date'
                    className='u-full-width'
                    
                />
                <label>Time</label>
                <input
                    type='time'
                    name='time'
                    className='u-full-width'
                    
                />
                <label>Symptoms</label>
                <textarea
                    className='u-full-width'
                    name='symptoms'
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