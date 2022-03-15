import React, { useState } from 'react'
import './todoform.css'

export default function Todoform(props) {

    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        
        event.preventDefault();
        props.addItem({
            id: Math.floor(Math.random()*1000000),
            text: input,
            isComplete: false
        })
        setInput('');
        
    }

    return (
        <form>
            <input type="text" placeholder='Add a item' value={input} name="text" onChange={handleChange}></input>
            <button type="submit" onClick={handleSubmit} className="add-button">+</button>
        </form>
    )
}
