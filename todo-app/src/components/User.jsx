
import React from 'react'

const User = ({user,id, onRemoveTodo}) => {

  const handleDelete = (id) =>{
    onRemoveTodo(id)
  }

  return (
    <article>
       <h2>{user.name}</h2>
       <h4>{user.email}</h4>
       <h3>{user.institute}</h3>
       <button onClick={()=>{handleDelete(id)}}>Delete User</button>
    </article>
  )
}

export default User
