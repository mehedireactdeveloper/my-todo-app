import React from 'react'

import User from "./User"




const Users = ({users, onRemoveTodo}) => {


 
  return (
       <section>
         {users.map( (user) => <User user={user.user} key={user.id} id={user.id} onRemoveTodo={onRemoveTodo} /> )}
       </section>
  )
}

export default Users

