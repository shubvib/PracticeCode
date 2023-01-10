import React, { useContext } from 'react'
import {FirstName, LastName} from '../App'

export default function CompC() {

    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    
  return (
    <div>
        <hr />
        <h3>useContext Hook Demo</h3>
        <h1>My Name is {fname} {lname}</h1>
    </div>
  )
}
