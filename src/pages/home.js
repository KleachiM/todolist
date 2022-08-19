import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();

    const navigateTasks = () => {
        let d = new Date();
        console.log('now: ', d);
        console.log('week++: ', new Date(d.setDate(d.getDate() + 7)));
        navigate('/tasks')
    }

    return (
        <div className="home-block">
            <h1 className="home-h1">Менеджер задач</h1>
            <br/>
            <small className="home-text">Тестовое задание</small>
            <br/>
            <button className="button" onClick={navigateTasks}>События</button>
        </div>
    )
};
