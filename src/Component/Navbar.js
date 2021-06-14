import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import {GlobalContext} from './../Contenxt/GlobalContext';
import {logout} from './../Contenxt/Action/AuthAction';
import axios from 'axios';

export const Navbar = () => {

  const { authState, authDispatch} = useContext(GlobalContext);

  const logoutUser = () => {
    axios.get("http://localhost:9000/logout")
    .then(res => {
        console.log(res);
        localStorage.removeItem("token");
        logout()(authDispatch);
    })
    .catch(err => console.log(err));
  }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <div className="container">
    <Link className="navbar-brand" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to='/login'>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/register'>Register</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to='/profile'>profile</Link>
        </li>
      { authState.auth.isLogin ?
        <li className="nav-item">
          <button onClick={logoutUser}>Logout</button>
        </li>
       : null } 


        
      </ul>
    </div>
  </div>
</nav>
    )
}
