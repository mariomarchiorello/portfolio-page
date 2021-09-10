import styled from "styled-components";
import {Card} from "../../Styles/globalstyle";

export const CardAll = styled(Card)`
  height: 40vh;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  margin-bottom: 1%;
  justify-content: center;
  align-items: center;
    box-shadow: 5px 10px 11px 3px rgba(0,0,0,0.6);
  -webkit-box-shadow: 5px 10px 11px 3px rgba(0,0,0,0.6);
  -moz-box-shadow: 5px 10px 11px 3px rgba(0,0,0,0.6);
  outline: transparent;
  h2{
    margin: 5% 0 5% 0;
    color: #004fa0;
  }  
  section {
    margin-top: 2%;
    margin-left: 3%;
    .cover {
      height: 25%;
      width: 25%;
      @media (min-width: 480px) {
        width: 15% ;
      }
    }}
    .info{
      height: 55%;
      width: 85%;
      p.text{
        text-transform: capitalize;
        line-height: 1.5;
      }
    }
    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      margin-bottom: 1%;
      height: 55px;
      width: 80%;
    }  
    .action{
      height: 25px;
      width: 85px;
      color: black;
      border-radius: 5px;
      text-decoration: none;
      border: 1px black solid;
      text-align: center;
      justify-content: center;
    }
  
`;
