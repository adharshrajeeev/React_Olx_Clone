import React from 'react';
import { useState,useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'


function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {firebase} = useContext(FirebaseContext);
    const history=useHistory()

    const handleLogin=(e)=>{
      e.preventDefault()
      if(email=="" || password == ""){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill the componendts!',
          
        })
      }else{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
          history.push('/')
        }).catch((error)=>{
          Swal.fire(
            'Not Registered?',
            `${error.message}`,
            'question'
          )
        })
      }
     
    }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>{
          history.push('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
