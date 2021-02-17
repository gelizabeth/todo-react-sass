import React from 'react';
import '../scss/Components/_todo.scss';

const Todo = ({ todo, id, onChecked }) => {
    const check = () => {
        if(todo.state === 'active'){
            console.log(id);
            return onChecked(id);
        } 
    }
    return (
        <div className={`todo todo_${todo.state} `}
            onClick={check}>
            <div className={`todo__checkmark ${todo.state==='active' ? `` : `todo__checkmark_checked`}`}></div>
            <div className="todo__content">{todo.todo}</div>
            
            <div className='todo__close'></div>
        </div>
    )
}

export default Todo;
