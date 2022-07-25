import React from "react";
import { Place } from "./place";
import './styles/home.css'
import { Services } from "./services";
import { Contact } from "./contact";

export const Home = () => {
    return (
        <div className="home-main">
            <Place />
            <Services />
            <Contact />
        </div>
    )
}