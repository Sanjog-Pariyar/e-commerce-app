import './auth.css'
import { useState } from 'react';
import { auth, googleProvider } from '../../config/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const verifyUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/app')
        } catch (err) {
            console.error(err)
        }
    }

    const googleLogIn = async() => {
        try {
            await signInWithPopup(auth, googleProvider)
            navigate('/app')
        } catch (err) {
            console.error(err)
        }
    }


    return (
    <div className="container">
        <h1>Login</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="e-mail">Email</label>
            <input 
                type="email" 
                name="id" 
                id="e-mail" 
                value={email}
                required 
                onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                required 
                onChange={(e) => setPassword(e.target.value)}/>
            <button 
                className="login-btn" 
                type="submit" 
                onClick={verifyUser}>
                    Login
            </button>
        </form>
        <button onClick={googleLogIn}>Sign in using Google</button>
        <button className='register-btn'>
            <Link to={'/register'}>Register</Link>
        </button>
    </div>
    );
};

export default Auth;