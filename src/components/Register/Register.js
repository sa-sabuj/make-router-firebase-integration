import './Register.css'
import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please register</h2>
            <form>
                <input type="text" name="" placeholder='Your name' />
                <br />
                <input type="email" name="" placeholder='Enter your email' /> <br />
                <input type="password" name="" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;