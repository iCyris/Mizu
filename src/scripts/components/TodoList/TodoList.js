import React, { useState } from 'react'
import TodoForm from "./TodoForm"
import ListItem from "./ListItem"

const tasks = [
    { name: "task 1", done: false },
    { name: "task 2", done: false },
    { name: "task 3", done: true  },
]

export default function TodoList() {
    const initList = JSON.parse(localStorage.getItem('todoList'))
    const [todoList, setTodoList] = useState(initList || tasks)
    const [inputValue, setInputValue] = useState("")

    //
    const _updateLocalStorage = (newTodoList) => {
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
    }

    //
    const _handleSubmit = e => {
        e.preventDefault()
        if (inputValue === "") { return alert("Task name is required.") }

        const newTodoList = [...todoList]

        newTodoList.push({ name: inputValue, done: false })
        setTodoList(newTodoList)
        _updateLocalStorage(newTodoList)
        setInputValue("")
    }

    //
    const _handleClick = ({ type, index }) => {
        const newTodoList = [...todoList]

        if (type === "completed") {
            newTodoList[index].done = true
            _updateLocalStorage(newTodoList)
        }
        else if (type === "delete") {
            newTodoList.splice(index, 1)
            _updateLocalStorage(newTodoList)
        }
        return setTodoList(newTodoList)
    }

    //
    return (
        <div className="mizu-todolist">
            <div className="head">Todo List</div>
            <TodoForm
                onSubmit = { _handleSubmit }
                value = { inputValue }
                onChange = { e => setInputValue(e.target.value) }
            />
            <ul>
                {todoList.map((todo, index) => (
                    <ListItem
                        key = { index }
                        todo = { todo }
                        remove = {() => _handleClick({ type: "delete", index })}
                        completed = {() => _handleClick({ type: "completed", index })}
                    />
                ))}
            </ul>
        </div>
    )
}