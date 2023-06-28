import React from "react";
import {Todo} from "./Todo";

export const TodoList = (props) =>{
    return(
        <div>
            <header>
                {(props.todotext).map((task,index)  => {
                return<Todo todotext = {props.todotext} text = {task.text} id = {task.id} key = {index.toString()} setTodotext= {props.setTodotext} complete = {task.completed}/>
                })}
                
            </header>
        </div>
    )
}