import React from 'react'
import {Link} from 'react-router-dom'

/* CLASE 3: Con link podemos hacer enlaces que no recarguen la pagina (reactivos)*/ 

export const Error = () => {
  return (
        <>
            <h1>Error 404</h1>
            <strong>La pagina no existe</strong>
            <br/>
            <Link 
                to="/inicio">
                Volver al inicio
            </Link>
        </>
  )
}
