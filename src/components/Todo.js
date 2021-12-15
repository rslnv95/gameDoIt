import React, {useState} from "react";
import {nanoid} from "nanoid";

const Todo = () => {
    const todoInitial = JSON.parse(localStorage.getItem('todoList')) || []

    const [value, setValue] = useState('')
    const [list, setList] = useState(todoInitial)

    const inputValue = (e) => {
        setValue(e.target.value)
    }

    const addTodo = () => {
        const newTodo = {
            text: value,
            id: nanoid()
        }

        if (value.trim()) {
            setList([...list, newTodo])
            localStorage.setItem('todoList', JSON.stringify([...list, newTodo]))
        }
        setValue('')
    }

    return (
        <>
            <input onChange={inputValue} value={value} type="text"/>
            <button onClick={addTodo} type='button'>Add</button>
            <ul>
                {
                    list.map(el => {
                        return <li key={el.id}>{el.text}</li>
                    })
                }
            </ul>
        </>
    )
}
export default Todo;
