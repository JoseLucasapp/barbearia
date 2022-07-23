import React from "react";
import { Place } from "./templates/place";
import { TopPage } from "./templates/top";
import './styles/home.css'

export const Home = () => {
    return (
        <div>
            <TopPage />
            <Place />
        </div>
    )
}