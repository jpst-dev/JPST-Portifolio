import React from 'react'

import {ExperiencesCards} from "./ExperiencesCards";

import {FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs} from "react-icons/fa";

export function Experiences() {
    return (
        <section className="cardsContainer" id="experiences">
            <h1 style={{marginLeft: "25px", fontSize: "40px"}}><strong>Experiences</strong></h1>
            <ExperiencesCards icon={<FaReact size={100}/>} title={"ReactJs"}/>
            <ExperiencesCards icon={<FaHtml5 size={100}/>} icon2={<FaCss3Alt size={100}/>} icon3={<FaJs size={100}/>}
                              title={"HTML, CSS, JavaScript"}/>
            <ExperiencesCards icon={<FaNodeJs size={100}/>} title={"NodeJs"}/>
            <ExperiencesCards icon={<FaNodeJs size={100}/>} title={"NodeJs"}/>
        </section>

    )

}