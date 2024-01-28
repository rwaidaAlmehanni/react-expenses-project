import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) { 
    const { date, title, price } = props
    console.log(props.title)
    return (
        <li>
          <Card className="expense-item">
              <ExpenseDate date={ props.date } />
              <div className='expense-item__description'>
                  <h2>{ title }</h2>
                  <div className='expense-item__price'>${ price }</div>
               </div>
            </Card>
        </li>
    )
}
export default ExpenseItem