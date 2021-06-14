import './index.css';
import {Routes} from './Route/route';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import {GlobalProvider,GlobalContext} from './Contenxt/GlobalContext';
import React,{useContext} from 'react';

function App() {

  axios.default.withCredentials = true;


  return (
    <GlobalProvider >
       <Routes />
    </GlobalProvider>
  );
}

export default App;
