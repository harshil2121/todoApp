import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Signin(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleInput=(e)=>{
        setEmail(e.target.value)
    }

    const handleChange=(ep)=>{
        setPassword(ep.target.value)
    }

    let history = useHistory() 
    
    const handleSubmit=()=>{
        history.push('/todolist')
    }

    return(
        <div style={{textAlign:'center'}}>
            <h2>Signin</h2><br />
            <from>
                Email: <input type='text' id='email' placeholder='email..' onChange={e=>handleInput(e)} /><br />
                Password: <input type='password' placeholder='password..' onChange={ep=>handleChange(ep)} /> <br /><br />

                <button onClick={handleSubmit}> Signin </button>
            </from>
        </div>
    )
}
export default Signin;