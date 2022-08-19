import React, {useState} from 'react'
import {TaskItems} from "../components/taskitems";
import {Form} from "../components/form";

export const Tasks = () => {

    let todos = [
        {
            text: "Default text 1",
            item_date: new Date(2022, 7, 13),
            isCompleted: false
        },
        {
            text: "Default text 2",
            item_date: new Date(2022, 11, 31),
            isCompleted: false
        },
        {
            text: "Defaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’sDefaulttextwith240char’s",
            item_date: new Date(1970, 0, 1)
        }
    ];

    const addTodo = (text) => {

        const date_now = new Date();

        setTodos([
            ...todo_items,
            {
                text: text,
                item_date: new Date(date_now.setDate(date_now.getDate() + 7)),
                isCompleted: false
            }
        ])
    };

    const removeTodo = index => {
        setTodos(todo_items.filter(item => item !== todo_items[index]))
    };

    const [todo_items, setTodos] = useState(todos);

    return (
        <div className="home-block task-block">
            <div className="header-block">
                <h1>Tasks</h1>
                <button className="button" onClick={() => setTodos([])}>Очистить список задач</button>
            </div>
            <Form addTodo={addTodo}/>
            <TaskItems todos={todo_items} removeTodo={removeTodo}/>
        </div>
    )
};