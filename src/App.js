import './App.css';
import {Title} from "./component/Title";
import {InputForm} from "./component/InputForm";
import {TodoList} from "./component/TodoList";
import React, { Component,useEffect,useState,usecall } from "react";




function App() {
  const [todotext,setTodotext] = useState([]);


  return (
    <div className="App">
      <Title/>
      <InputForm todotext = {todotext} setTodotext= {setTodotext}/>
      <TodoList todotext = {todotext} setTodotext= {setTodotext}/>


    </div>
  );
}

export default App;
