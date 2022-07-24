import React from "react";
import './styles/top.css'

import { HashLink as Link } from "react-router-hash-link";

export const TopPage = () => {
    return (
        <div className="top-main">
            <div className="logo-top">
                <img src={require('../../public/logo.png')} alt="" />
            </div>
            <div className="name-top">
                <p>JL Barber</p>
            </div>
            <div className="options-top">
                <Link className="options-top-option" to='#place' smooth>
                    ESPAÇO
                </Link>
                <Link className="options-top-option" to='#services' smooth>
                    SERVIÇOS
                </Link>
                <div className="options-top-option">CONTATO</div>
                <div className="options-top-option" id="instagram">
                    <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="" />
                </div>
            </div>
        </div>
    )
}