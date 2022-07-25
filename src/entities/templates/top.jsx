import React from "react";
import './styles/top.css'

import { HashLink as Link } from "react-router-hash-link";

export const TopPage = () => {

    window.onresize = function () {
        document.location.reload(true)
    };

    const showOrHideLogo = (visibility, position) => {
        if (window.innerWidth > 1000) {
            document.getElementById('logo-top-image').style.visibility = visibility
            document.getElementById('logo-top-image').style.position = position
            document.getElementById('name-top').style.width = (visibility === 'visible' ? 39.5 : 40) + '%'
            document.getElementById('name-top').style.marginLeft = (visibility === 'visible' ? 0.5 : 0) + '%'
            document.getElementById('options-top').style.width = (visibility === 'visible' ? 40 : 60) + '%'
        }
    }

    return (
        <div className="top-main" id="top-main" >
            <div className="logo-top" id="logo-top-image" onClick={() => showOrHideLogo('hidden', 'absolute')}>
                <img src={require('../../public/logo.png')} alt="" />
            </div>
            <div className="name-top" id="name-top" onClick={() => showOrHideLogo('visible', 'relative')}>
                <p>JL Barber</p>
            </div>
            <div className="options-top" id="options-top">
                <Link className="options-top-option" id="option1" to='#place' smooth>
                    ESPAÇO
                </Link>
                <Link className="options-top-option" id="option2" to='#services' smooth>
                    SERVIÇOS
                </Link>
                <Link className="options-top-option" id="option3" to='#contact' smooth>
                    CONTATO
                </Link>
                <a href="https://www.instagram.com/jlucasgf/" id="instagram-link">
                    <div className="options-top-option" id="instagram">
                        <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="" />
                    </div>
                </a>
            </div>
        </div>
    )
}