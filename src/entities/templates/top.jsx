import React from "react";
import './styles/top.css'

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
                <div className="options-top-option">ESPAÇO</div>
                <div className="options-top-option">SERVIÇOS</div>
                <div className="options-top-option">CONTATO</div>
                <div className="options-top-option" id="instagram">
                    <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" alt="" />
                </div>
            </div>
        </div>
    )
}