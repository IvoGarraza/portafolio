import React from "react";
import styled from "styled-components";
import logos from "../images/logos";


const Skill = () =>{
    return(
        <StyledSkills>
            <div className="Card">
                <h3>React.js</h3>
                <img src={logos.react}></img>
            </div>
            <div className="Card">
                <h3>Javascript</h3>
                <img src={logos.javascript}></img>
            </div>
            <div className="Card">
                <h3>HTML</h3>
                <img src={logos.html}></img>
            </div>
            <div className="Card">
                <h3>CSS</h3>
                <img src={logos.css}></img>
            </div>
            <div className="Card">
                <h3>MySQL</h3>
                <img src={logos.mysql}></img>
            </div>
            <div className="Card">
                <h3>Adobe Photoshop</h3>
                <img src={logos.photoshop}></img>
            </div>
            <div className="Card">
                <h3>Adobe After Effects</h3>
                <img src={logos.aftereffects}></img>
            </div>
            <div className="Card">
                <h3>Sony Vegas</h3>
                <img src={logos.vegas}></img>
            </div>
        </StyledSkills>
    )
}


export default Skill


const StyledSkills = styled.div`
    display: grid;
    grid: 25%;
    .Card{
        border: 1px solid black;
        width: 25%;
        padding: 1%;
        margin: 3%;
        img{
            width: 30%;
        }
    }
`