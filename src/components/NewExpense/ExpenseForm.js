import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveData }) => { 
    const [userDate, setUserDate] = useState({ title: '', price: '', date: '' })
   
    const onChangeHandler = (event, key) => { 
        setUserDate((prev) => ({
            ...prev,
            [key]: event.target.value
        }))

    }

    const submitHandler = (e) => { 
        //it is a default function used to stop the default browers behavior which
        // is reload the page when submit so this function will stop that
        e.preventDefault()
        onSaveData(userDate)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__control'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={ userDate.title } onChange={ (e) => onChangeHandler(e, 'title')}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={userDate.price} onChange={ (e) => onChangeHandler(e, 'price')} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-02-02' max='2024-02-02' value={ userDate.date } onChange={ (e) => onChangeHandler(e, 'date')} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Save</button>
               </div>
            </div> 
        </form>
    )
}
export default ExpenseForm