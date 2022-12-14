import React from "react";
import styled from "styled-components";


const AboutHome = () =>{
    return(
        <Style>
            <h2>Conoce mas sobre mi...</h2>
            <button>About me</button>
        </Style>
    )
}

export default AboutHome

const Style = styled.div`
    h2{
        color: white;
    }
`