import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

 const DUMMY_EXPENCESES = [
   {
      id: '1',
      date: new Date('March 23, 2024'),
      title: 'Car Insurance',
      price: 294.35
    },
   {
      id: '2',
      date: new Date('April 23, 2024'),
      title: 'Home Insurance',
      price: 300.35
    },
   {
      id: '3',
      date: new Date('May 23, 2024'),
      title: 'Room Things',
      price: 200.35
    },
   {
      id: '4',
      date: new Date('June 23, 2024'),
      title: 'Garden things',
      price: 545.35
    },
   {
      id: '5',
      date: new Date('June 23, 2022'),
      title: 'Garden things1',
      price: 777.35
    },
   {
     id: '6',
      date: new Date('June 23, 2021'),
      title: 'Garden things2',
      price: 799.35
    },
  ]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENCESES)
 
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.cloneElement(Expenses, { expenses: expenses }))

  const AddNewExpenseHandler = (newData) => { 
    console.log(newData)
    const formattedData = {...newData, price: +newData.price, date: new Date(newData.date)}
    setExpenses((prev) => [formattedData, ...prev])
  }
  console.log(expenses)
  return (
       <div>
      <NewExpense onAddExpense={ AddNewExpenseHandler } />
      <Expenses expenses={ expenses } />
    </div>
  );
}

export default App;
