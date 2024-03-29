import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ items }) => { 

    if (items.length === 0) { 
        return <h2 className="expenses-list__fallback">No Expenses Found !!</h2>
    }

    return (
        <ul className="expenses-list">
            {items.map((expense) => (
                <ExpenseItem key={expense.id} {...expense} />
            ))} 
        </ul>
    )
}
export default ExpensesList