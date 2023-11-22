import {React} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import './pages/style.css';
import Menu from './pages/Menu';
import { ReactDOM } from 'react';


function App() {

    return (
      <Login/>
    );
}

export default App;