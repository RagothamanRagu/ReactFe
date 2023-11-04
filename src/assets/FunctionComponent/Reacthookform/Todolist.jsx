import React from "react"
import { useState, useId } from "react";
export default function Todolist() {
    const [input, setinput] = useState("");
    const [todolist, settodolist] = useState([

        {

            id: 1,
            task: "wake up"
        },

        {
            id: 2,
            task: "brush"
        },

        {
            id: 3,
            task: "bath"
        },

        {
            id: 4,
            task: "eat"
        },

        {
            id: 5,
            task: "sleep"
        }

    ])

    const handlechange = (e) => {

        setinput(e.target.value);
    };
    const handleAdd = () => {

        settodolist([...todolist, { id: 5, task: input }]);
        setinput("")
    };

    const handledelete = (did) => {
        const deletetodo = todolist.filter(todo => todo.id!== did);
        settodolist(deletetodo)
    };

    return (
        <div>

            <input placeholder="enter u r todo" value={input} onChange={handlechange} />

            <button onClick={handleAdd}>Add</button>

            {todolist.map((todo, index) => (

                <div key={index}>

                    <h1>{todo.task}</h1>

                    <button onClick={() => handledelete(todo.id)}>x</button>

                </div>

            ))}

        </div>

    );
}


















