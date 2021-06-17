import Cookies from "js-cookie";
import React, { useState } from "react";
import { login } from "../../api/auth";
import Router from 'next/router';
import Spinner from "../../components/Spinner/Spinner";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors] = useState({});
  const [loading,setLoading] = useState(false);


  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleSubmit= async(event)=>{
  event.preventDefault();
  let err = {}
  if(password.length<4 || password.length>15){
    err={password:'Minimum password length is 4 and maximum is 15'}
    setErrors(err)
  }
  const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!username.match(emailRegexp)){
      setErrors({
        ...err,
        email:'Invalid Email'})
      return 
  }
  try{
    setLoading(true)
  let payload={
     "email":btoa(username),
     "password":btoa(password)
    }
    const response = await login(payload);
      Cookies.set('user',JSON.stringify(response.data))
      Router.push('/')
    
    }
    catch(e){
      setErrors({common:e.response.data.error[0].msg})
         setLoading(false)
    }
  
   
  }
  return (
    <div className="Login">
      {loading&&<Spinner />}
     <div id="container">
      <div onFocus={()=>setErrors({})} className="form-wrap">
        <div className="log">
         <img src="/logo/athena.png" />
        </div>
       
        <h1 className='tle'>Learn Like Never Before</h1>
        <form>
       
          <div className="form-group">
            {/* <label for="email">Email</label> */}
            <input placeholder="Email"  autoFocus
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} id="username" />
            <p className="error">{errors.email}</p>
          </div>
          <div className="form-group">
            {/* <label for="password">Password</label> */}
            <input 
             placeholder="Password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password" />
            <p className="error">{errors.password}</p>
            
          </div>
            <p className="error">{errors.common}</p>

        
          <footer>
          <div onClick={handleSubmit} type="submit" className="btn">Login</div>
        </footer>
        </form>
      </div>
      </div>


      <style jsx>
        {
          `
          
   
      .form-wrap {
        background: rgb(255, 255, 255);
        padding: 15px 25px;
        color: #3C88DC;
      }
      .error{color:red};
      .form-wrap h1,
      .form-wrap p {
        text-align: center;
      }
      .tle{
            font-size: 24px;
            padding-bottom: 20px;
      }
      .log{
    justify-content: center;
    display: flex;
    align-items: center;
      }
      .log img{
        width:86px;
      }
      .form-wrap .form-group {
        margin-top: 15px;
      }

      .form-wrap .form-group label {
        display: block;
        color: #3C88DC;
      }

      .form-wrap .form-group input {
        width: 100%;
        padding: 10px;
            border: none;
    border-bottom: #3C88DC 2px solid;

      }
      .form-group input ::placeholder {
  color: #3C88DC ;
  text-transform:uppercase;
  opacity: 1; 
}

      .btn {
        /* position:absolute;
        bottom:0; */
        position:absolute;
        bottom: 0%;
        right:0%;
        left:0%;
        display: block;
        width: 100%;
        height: 15%;
        padding: 10px;
        margin-top: 20px;
        background: #3C88DC;
        color: #fff;
        cursor: pointer;
            justify-content: center;
    display: flex;
    align-items: center;
    font-size: 24px;
    text-transform:uppercase;
      }

      .form-wrap button:hover {
        background: #3C88DC
      }

      .form-wrap .bottom-text {
        font-size: 13px;
        margin-top: 20px;
      }

      footer {
        text-align: center;
        margin-top: 10px;
      }

      footer a {
        color:#49c1a2
      }
          `
        }
      </style>
    </div>
  );
}