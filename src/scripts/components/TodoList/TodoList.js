import React, { useState } from 'react'
import TodoForm from "./TodoForm"
import ListItem from "./ListItem"
import { Alert } from 'antd'
import mizuConfig from "../../config/mizu-config"

const tasks = [
    { name: "task 1", done: false },
    { name: "task 2", done: false },
    { name: "task 3", done: true  },
]

export default function TodoList() {
    const initList = JSON.parse(localStorage.getItem('todoList'))
    const [todoList, setTodoList] = useState(initList || tasks)
    const [inputValue, setInputValue] = useState("")
    const [visible, setVisible] = useState(false)

    //
    const _updateLocalStorage = (newTodoList) => {
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
    }

    //
    const _handleSubmit = e => {
        e.preventDefault()
        if (inputValue === "") { setVisible(true); return false }

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
        else if (type === "reset") {
            newTodoList[index].done = false
            _updateLocalStorage(newTodoList)
        }
        return setTodoList(newTodoList)
    }

    // Antd Alert
    const _handleClose = () => {
        setVisible(false)
    }

    //
    return (
        <div className="mizu-todolist">
            {
                visible ? (
                    <Alert
                        message = "Task name is required."
                        type = "warning"
                        closable
                        afterClose = { _handleClose }
                    />
                ) : null
            }
            <div className="todo-head">{ mizuConfig["todoListTitle"] }</div>
            <TodoForm
                onSubmit = { _handleSubmit }
                value = { inputValue }
                onChange = { e => setInputValue(e.target.value) }
            />
            <div className="todo-content">
                <ul>
                    {todoList.map((todo, index) => (
                        <ListItem
                            key = { index }
                            todo = { todo }
                            remove = {() => _handleClick({ type: "delete", index })}
                            completed = {() => _handleClick({ type: "completed", index })}
                            reset = {() => _handleClick({ type: "reset", index })}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}