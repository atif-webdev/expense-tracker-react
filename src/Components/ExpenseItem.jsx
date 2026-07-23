import React from "react";

function ExpenseItem({item, deletefunc}) {
  return (
    <>
      <div style={{padding: '20px'}}>
        <span style={{padding:'10px'}}>{item.title}</span>
        <span style={{padding:'10px'}}>₹{item.amount}</span>
        <button onClick={()=> deletefunc(item.id)}>Delete</button>
      </div>
    </>
  );
}

export default ExpenseItem;
