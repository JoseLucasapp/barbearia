import React from "react";
import './styles/contact.css'

export const Contact = () => {
    return (
        <section className="contact-main" id="contact">
            <div className="contact-text">
                <p className="contact-title">Agende seu horário</p>
                <hr />
                <p>Email, telefone e local. É muito fácil nos encontrar.</p>
            </div>
            <div className="contact-poster">
                <img src={require('../public/contato.png')} alt="" />
            </div>
        </section>
    )
}