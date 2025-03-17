// create login form component

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form () {
    const navigate = useNavigate();
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const hasUpperCase = /[A-Z]/.test(password);
    const isMinLength = password.length >= 8;
    const specialChar = /[!@#$%^&*(),.?"":{}|<>]/.test(password)
    const hasNumber = /[0-9]/.test(password);

    const handleLogin = () => {
        if (isMinLength && hasUpperCase && specialChar && hasNumber){
            if (email === 'admin@gmail.com' && password === '*Admin123') {
                alert('Login successful');
                navigate(`/dashboard`);
            } else {
                alert ('Login Failed')
            }
        }else {
            alert('Password not match with criteria');
        }
    }

    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px #ccc' }}>
                <label htmlFor="email" style={{ marginBottom: '10px' }}>Email:</label>
                <input type="email" id="email" name="email" required style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} onChange={handleUsername}/>
                <label htmlFor="password" style={{ marginBottom: '10px' }}>Password:</label>
                <input type="password" id="password" name="password" required style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} onChange={handlePassword}/>
                <input type="submit" value="Login" style={{ padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }} onClick={handleLogin}/>
            </form>
        </div>
    )
}

export default Form;