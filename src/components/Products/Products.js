import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import './Products.css'

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>This is Products</h1>
            <h2>Current user: {user ? user.displayName : "please Log In"}</h2>
        </div>
    );
};

export default Products;