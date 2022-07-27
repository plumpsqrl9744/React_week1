import React from 'react';
import "./style.css";

function Todo ({todo, onDeleteHanlder , onEditHandler}) {
    return (
        <div className ="todo-container">
            <div>
                <h2 className="todo-title">{todo.title}</h2>
                <div>{todo.contens}</div>
            </div>
            <div className='button-box'>
                <button className="todo-del-button" onClick = {() => onDeleteHanlder(todo.id)}>삭제</button>
                <button className="todo-done-button" onClick = {() => onEditHandler(todo.id)}>{todo.isDone ? "취소":"완료"}</button>
            </div>
        </div>
    )
}
export default Todo; 