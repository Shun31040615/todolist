import React from "react"

export const Todo = (props) =>{
    const handledelete = () => {
        const texttodos = props.todotext
        console.log("texttodos",texttodos)
        props.setTodotext(props.todotext.filter((task) => task.id !== props.id));
        
    }
    

    const endTodo = () =>{
        props.setTodotext((props.todotext).map((task)  => {
            if(task.id === props.id){
                console.log(task)
            return{
                ...task,
                completed:true,
            };
        }
            return task;
    }))
    }

    return(
        <div className = {props.complete ? "completed" :""}>
            <h1>{props.text}</h1>
            <button onClick = {endTodo}>終わった</button>
            <button onClick = {handledelete}>削除</button>

        </div>
    )
}