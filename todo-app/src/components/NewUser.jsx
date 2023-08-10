import React, { useState } from 'react'

const NewUser = (props) => {

  const [user, setUser] = useState({name: "", email:"", institute:""})
  

  const handleSubmit = (e) =>{
    e.preventDefault()
    props.onAddUser(user)
    setUser({name: "", email:"", institute:""})
  }

  const handleChange = (e) =>{
    setUser((prevUser) =>{
      return {...prevUser, [e.target.name]: e.target.value}
    })

  }






  return (
     <form onSubmit={handleSubmit}>
       <div>
         <input type="text" name='name' placeholder='Enter your Name' onChange={handleChange}/>
       </div>
       <div>
         <input type="email" name='email' placeholder='Enter your Email' onChange={handleChange}/>
       </div>
       <div>
         <input type="text" name='institute' placeholder='Enter your Institue' onChange={handleChange}/>
       </div>
       <button>Add User</button>
     </form>
  )
}

export default NewUser

