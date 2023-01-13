import React from "react";
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 290.9,
      date: new Date(2023, 1, 12),
    },
    {
      id: "e2",
      title: "Udemy Course",
      amount: 30,
      date: new Date(2023, 1, 1),
    },
    {
      id: "e3",
      title: "New Desk(wooden)",
      amount: 100,
      date: new Date(2022, 12, 12),
    },
    {
      id: "e4",
      title: "Fuel",
      amount: 120,
      date: new Date(2023, 1, 2),
    }
  ];
  //just - Task for use of loopp
  // let a =[]
  // for(var i=0; i<10; i++){
  //   a.push(<div className="expense-item">
  //   <div>2023-02-11</div>
  //   <div className="expense-item__description">
  //       <h2>Car Insurance</h2> 
  //       <div className="expense-item__price">$120</div>
  //   </div>
  // </div>);
  // }
  
  return (
    <div>
      {/* {a} */}
      <h2>Let's get started!</h2>
      <Expenses item={expenses}/>
    </div>
  );
}

export default App;
