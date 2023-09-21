import FiltrationSVG from "../components/svg/FiltrationSVG";
import React from "react";
import ProtectiveSVG from "../components/svg/ProtectiveSVG";
import LightingSVG from "../components/svg/LightingSVG";


export const links = [
    {
        name: "Accueil",
        path: "/",
        dropdown: false,
    },
    {
        name: "Filtration",
        path: "/filtration",
        dropdown: true,
    },
    {
        name: "Protective",
        path: "/protective",
        dropdown: true,
    },
    {
        name: "Lighting",
        path: "/lighting",
        dropdown: true,
    },
    {
        name: "News",
        path: "/news",
        dropdown: true,
    },
    {
        name: "A propos",
        path: "/about",
        dropdown: true,
    },
    {
        name: "Air quality",
        path: "/air-quality",
        dropdown: false,
    }
] as const;


export const boxesCTA = [
    {
        name: "Filtration",
        svg: React.createElement(FiltrationSVG),
        color: "#287DE4",
        description: "lorem ipsum dolor sit amet, consectetur adipis",
        path:"#"
    }, 
    {
        name: "Protective",
        svg: React.createElement(ProtectiveSVG),
        className: 'bg-cta-protractor',
        color: "#1EA5AA",
        description: "lorem ipsum dolor sit amet, consectetur adipis",
        path:"#"
    }, 
    {
        name: "Lighting",
        svg: React.createElement(LightingSVG),
        color: "#FFC600",
        description: "Get lit with our top-notch lighting - the ultimate commercial sell!",
        path:"#"
    }, 
      
] as const;