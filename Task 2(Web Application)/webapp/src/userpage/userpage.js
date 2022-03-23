import React from 'react'
import { useState } from 'react';
import Card from './card/card';
import './userpage.css'
import * as ReactBootStrap from 'react-bootstrap';

export default function Userpage() {

    const [user, setUser] = useState([]);
    const [flag, setFlag] = useState("");
    const [vis, setVis] = useState(true);

    const loadUsers = async () => {
        setFlag("wait");
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        setUser(jsonresponse.data);
        console.log(jsonresponse.data);
        console.log(user);
        setFlag("yes");
    }

    const handleSubmit = (event) => {
        setVis(false);
        setTimeout(() => {
            loadUsers();
         }, 1000)
         setFlag("wait");
    }

    return (
        <>
            <div className='page'>
                <button className={"sure " + (vis === true ? '' : 'click')} type="submit" onClick={handleSubmit}>Get Users</button>
                {/* {loadUsers}
                <h1>{user}</h1>
                // {console.log(user)} */}
                {flag==='yes' ? (user.map(({ id, first_name, last_name, email, avatar }) => (
                    <Card id={id} first_name={first_name} last_name={last_name} email={email} avatar={avatar} />
                ))) : (flag==='wait' ? <span className='load'><ReactBootStrap.Spinner animation="grow" /></span>: null)}
                
            </div>
        </>
    )
}
