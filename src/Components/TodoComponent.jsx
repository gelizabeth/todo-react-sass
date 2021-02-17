import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import '../scss/Components/_todo-component.scss';

export const TodoComponent = () => {
    let n;
    
    
    const [state, setState] = useState('all');
    const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem('todos')));
    if (todos){
        n = todos.filter(todo => todo.state == 'active').length;
    } else 
        if(JSON.parse(window.localStorage.getItem('todos'))){
            n = JSON.parse(window.localStorage.getItem('todos')).filter(todo => todo.state == 'active').length;
        } else n = 0;

    const [showList, setShowList] = useState(todos);
    const [newTodo, setNewTodo] = useState('');
    const [itemsLeft, setItemsLeft] = useState(n);

    useEffect(() => {
        switch (state) {
            case 'active':

                return setShowList(todos.filter(todo => todo.state === 'active'));
            case 'completed':
                return setShowList(todos.filter(todo => todo.state === 'completed'));
            default: return setShowList(todos);
        }
    }, [state, todos]);

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const changeState = (event) => {
        setState(event.target.value);
    }
    const changeNewTodo = (event) => {
        setNewTodo(event.target.value);
    }
    const addTodo = (event) => {
        if (event.keyCode === 13) {
            if(todos) {
                setTodos((prev) => [...prev, { todo: newTodo, state: 'active' }]);
            } else setTodos((prev) => [{ todo: newTodo, state: 'active' }]);
            
            
            setItemsLeft((prev) => prev + 1);
            setNewTodo('');
        }
    }

    const setCompleted = (id) => {
    setTodos(todos.map((todo, index)=>{
        if(index === id){
           todo.state='completed';
        }
        return todo;
    }))
      setItemsLeft((prev) => prev - 1);
        
    }
    const clearCompleted = () => {
        setTodos((prev) => prev.filter(prev => prev.state !== 'completed'));
    }


    return (
        <div className={`todo-component`}>
            <input
                type="text"
                placeholder="Create a new todo..."
                className="todo-component__input"
                value={newTodo}
                onChange={changeNewTodo}
                onKeyUp={addTodo} />
            <div className="todo-component__list">
                {showList?.map((todo, index) =>
                    <Todo
                        todo={todo}
                        key={index}
                        id={index}
                        onChecked={setCompleted}></Todo>)}
                <div className="todo-component__list__footer">
                    <p>{itemsLeft} {itemsLeft === 1 ? `item` : `items`} left</p>
                    <div className="todo-component__buttons display-none">
                <button className={`todo-component__button ${state==='all'&&`todo-component__button_active`}`} onClick={changeState} value='all'>All</button>
                <button className={`todo-component__button ${state==='active'&&`todo-component__button_active`}`} onClick={changeState} value='active'>Active</button>
                <button className={`todo-component__button ${state==='completed'&&`todo-component__button_active`}`} onClick={changeState} value='completed'>Completed</button>
            </div>
                    <p onClick={clearCompleted}>Clear Completed</p>
                </div>
                
            </div>

            <div className="todo-component__buttons">
                <button className={`todo-component__button ${state==='all'&&`todo-component__button_active`}`} onClick={changeState} value='all'>All</button>
                <button className={`todo-component__button ${state==='active'&&`todo-component__button_active`}`} onClick={changeState} value='active'>Active</button>
                <button className={`todo-component__button ${state==='completed'&&`todo-component__button_active`}`} onClick={changeState} value='completed'>Completed</button>
            </div>
        </div>
    )
}
