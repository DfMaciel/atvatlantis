import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rotas from './rotas/rotas';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import NavbarComponent from './componentes/navbar/navbarComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="divTotal">
        <NavbarComponent/>
        <Rotas/>
      </div>
    </BrowserRouter>
  );
}

export default App;
