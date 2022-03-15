import React, { useState } from 'react'
import Todoform from '../form/todoform'
import Todo from '../todo/todo';
import './todolist.css'

export default function Todolist() {

    const [items,setItems] = useState([]);

    const addItem = item => {
        if(!item.text){
            return
        }
        const newItems = [item, ...items];
        setItems(newItems);
        console.log(items);
    }

    const removeItem = id => {
        let updatedItems = [...items].filter(task => task.id !== id)
        setItems(updatedItems)
    }

    const completedItem = id => {
        let updatedItems = items.map(item => {
            if(item.id === id)
                item.isComplete = true;
            return item;
        })
        setItems(updatedItems);
    }

    return (
        <>
            <div className='todo'>
                <div className='todo-bg'></div>
                <div className='heading'><h1>Todo List</h1></div>
                <Todoform addItem={addItem}/>
                <Todo items={items} completedItem={completedItem} removeItem={removeItem} />
            </div>
        </>
    )
}
