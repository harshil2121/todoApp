import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function Signup(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleInput=(e)=>{
        setEmail(e.target.value)
    }

    const handleChange=(ep)=>{
        setPassword(ep.target.value)
    }

    const handleConfirm=(ecp)=>{
        setConfirm(ecp.target.value)
    }


    let history = useHistory() 
    
    const handleSubmit=(e)=>{
        if(confirm !== password){
            return alert('password is do not match')
        }
        history.push('/Signin')
        
    }

    return(
        <div style={{textAlign:'center'}}>
            <h2>Signup</h2><br />
            <form>
                <div style={{marginTop:'5px'}}>

                    Email: <input type='text' id='email' placeholder=' email..' onChange={e=>handleInput(e)} /><br />
                    Password: <input type='password' placeholder=' password..' onChange={ep=>handleChange(ep)} /> <br />
                    Confirm Password: <input type='password' placeholder=' confirm password..' onChange={ecp=>handleConfirm(ecp)} /> <br /><br />

                    <button onClick={e=>handleSubmit(e)} > Signup </button>
                </div>
            </form>
        </div>
    )
}
export default Signup;