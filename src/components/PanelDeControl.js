import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

/* CLASE 8: Navegación interna dentro del componente */

export const PanelDeControl = () => {
  return (
    <div>
        <h1>PanelDeControl</h1>    
        <p>Elige una de estas opciones</p>
        {/* Para que los enlaces sean SPA tenemos que usar NavLink y atributo to*/}
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/crear-articulos'>Crear articulos</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/gestion-usuarios'>Gestion usuarios</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/acerca-de'>Acerca de</NavLink>
                </li>
            </ul>
        </nav>

        <div>
            {/* Quiero cargar aqui los componentes de las subrutas usamos el componente
                <Outlet /> que lo que va a hacer es cargar los componentes el componente 
                de la subruta que se indica en RouterPrincipal*/}

                <Outlet />
        </div>

    </div>
  )
}
