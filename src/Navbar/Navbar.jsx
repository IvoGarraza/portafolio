import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <StyledNavbar>
            <h1>Ivo Garraza</h1>
            <div className="navContent">
{/*                 <Link to='about'><a className="about">About me</a></Link>
                <Link><a className="contact">Contact</a></Link> */}
                <button class="button-28" role="button">About me</button>
                <button class="button-28" role="button">Contact</button>
            </div>
        </StyledNavbar>
    )
}

export default Navbar

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    align-items: center;
    background-color: #fff;
    .navContent{
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 1%;
        width: 20%;
        a{
           /*  margin: 1%; */
            text-decoration: none;
            border: 3px solid green;
            
        }
        .button-28 {
            appearance: none;
            background-color: transparent;
            border: 2px solid #1A1A1A;
            border-radius: 15px;
            box-sizing: border-box;
            color: #3B3B3B;
            cursor: pointer;
            display: inline-block;
            font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-size: 16px;
            font-weight: 600;
            line-height: normal;
            margin: 0;
            min-height: 20px;
            min-width: 0;
            outline: none;
            padding: 10px 15px;
            text-align: center;
            text-decoration: none;
            transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            width: 45%;
            will-change: transform;
            }

        .button-28:disabled {
            pointer-events: none;
            }

        .button-28:hover {
            color: #fff;
            background-color: #212121;
            box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
            transform: translateY(-2px);
            }

        .button-28:active {
            box-shadow: none;
            transform: translateY(0);
            }
    }
    h1{
        margin: 1%;
    }
`


