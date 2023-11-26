import { useState } from 'react';
import './LoginForm.css'

const LoginForm = () => {

    const [isPassword, setisPassword ]=useState(false)
    const togglePassVisivility=()=>{
        setisPassword(!isPassword)
    }

    const handleFormSubmit = (e)=>{
        e.preventDefault()
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleFormSubmit} action="">
                <div className='user-area'>
                    <span>User Name: </span>
                    <input className='input' type="text" name="" id="" />
                </div>
                <div>
                    <span>Password: </span>
                    <input className='input' type={isPassword? 'text':'password'} name="" id="" />
                    <button className='toggle-btn-pass' onClick={togglePassVisivility}>{
                        isPassword? 'Hide':'Show'
                    }</button>
                </div>
                <div className='login-button'>
                    <button  type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;