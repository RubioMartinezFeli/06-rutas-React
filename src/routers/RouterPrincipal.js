import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Inicio } from '../components/Inicio';
import { Error } from '../components/Error';
import { Persona } from '../components/Persona';
import { PanelDeControl } from '../components/PanelDeControl';
import { InicioPanel } from '../components/panel/Inicio';
import { Crea } from '../components/panel/Crea';
import { Acerca } from '../components/panel/Acerca';
import { Gestion } from '../components/panel/Gestion';

/* Importamos partes de la libreria react-router-dom*/
/* CLASE 2: Crear un menu de navegación, los enlaces del menu
   en React sehacen de una forma concreta para que la pagina no recargue
   tenemos que importar NavLink de react-router-dom,
   donde pondriamos <a href=""></a> (dentro de cada <li>)
   vamos a poner ahora <NavLink to=""><NavLink/>
   */

/* CLASE 4: Pasar parametros a la URL 
  path='/Persona/:nombre' => hacemos que a la url /Persona/ pida un nombre*/

/* CLASE 6: Redireccionar con el router de React para ello creamos una ruta(Router)
   pero importando el componente Navigate*/

/* CLASE 7: Redireccionar a traves del Hook useNavigate */

/* CLASE 8: Subrutas o rutas anidadas: nos permite organizar las 
   rutas de manera optima y podemos tener un componente dentro
    de otro y que funcione mediante un router*/

export const RouterPrincipal = () => {
  return (

    <BrowserRouter>

      <h1>Cabezera</h1>
      <hr/>

      <nav>
        <ul>
          <li>
            <NavLink 
                to="/inicio"
                className = {({isActive})=> isActive ? "activado" : ""}>
                Inicio
            </NavLink>
                

          </li>
          <li>
            <NavLink 
                to="/articulos"
                className = {({isActive})=> isActive ? "activado" : ""}>
                Articulos
            </NavLink>
          </li>
          <li>
            <NavLink
                 to="/contacto"
                 className = {({isActive})=> isActive ? "activado" : ""}>
                Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
                 to="/panel"
                 className = {({isActive})=> isActive ? "activado" : ""}>
                Panel de control
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr/>

      <section className='contenida-principal'>
      {/* Cargar componentes */} 
      {/* Aqui se cagraga el componente que coincide con el pad */} 
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/articulos' element={<Articulos />} />
          <Route path='/contacto' element={<Contacto />} />


          <Route path='/persona/:nombre/:apellido' element={<Persona />} />
          {/*Ruta duplicada para parametros opcionales*/}
          <Route path='/persona/:nombre' element={<Persona />} />
          <Route path='/persona' element={<Persona />} />


          {/* CLASE 6 Navigate se usa para redirigir*/}
          <Route path='/redirigir' element={<Navigate to = '/persona/victor/robles'/>}/>

          {/* CLASE 8 Añadimos /* al pad de la ruta padre indicando que tiene rutas anidadas 
              Cerramos la ruta como si tubiese contenido (</Route>)
              y añadimos las rutas anidadas del componente PanelDeContol
              hay que quitar la barra / de delante en el path de la subruta
              ya que esta ya no viene del directorio raiz*/}
          <Route path='/panel/*' element={<PanelDeControl/>}>
            <Route path='inicio' element={<InicioPanel />} />
            <Route path='gestion-usuarios' element={<Gestion />} />
            <Route path='acerca-de' element={<Acerca />} />
            <Route path='crear-articulos' element={<Crea />} />
          </Route>


          {/* Con el asterisco indicamos ruta que no este definida */}
          <Route path='*' element={<Error />} />

        </Routes>
      </section>

      <hr/>
      <footer>
        Este es el pie de pagina
      </footer>
       
    
    </BrowserRouter>
  )
}
