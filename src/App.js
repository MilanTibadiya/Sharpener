import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      location: "loc-abc",
      amount: 290.9,
      date: new Date(2023, 1, 12),
    },
    {
      id: "e2",
      title: "Udemy Course",
      location: "loc-xyz",
      amount: 30,
      date: new Date(2023, 1, 1),
    },
    {
      id: "e3",
      title: "New Desk(wooden)",
      location: "loc-pqr",
      amount: 100,
      date: new Date(2022, 12, 12),
    },
    {
      id: "e4",
      title: "Fuel",
      location: "loc-abc",
      amount: 120,
      date: new Date(2023, 1, 2),
    },
  ];
  //just - Task for use of loop 
  let a =[]
  for(var i=0; i<10; i++){
    a.push(<div className="expense-item">
    <div>2023-02-11</div>
    <div className="expense-item__description">
        <h2>Car Insurance</h2> 
        <div className="expense-item__price">$120</div>
    </div>
  </div>);
  }
  
  return (
    <div>
      {a}
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        location={expenses[0].location}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        location={expenses[1].location}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        location={expenses[2].location}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        location={expenses[3].location}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
