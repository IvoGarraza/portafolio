import React from "react";
import styled from "styled-components";
import logos from "../images/logos";
import './Skills.css'


const Skill = () =>{
    return(
        <>
        <svg className="waveUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
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
                <h3>Node.js</h3>
                <img src={logos.node}></img>
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
            <div className="Card">
                <h3>Git</h3>
                <img src={logos.git}/>
            </div>
        </StyledSkills>
        <svg className="waveDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,26.7C384,21,480,43,576,90.7C672,139,768,213,864,208C960,203,1056,117,1152,96C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
        </svg>
        </>
    )
}


export default Skill


const StyledSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2%;
    grid-row-gap: 10%;
    background-color: #fff;
    height: 600px;
    .Card{
        background-color: #fff;
        border: 1px solid black;
        border-bottom: 5px solid #323232;
        border-radius: 3%;
        width: 90%;
        height: 70%;
        padding: 1%;
        margin: 5%;
        -webkit-box-shadow: 0px 15px 15px 8px rgba(0,0,0,0.6);
        -moz-box-shadow: 0px 15px 15px 8px rgba(0,0,0,0.6);
        box-shadow: 0px 15px 15px 8px rgba(0,0,0,0.6);
        img{
            width: 30%;
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }

    }
    .Card:hover{
        border-bottom: 5px solid #0D7377;
        img{
            -webkit-filter: grayscale(0);
            filter: grayscale(0);
        }
    }
`