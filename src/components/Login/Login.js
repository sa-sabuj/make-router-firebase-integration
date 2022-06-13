import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';


const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch()
    }
    return (
        <div>
            <h2>Please login</h2>
            <div style={{ margin: '15px' }}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
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