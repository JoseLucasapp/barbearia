import React from "react";

import './styles/place.css'

export const Place = () => {
    return (
        <section className="place-main" id="place">
            <div className="place-details">
                <div className="place-image">
                    <img src={require('../public/pexels-caleb-oquendo-3162022.jpg')} alt="" />
                </div>
                <div className="place-text">
                    <h1>MUITO MAIS QUE UMA BARBEARIA SURPREENDA-SE</h1>
                    <p>O homem moderno também cuida da sua aparência e a nossa barbearia é o melhor lugar para fazer isso!  </p>
                </div>
            </div>
            <div className="place-photos">
                <img src={require('../public/pexels-cottonbro-3998416.jpg')} alt="" />
                <img src={require('../public/pexels-dmitry-zvolskiy-1570806.jpg')} alt="" className="img-left" />
                <img src={require('../public/pexels-nikolaos-dimou-1319460.jpg')} alt="" />
            </div>
        </section>
    )
}