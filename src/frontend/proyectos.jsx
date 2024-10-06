import React from 'react';
import './proyectos.css';
import imagen_modelad3d_fdd from "../assets/imagen_modelado3d_fdd.png"
import imagen_pagina_fdd from "../assets/imagen_pagina_fdd.png"
import imagen_circuito_fdd from "../assets/imagen_circuito_fdd.png"
import imagen_circuito2_fdd from "../assets/imagen_circuito2_fdd.jpg"
import imagen_pagina2_fdd from "../assets/imagen_pagina2_fdd.jpg"
import imagen_modelad3d2_fdd from "../assets/imagen_modelado3d2_fdd.png"

const Proyectos = () => {
  return (
    <div className='proyectos-body'>
      <section className="servicios">
        <h1>AirVibe</h1>
        <h4>Proyecto de Monitoreo Ambiental</h4>
        <div className="servicios-contenedor">
          <div className="servicio">
            <img src={imagen_modelad3d_fdd} alt="Servicio 1" />
            <h3>Modelado 3D</h3>
          </div>
          <div className="servicio">
            <img src={imagen_circuito_fdd} alt="Servicio 2" />
            <h3>Circuito Electronico</h3>
          </div>
          <div className="servicio">
            <img src={imagen_pagina2_fdd} alt="Servicio 3" />
            <h3>Desarrollo del Software de datos</h3>
          </div>
        </div>
      </section>
      <div className='card-cont-2'>
        <div className='card-holiwi'>
          <img src={imagen_modelad3d2_fdd} alt="Servicio 1" />
        </div>
        <div className='card-sin-card'>
          <h4> Se diseño un prototipo en el software Onshape en donde se desarrollo un contenedor adaptable a un poste en donde se sujetara a traves de abrazaderas con una trinquera, y por dentro se hicieron las mediciones correspondientes para que cada sensor calze a la perfección y que a su vez en la parte superior cuente con un panel solar que recargar la bateria dentro del prototipo. </h4>
        </div>
      </div>
      <div className='card-cont-2'>
        <div className='card-sin-card'>
          <h4>El circuito electronico cuenta con todas las conexiones para cada uno de los sensores utilizados, con sus respectivas conexiones a tierra y voltaje ademas de los divisores de voltaje utilizados para los sensores que su voltaje son de 5 voltios, los cuales fueron reducidos 3.3v con el objetivo que el micropocesador(esp32) pueda funcionar correctamente, cada sensor esta conectado a un especifico pin del esp32 dependiendo sus necesidades, como lo son los pines de analogicos, digitales y uart.</h4>
        </div>
        <div className='card-holiwi'>
          <img src={imagen_circuito2_fdd} alt="Servicio 1" />
        </div>
      </div>
      <div className='card-cont-2'>

        <div className='card-holiwi'>
          <img src={imagen_pagina_fdd} alt="Servicio 1" />
        </div>
        <div className='card-sin-card'>
          <h4> Se desarrollo una web en donde se podran visualizar los datos en tiempo real recopilada por los sensores en un mapa interactivo, esta fue desarrollada con react y se uso una base de datos Mysql, en este caso solo se puede visualizar de un punto ya que solo se cuenta con el armado de un prototipo, ademas permitia la descarga de un archivo en formato csv donde mostraba el historial de datos.</h4>
        </div>
      </div>

    </div>
  );
};

export default Proyectos;