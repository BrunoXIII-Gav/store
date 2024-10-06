import React from 'react';
import proyecto_fdd_image from '../imagenes_proyectos/proyecto_fdd_image.PNG';
import proyecto_progra_avanzada from '../imagenes_proyectos/proyecto_progra_avanzada.jpg';
import foto_cara from '../assets/Foto_cara_Carnet-sin_fondo.png';
import img_cuadro1 from '../assets/img_cuadro1-removebg-preview.png';
import img_cuadro2 from '../assets/img_cuadro2-removebg-preview.png';
import img_cuadro3 from '../assets/img_cuadro3-removebg-preview.png';
import img_aws from '../assets/image_aws.png';
import imagen_foto_constancia_britanico from '../assets/imagen_foto_constancia_britanico.png';
import imagen_voluntariado from '../assets/imagen_voluntariado.png';
import imagen_pasantia from '../assets/imagen_pasantia.png';

import imagen_retinopatia from '../assets/imagen_retinopatia.png'
import './resume.css';

const Resume = () => {
  return (
    <div className='body'>
      <div className='body-segundo'>
        <p> </p>
        <div className="tarjeta-2">
          <section className="section-2">
            <div className="card-2">
              <div className="text-2">

                <h1>Bruno Gavidia Crovetto</h1>
                <h5>Estudiante de Ingeniería Informática</h5>
                <br />
                <p>Estudiante de la carrera de Ingenieria Informatica en la Universidad Peruana Cayetan Heredia, interesado en el area de desarrollo web, conocimiento en Python, html y JavaScript</p>
                <br />
              </div>
              <div className="imagen-2">
                <img className="img-2" src={foto_cara} alt="Fotoperfil" />
                <div className="circulo-2"></div>
                <div className="circulo2-2"></div>
                <div className="circulo3-2"></div>
              </div>
            </div>
          </section>
          <section className="barrainferior-2">
            <div className="abajo-2">
              <div className="logos-2">
                <img className="icono-2" src={img_cuadro1} alt="años" />
                <div>
                  <h5>Proyectos</h5>
                </div>
              </div>
              <div className="logos-2">
                <img className="icono-2" src={img_cuadro2} alt="proyectos" />
                <div>
                  <h5>Certificaciones</h5>
                </div>
              </div>
              <div className="logos-2">
                <img className="icono-2" src={img_cuadro3} alt="clientes" />
                <div>
                  <h5>21 Años</h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <h1>PROYECTOS</h1>
      <div className='card-container'>
        <div className="card">
          <img src={proyecto_fdd_image} alt="Proyecto FDD" className="card__image" />
          <div className="card__content">
            <p className="card__title">Airvibe</p>
            <p className="card__description">Proyecto de ambiental de monitoreo de aire y ruido, el cual tomara mediciones en tiempo real usando sensores de bajo coste que estaran dentro de un contenedor diseñado con 3D en Onshape y impreso con PLA, diseñado especficamente para usarlo en el pueblo de Chicla, provincia de Huarochiri </p>
            <a href='https://github.com/BrunoXIII-Gav/FDD_1' target="_blank" rel="noopener noreferrer" className="card__button secondary">Github</a>
          </div>
        </div>
        <div className="card">
          <img src={proyecto_progra_avanzada} alt="Proyecto P Avanzada" className="card__image" />
          <div className="card__content">
            <p className="card__title">Análisis de la Encuesta Nacional de Lectura</p>
            <p className="card__description">Encuesta nacional sobre la lectura en donde atraves de distintos graficos se visualizaron los datos, enfocado en el departamento de Lima en donde fue separado por distrito</p>
            <a href='https://github.com/BrunoXIII-Gav' target="_blank" rel="noopener noreferrer" className="card__button secondary">Github</a>
          </div>
        </div>
        <div className="card">
          <img src={imagen_pasantia} alt="imagen pasantia" className="card__image" />
          <div className="card__content">
            <p className="card__title">Pasantia Dental</p>
            <p className="card__description">Pasantia en curso en donde se desarrollara un sistema de reserva para el uso de una maquina haptica y un sistema conversacional para un mayor realismo de la maquina con el estudiante</p>
            <a href='' target="_blank" rel="noopener noreferrer" className="card__button secondary">Github: Proximamente</a>
          </div>
        </div>
        <div className="card">
          <img src={imagen_retinopatia} alt="imagen machine" className="card__image" />
          <div className="card__content">
            <p className="card__title">Predicción de Retinopatias</p>
            <p className="card__description">Se realizo un proyecto con tensorflow para la prediccion de retinopatias y luego se creo un pagina en streamlit donde se realizaba la prediccion </p>
            <a href='' target="_blank" rel="noopener noreferrer" className="card__button secondary">Github: Proximamente</a>
          </div>
        </div>
      </div>
      <h1>CERTIFICACIONES</h1>
      <div className='card-container'>
        <div className="card">
          <img src={img_aws} alt="imagen certificado aws" className="card__image" />
          <div className="card__content">
            <p className="card__title">Certicado de AWS - Coursera</p>
            <a href='https://www.coursera.org/account/accomplishments/verify/DWWK33UBBTYH?trk=public_profile_see-credential' target="_blank" rel="noopener noreferrer" className="card__button secondary">Certificado</a>
          </div>
        </div>
        <div className="card">
          <img src={imagen_foto_constancia_britanico} alt="imagen certificado britanico" className="card__image" />
          <div className="card__content">
            <p className="card__title">Certicado de Britanico</p>
            <a href='/Certificado_Britanico.pdf' target="_blank" rel="noopener noreferrer" className="card__button secondary">Certificado</a>
          </div>
        </div>
      </div>
      <h1>VOLUNTARIADO</h1>
      <div className='card-container'>
        <div className="card">
          <img src={imagen_voluntariado} alt="imagen voluntariado" className="card__image"/>
          <div className="card__content">
            <p className="card__title">Voluntariado de Libros</p>
            <p className="card__description">Voluntariado organizado por RUA, organizacion de la cayetano en donde nos dirijimos a un colegio en el Rimac en donde realizamos actividades con los niños y se donaron libros al colegio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;