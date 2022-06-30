import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <br />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Allready Have an Account? <Link onClick={navigateLogin} to="/login" className='text-decoration-none'>Login</Link></p>
        </div>
    );
};

export default Register;