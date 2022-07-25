import React from "react";
import './styles/contact.css'

export const Contact = () => {
    return (
        <section className="contact-main" id="contact">
            <div className="contact-text">
                <p>Agende seu horário</p>
                <hr />
            </div>
            <div className="contact-poster">
                <img src={require('../public/contato.png')} alt="" />
            </div>
        </section>
    )
}