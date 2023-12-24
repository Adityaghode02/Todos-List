import React from 'react';
import TodoItem from "./TodoItem";


export default function Todos(props) {
 let mystyle = {
    minHeight:"70vh"
  }

  return (
    <>
    <div className="container my-3" style={mystyle}>
      <div className = "my-3 py-2" >Todos List</div>

      {props.todos.length===0 ? <h2>"There are No todos to Display"</h2>:
      props.todos.map((todo)=>{
        return (
        <TodoItem todo = {todo}   key = {todo.sno}   onDelete = {props.onDelete} />  
        )
      })
    }
    </div>
    <hr />
    </>
  )
}
