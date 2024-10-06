import React, { useState } from 'react';
import './contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:5000/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div className='contacto-body'>
      <h1> </h1>
      <div className='contacto-container'>
        <div className='contacto-info'>
          <h2>CORREO ELECTRONICO</h2>
          <p>bruno.gavidia@upch.pe</p>
          <h2>NUMERO DE CONTACTO</h2>
          <p>+51 942 864 706</p>
          <h2>REDES </h2>
          <div className='social-icons'>
            <a href="https://github.com/BrunoXIII-Gav" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://pe.linkedin.com/in/bruno-paolo-gavidia-crovetto-a9b316307" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/brunogavidia/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
          <p>© 2024 Bruno Gavidia</p>
        </div>
        <div className='contacto-form'>
          <h2>FORMULARIO DE CONTACTO</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Coloque su nombre" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Coloque su correo electronico" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Coloque su mensaje" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;