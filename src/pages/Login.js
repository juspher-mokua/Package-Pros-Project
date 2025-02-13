import React, { useState } from 'react'
import '../components/styles/Login.css'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                < label htmlFor="email">E-mail</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                < label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an accout? Register Here</button>
        </div>
    )
}
