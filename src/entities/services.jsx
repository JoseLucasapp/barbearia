import React from "react";
import './styles/services.css'

export const Services = () => {
    return (
        <section className="services-main" id="services">
            <div className="services-text">
                <p className="services-title">Barba e Cabelo</p>
                <hr />
                <p>Os melhores preços e os melhores serviços, para os melhores clientes.</p>
            </div>
            <div className="services-posters">
                <img src={require('../public/Serviços-barba.png')} alt="" />
                <img src={require('../public/Serviços-cabelo.png')} alt="" />
            </div>
        </section>
    )
}