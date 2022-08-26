import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

/* CLASE 4: Vamos a recoger el parametro nombre que nos viene por URL
            Para ello usamos el Hook useParams, nos devuelve un objeto
            con los atributos como parametros URL */

/* CLASE 5: Parametros opcionales, para conseguirlo debemos duplicar
            nuestra ruta */ 

/* CLASE 7: Hook useNavigate */

export const Persona = () => {

    //const parametros = useParams(); => desetructuramos para acceder
    //                                  directamente a los parametros
    let {nombre = "", apellido = ""} = useParams();
    /* Asignamos valores por defecto si queremos */ 

    let navegar = useNavigate();


    /* Con el Hook useNavigate podemos enviar variables a nuestra url */
    /* Tenemos que enviar un String con las variables concatenadas 
        en este caso vamos a usar un templateSting de js*/

    const enviar = e => {
      e.preventDefault();
      let nombre = e.target.nombre.value;
      let apellido = e.target.apellido.value;
      let url = `/persona/${nombre}/${apellido}`;
      
      if(nombre.length <= 0 && apellido.length <= 0){
        navegar("/inicio");
      }else{navegar(url);}
    }


  return (
    <div>
       {/*parametros.nombre desetructuramos y accedemos directamente*/}

        {!nombre && <h1>No hay ninguna persona que mostrar</h1>}
        {nombre && <h1>Pagina de persona : {nombre} {apellido}</h1>}
         
        <p>Esta es la pagina de Persona</p>

        {/* CLASE 7: */}
        <form onSubmit={e => enviar(e)}>
          <input type="text" name='nombre' />
          <input type="text" name='apellido' />
          <input type="submit" name='enviar' value='enviar' />
        </form>
    </div>
  )
}
