import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    // const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSend=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3002/login',{email, password})
        .then(result=> {console.log(result)
                        if(result.data==="Sucess"){
                        navigate('/')}
        })
        .catch(error=>console.log(error))
    }
  return (
    <div>
      <h1>Regsiter</h1>
      <form onSubmit={handleSend}>
        {/* <h5>Name:</h5>
        <input type="text" onChange={(e)=> setName(e.target.value)} /> */}
        <h5>Email:</h5>
        <input type="text" onChange={(e)=> setEmail(e.target.value)} />
        <h5>Password:</h5>
        <input type="text" onChange={(e)=> setPassword(e.target.value)} />
        <br /><br />
        <button>Login</button>
     </form>
    </div>
  )
}

export default Login
