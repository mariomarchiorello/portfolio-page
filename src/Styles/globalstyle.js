import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      font-family: "roboto",sans-serif;
      cursor: pointer;
    }
`
export const Background = styled.body`

      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #eef3f5;
`;

export const CardContainer = styled.div`
    height: 25vh;
    width: 85vw;
    margin-top:4%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #000000; 
    box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #000000;
    @media(min-width: 480px){
      width: 65vw;
    }
  
  

`;
export const Card = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .titel {
    text-align: center;
    color: #004FA0;
    font-size: large;
    margin-bottom: 0.5rem;
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

  transition: background-color 1s, opacity 1s;

  :hover {

    background-color: rgba(9, 111, 213, 0.44);
  }

`;



