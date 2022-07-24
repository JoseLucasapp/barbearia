import React from "react";
import { Place } from "./place";
import { TopPage } from "./templates/top";
import './styles/home.css'
import { Services } from "./services";

export const Home = () => {
    return (
        <div className="home-main">
            <TopPage />
            <Place />
            <Services />
        </div>
    )
}