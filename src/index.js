import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/* Para instalar React Router DOM ejecutamos en la consola 
este comando npm install react-router-dom@6 situados sobre
la carpeta de nuetro proyecto lo podemos ver reflejado en 
package.json y en node_modules, las rutas se usan para
poder hacer una app web spa, cada pagina va a ser un componente*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
