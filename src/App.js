import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { About } from "./MyComponents/About";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
  //  console.log("adding todo to list", title, desc);

    let sno;

    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    //for adding todos
    setTodos([...todos, myTodo]);
    //console.log(myTodo);
  };

  const onDelete = (todo) => {
    //console.log("deleted current todo ", todo);

    //for deleting todos
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
                       }, [todos]);





return ( 
  <> 
  <Router>
    <Header title="My Todos List" searchBar={false} /> 
    <Routes>

    <Route exact path="/"  element={<>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} /> 
          </>}>
         
         </Route> 

        
        <Route exact path="/about"  element={<About/>}>
         
        </Route> 
      </Routes> 
    <Footer />
  </Router>
  </>
);
}

export default App;
