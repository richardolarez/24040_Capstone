import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Menu from './pages/Menu';
import Login from './pages/Login';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<App/>}>
            {/* {this.state.loggenIn ? <Menu /> : <Login onLogin={this.handleLogin} />} */}
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/menu" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);