import React from "react";
import styled from "styled-components";
import AboutHome from "../AboutHome/AboutHome";
import Navbar from "../Navbar/Navbar";
import Presentation from "../Presentation/Presentation";
import Skill from "../Skills/Skills";


const Home = () =>{
    return(
        <>  
            <Navbar></Navbar>
            <Presentation></Presentation>
            <Skill></Skill>
            <AboutHome></AboutHome>
        </>
    )
}

export default Home