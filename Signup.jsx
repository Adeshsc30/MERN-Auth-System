import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3003/register',{name, email, password})
        .then(result=> {console.log(result)
                        navigate('/login')
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
      <h1>Regsiter</h1>
      <form onSubmit={handleSubmit}>
        <h5>Name:</h5>
        <input type="text" onChange={(e)=>setName(e.target.value)} />
        <h5>Email:</h5>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} />
        <h5>Password:</h5>
        <input type="text" onChange={(e)=>setPassword(e.target.value)} />
        <br />
        <br />
        <button>Register</button>
      </form>
        <h5>Already have an account</h5>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Signup
