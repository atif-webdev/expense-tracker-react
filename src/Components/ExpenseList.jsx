import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expense, ondelete }) {
  if (expense.length === 0) {
    return <p>No Expenses Yet</p>;
  }
  return (
    <>
      <div>
        {expense.map((item) => (
          <ExpenseItem key={item.id} item={item} deletefunc={ondelete} />
        ))}
      </div>
    </>
  );
}

export default ExpenseList;
