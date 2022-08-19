import React, {useState} from 'react'

export const Form = ({addTodo}) => {

    const [val, setVal] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        addTodo(val);
        setVal('')
    };

    return (
        <form className="todo-form" onSubmit={submitHandler}>
            <div className="todo-form__block">
                <textarea
                    required
                    placeholder="введите задачу"
                    maxLength={240}
                    onChange={event => setVal(event.target.value)}
                    value={val}
                    rows={3}
                    cols={80}
                    className="todo-form__textarea"
                >
                </textarea>
                <button type="submit" className="button form-button">Добавить задачу</button>
            </div>
        </form>
    )
};