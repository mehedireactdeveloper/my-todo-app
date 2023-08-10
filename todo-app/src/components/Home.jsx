import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

import Users from "./Users"
import NewUser from './NewUser'
import "./style.css"



const Home = () => {

  const [users, setUsers] = useState([])
 
  const handleUsers = (user) =>{
    setUsers(
      (prevUser) =>{
        return [...prevUser, {id: uuidv4(), user}]
      }
    ) 
}

   const handleRemoveTodo = (id) =>{
     const filteredUsers = users.filter( (user) => user.id !==id )
     setUsers(filteredUsers)

   }
  
  return (
    <div className='home'>
      <h1>User Management App</h1>
       <NewUser   onAddUser={handleUsers}/>
       <Users users={users} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home

