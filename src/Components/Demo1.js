import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

export default function Demo1(props) {
  
  const [name, setName] = useState("enter your name");
  

  //------------ useEffect run's when component is mounted for the first time
  useEffect(() => {
    setTimeout(() => {
      alert("useEffect run afer 3 sec.");
    }, 3000);
  
  }, [])

  const handelSubmit = (event) => {
    event.preventDefault();
    document.write(name)
  }

  
  return (
    <div>
      <h1>Welcome to API Tutorial</h1>
      <p>Open Console to See Result</p>
      <form onSubmit={handelSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <input type="submit" value="submit"/>
    </form>
    </div>
  )
}
