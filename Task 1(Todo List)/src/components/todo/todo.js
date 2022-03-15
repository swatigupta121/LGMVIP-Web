import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsCheck2All } from 'react-icons/bs'
import './todo.css'

export default function Todo({items, completedItem, removeItem}) {


    return (
        items.map((item, index) => (
            <div className={item.isComplete ? 'complete task-div' : 'task-div'} key={index}>
                <div className='item-text'> {item.text} </div>
                <div className='icons' key={item.id}>
                    <BsCheck2All size={20} className={item.isComplete?'hide':'tick'} onClick={() => {completedItem(item.id) }}></BsCheck2All>
                    <AiFillDelete size={20} className='item-delete' onClick={() => {removeItem(item.id) }}></AiFillDelete>
                </div>
            </div>
    )) 
        // <div></div>
    )
}
