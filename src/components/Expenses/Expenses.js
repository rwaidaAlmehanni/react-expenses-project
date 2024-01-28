import { useEffect, useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'
import './Expenses.css'

function Expenses({ expenses }) { 
    const [selectedYear, setSelectedYear] = useState(2024)
    const [filteredExpenses, setFilteredExpenses] = useState(expenses)

    useEffect(() => { 
        const newList = expenses.filter((ex) => new Date(ex.date).getFullYear() === +selectedYear)
        setFilteredExpenses(newList) 
    }, [selectedYear, expenses])

   
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter setSelectedYear={setSelectedYear} />
                <ExpensesChart expenses={ filteredExpenses } />
                <ExpensesList items={ filteredExpenses } />
          </Card>
        </div>
    )

}
export default Expenses