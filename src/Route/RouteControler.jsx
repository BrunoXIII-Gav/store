import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import route from "./route";
import './xd.css';
import fot_portfolio from "../assets/img_portfolio.png";

function Navigation() {
    const location = useLocation();
    return (
        <nav>
            <div className='logo'> 
                <img src={fot_portfolio} alt="Proyecto FDD" className="imagen_navegar" />
            </div>
            <div className='barnav'>
                <Link to='/' className={`bar ${location.pathname==='/store' ? 'activate':''}`}>Inicio</Link>
                <Link to='/proyectos' className={`bar ${location.pathname==='/proyectos' ? 'activate':''}`}>Proyecto</Link>
                <Link to='/Contacto' className={`bar ${location.pathname==='/Contacto' ? 'activate' : ''}`}> Contacto</Link>
            </div>
        </nav>
    );
}

function RouteControler() {
    return (
        <Router>
            <div className="body">
                <Navigation />
            </div>
            <Routes>
                {route.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.component />} />
                ))}
                <Route path="/" element={<Navigate to='/store' />} />
            </Routes>
        </Router>
    );
}

export default RouteControler;