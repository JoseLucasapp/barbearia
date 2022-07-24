import React from "react";
import './styles/services.css'

export const Services = () => {
    return (
        <div className="services-main" id="services">
            <div className="services-text">
                <p>SERVIÇOS</p>
                <hr />
            </div>
            <div className="services-posters">
                <img src={require('../public/Serviços-barba.png')} alt="" />
                <img src={require('../public/Serviços-cabelo.png')} alt="" />
            </div>
        </div>
    )
}