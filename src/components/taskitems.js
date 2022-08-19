import React from 'react'

export const TaskItems = ({todos, removeTodo}) => {

    if (!todos.length) return <p>Список пуст!</p>;

    return <ul className="todo-list">
        {todos.map((todo_item, i) => (
            <li key={i} className="todo-item">
                <div className="todo-item__block">
                    <span>{todo_item.item_date.toLocaleDateString()}: </span>
                    <span className={todo_item.item_date < new Date() ? "todo-item__text_red": ''}>{todo_item.text}</span>
                </div>
                <button className="button todo-item__button" onClick={() => removeTodo(i)}>Выполнено</button>
            </li>
        ))}
    </ul>
};