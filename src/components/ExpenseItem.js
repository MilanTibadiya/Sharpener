import './ExpenseItem.css';

function ExpenseItem(probs) {
  return(
    <div className="expense-item">
    <div>{probs.date.toISOString()} <span>at {probs.location}</span></div>
    <div className="expense-item__description">
        <h2>{probs.title}</h2> 
        <div className="expense-item__price">${probs.amount}</div>
    </div>
  </div>
  );
}

export default ExpenseItem;
