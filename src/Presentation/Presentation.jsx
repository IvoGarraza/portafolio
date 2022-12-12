import React from "react";
import styled from "styled-components";

const Presentation = ()=>{
    return(
        <div className="presentationContainer">
            <h2>Hello, I'm Ivo Garraza<br></br>FullStack Developer</h2>
            <button>look at this</button>
        </div>
    )
}

export default Presentation


const StyleComponent = styled.div`
    .presentationContainer{
        background-color:gray;
        text-align: center
    }
`