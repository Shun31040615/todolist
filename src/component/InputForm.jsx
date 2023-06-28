import React, { Component, useEffectc, useState, usecall } from "react";



export const InputForm = ({todotext, setTodotext}) =>{
    const [submit, setSubmit] = useState([]);
    
    const HandleSubmit = (e) =>{
        e.preventDefault();
        console.log("submit:",submit)
        setTodotext([
            ...todotext,
            {
                id:todotext.length,
                text: submit,
                completed : false
            }
        ]
            
        );
        console.log("todotext;",todotext)
        setSubmit("")
    }

    const ChangeInput = (e) =>{
        setSubmit([e.target.value])
        
        
    }

    return(
        <div>
            <header>
                 <form onSubmit = {HandleSubmit}>
                    <input type="text" onChange = {ChangeInput} value={submit} />
                    <button>あいう</button>
                 </form>
            </header>

        </div>
    )
}