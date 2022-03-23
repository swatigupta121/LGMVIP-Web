import './App.css';
import img from "./images/hotpoint.png"
import Userpage from './userpage/userpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [active,setActive] = useState("No");

  const [user, setUser] = useState([]);

  const loadUsers = async () => {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonresponse = await response.json();
      setUser(jsonresponse.data);
      console.log(jsonresponse.data);
      console.log(user);
  }

  return (
    <>
    <div className="App">
        <div className='bg'></div>
        <div className='logo-img'>
          <img src={img} alt="error"></img>
        </div>
        {/* <div className='user-button'> */}
        {/* <button type="submit" onClick={() => setActive("Yes")}>Get Users</button>
        {active === "Yes" && <Userpage />} */}
        {/* </div> */}
        <Userpage />
      </div>
    </>

  );
}

export default App;
