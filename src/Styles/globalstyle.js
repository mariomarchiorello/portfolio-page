import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      font-family: "roboto",sans-serif;
      cursor: pointer;
    }`;

export const Background = styled.body`
      height: 100%;
      max-width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #eef3f5;
      z-index: -1;
  
`;

export const CardContainer = styled.div`
  min-height: 40vh;
  width: 85vw;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 1px 10px 11px 3px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 1px 10px 11px 3px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 1px 10px 11px 3px rgba(0, 0, 0, 0.6);

  .buttonCard {
    height: 35px;
    padding: 10px;
    border-radius: 15px;
    text-decoration: none;
    text-underline: none;
    outline: transparent;
    transition: background-color 0.5s ease-in-out, color 0.9s ease-in-out;
    text-align:center;
    font-size:25px;
    color: black;
    :hover {
      background-color: rgba(28, 125, 226, 0.83);
        color: white;
    }
    
  }
  @media (min-width: 480px) {
    width: 65vw;
  }`;

export const Card = styled.div`
  height: 40vh;
  width: 90%;
  border: none;
  outline: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 1px 10px 11px 3px rgba(0,0,0,0.6);
  -webkit-box-shadow: 1px 10px 11px 3px rgba(0,0,0,0.6);
  -moz-box-shadow: 1px 10px 11px 3px rgba(0,0,0,0.6);
  
  .card{
  position: relative;
  transition: transform 1s;
  transform-style: preserve-3d;
  }
  .content {
    margin-top: 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (min-width: 480px) {
      width: 80%;
      height: 80%;
      margin-top: -1%;
      justify-content: space-evenly;
    }
    .text {
      text-transform: capitalize;
      text-decoration: underline;
      font-size: large;
      line-height: 1.5;
    }
    .left {
      height: 100%;
      width: 30%;
      @media (min-width: 480px) {
        img {
          height: 7rem;
          width: 7rem;
        }
      }
    }
    .right {
      height: 100%;
      width: 65%;
      @media (min-width: 480px) {
        text-align: center;
        line-height: 1.5;
      }
    }
  }
`;

export const GoHome = styled.button`
    height: 45px;
  width: 85px;
  outline: transparent;
  border:2px solid rgba(28, 125, 226, 0.83);
  border-radius: 5px;
  position: fixed;
  bottom:45px;
  right: 25px;
  text-align: center;
  background-color: white;
  transition: background-color 0.6s ease-in-out , color 0.6s ease-in-out;
  :hover{
    background-color: rgba(28, 125, 226, 0.83);
    color: white;
  }
  

`;



export const Label = styled.label`
  margin:1% 0 0 2% ;
  text-transform: capitalize;

`;

export const Input = styled.input`
  height: 35px;
  width: 85%;
  border:none;
  border-bottom: solid 3px gray;
  margin:1% 0 0 2% ;
  border-radius: 5px;
  font-size: large;
  

`;
