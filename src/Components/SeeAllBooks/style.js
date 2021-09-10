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
  
  section{
    margin-top: 2%;
    margin-left: 3%;
  }
  .cover{
    height: 25%;
      width: 25%;
    
    @media (min-width: 480px) {
        width: 15% ;
      }
  }
  .info{
    height: 55%;
    width: 85%;
    p.text{
      text-transform: capitalize;
      line-height: 1.5;
      
    }
  }
  .buttons{
    background-color: blue;
    height: 15%;
    width: 85%;
    margin-bottom: 1%;
  
  }



`;
