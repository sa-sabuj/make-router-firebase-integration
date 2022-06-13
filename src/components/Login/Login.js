import React from 'react';

const Login = () => {
    return (
        <div>
            <h2>Please login</h2>
            <div style={{ margin: '15px' }}>
                <button>Google Signin</button>
            </div>
            <form>
                <input type="email" name="" placeholder='Enter your email' /> <br />
                <input type="password" name="" placeholder='Enter your password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;