import React, { useContext } from 'react'
import {FirstName, LastName} from '../App'

export default function CompC(props) {

    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    
  return (
    <div>
        <hr />
        <h3>useContext Hook Demo</h3>
        <h1>My Name is {fname} {lname}</h1>
        <hr />
        <h3>displayed name using prop drilling</h3>
        <h1>{props.name}</h1>
    </div>
  )
}
