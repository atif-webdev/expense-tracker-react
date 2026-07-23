import React, { useEffect, useState } from "react";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(
    ()=>{
      const savedData = localStorage.getItem("expenses")
      return savedData ? JSON.parse(savedData) : [];
    }
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    // this expense is expenseObject from ExpenseForm
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev)=> prev.filter((item)=> item.id != id))
  };

  const TotalAmount = expenses.reduce((sum,item)=> sum + item.amount, 0)
  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <span>Total Amount: {TotalAmount}</span>
      <ExpenseList expense={expenses} ondelete={deleteExpense} />
    </>
  );
}

export default App;
