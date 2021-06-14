import React,{useContext} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {Home , Profile, Login} from './../Page/index';  
import {Protectedroute} from './protectedroute';
import {Navbar} from './../Component/index';
import {GlobalContext} from './../Contenxt/GlobalContext';
import {Guestroutes} from './guestroutes';

export const Routes = () => {
   
    const { authState : {
        auth:{
            isLogin
        }
    } } = useContext(GlobalContext);

    console.log("Route ",isLogin)

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Guestroutes exact path='/login' component={Login} isAuth={isLogin} />
                <Protectedroute exact path='/profile' component={Profile} isAuth={isLogin} />
                <Protectedroute exact path='/create-post' component={Profile} isAuth={isLogin} />
            </Switch>
        </Router>
    )
}
