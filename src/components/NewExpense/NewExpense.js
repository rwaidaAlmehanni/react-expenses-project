import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ onAddExpense }) => { 
    const onSaveData = (data) => { 
        const newDate = {
            ...data,
            id: Math.random().toString()
        }
        onAddExpense(newDate)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveData={ onSaveData } />
        </div>
    )
}
export default NewExpense