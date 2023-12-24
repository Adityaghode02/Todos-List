import React from 'react';

export default function TodoItem({todo, onDelete}) {
  
  return (
    <div>
    <h1>{todo.title}</h1>
     <h3>{todo.desc}</h3>
      <button className="btn btn-sm btn-primary" onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr />
    </div>
  );
}