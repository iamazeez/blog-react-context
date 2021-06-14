import React,{useState, useContext} from 'react';
import axios from 'axios';
import {GlobalContext} from './../Contenxt/GlobalContext';
import {login as loginAction} from './../Contenxt/Action/AuthAction';

export const Login = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [loginError,setLoginError] = useState('');

    const { authState, authDispatch} = useContext(GlobalContext);
    
    const loginUser = (e) => {
      e.preventDefault();
      if(username == '' || password == ''){
        alert('Please fill form properly');
        return;
      }
      axios.post("http://localhost:9000/login", {
        username,
        password
      }).then(res => {
        if(res.data.auth){
          localStorage.setItem('token',res.data.token);
          loginAction(res.data.token)(authDispatch);

        }else{
           setLoginError(res.data.message);
        }
      })
    }

    return (
      <div className='d-flex justify-content-center'>
            <form className='w-50'>
      <div className="mb-3 mt-3">
        <label className="form-label">Username</label>
        <input onChange={e => setUsername(e.target.value)} value={username} type="text" className="form-control" />
        <div className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
    )
}
