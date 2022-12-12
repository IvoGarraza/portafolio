import React from "react";
import styled from "styled-components";


const Skill = () =>{
    return(
        <StyledSkills>
            <div className="Card">
                <h3>React.js</h3>
            </div>
            <div className="Card">
                <h3>Javascript</h3>
            </div>
            <div className="Card">
                <h3>HTML</h3>
            </div>
            <div className="Card">
                <h3>CSS</h3>
            </div>
            <div className="Card">
                <h3>MySQL</h3>
            </div>
            <div className="Card">
                <h3>Adobe Photoshop</h3>
            </div>
            <div className="Card">
                <h3>Adobe After Effects</h3>
            </div>
            <div className="Card">
                <h3>Adobe Premiere</h3>
            </div>
        </StyledSkills>
    )
}


export default Skill


const StyledSkills = styled.div`
    display: flex;
    .Card{
        border: 1px solid black;
        width: 25%;
    }
`