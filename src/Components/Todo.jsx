import React from 'react';
import '../scss/Components/_todo.scss';

const Todo = ({ todo, id, onChecked, onDelete }) => {
    const check = () => {
        console.log(id);
        return onChecked(id);
    }
    const deleteItem = ()=>{
        return onDelete(id);
    }
    return (
        <div className={`todo todo_${todo.state} `}>
            <div 
            className={`todo__checkmark ${todo.state==='active' ? `` : `todo__checkmark_checked`}`}
            onClick={check}></div>
            <div 
            className="todo__content"
            onClick={check}>{todo.todo}</div>
            
            <div 
            className='todo__close'
            onClick={deleteItem}></div>
        </div>
    )
}

export default Todo;
