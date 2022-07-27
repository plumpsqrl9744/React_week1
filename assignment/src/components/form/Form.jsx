import React, {useState} from 'react';
import "./style.css";

function Form ({setTodos, todos}) {
    const firstTodo ={
        id: 0,
        title: "",
        contens: "",
        isDone: false,
    };

    const [todo, setTodo] =useState(firstTodo);

    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setTodo({...todo,[name]: value, id: todos.length +1});
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setTodos([...todos,todo]);
        setTodo(firstTodo);
    }

    return (
        <form onSubmit={onSubmitHandler} className="add-todo"> 
            <div className="input-group">
                <label className="form-label">제목</label>
                <input type="text" name="title" value={todo.title} className="input-title" onChange={onChangeHandler}/>
                <label className="form-label">내용</label>
                <input type="text" name="contens" value={todo.contens} className="input-contens" onChange={onChangeHandler}/>
            </div>
            <button className="add-button">추가하기</button>
        </form>
    )
}
export default Form; 