import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import './login.css'
import {auth} from "../firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login=(event)=>{
        event.preventDefault(); //stop the refresh

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            //logged in, redirect to home page 
            history.push("/");
        })
        .catch((e)=>alert(e.message))
    };

    const register=(event)=>{
        event.preventDefault();

        auth 
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            //created a user and password,logged in, redirect to home page 

          history.push("/");
        })
        .catch((e)=>alert(e.message))
        
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className="login_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
            alt="logo"
            />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="loginButton_signin">Sign In</button>
                </form>
                <p>
                    By Signing-in you agree to Amazon's conditions of Use & sell. Please see our sign-in policy and Privacy Notice.
                </p>
                <button onClick={register} className="loginButton_register">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
