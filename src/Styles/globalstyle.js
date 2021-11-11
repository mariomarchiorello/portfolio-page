import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      font-family: "roboto",sans-serif;
    }`;

export const Background = styled.div`
  min-height: 95vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(186, 179, 179, 0.5);

  div.not-found-page {
    background-color: deeppink;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      margin-top: 5vh;
    }
    h3 {
      margin-top: 1vh;
    }
  }
`;

export const CardContainer = styled.div`
  min-height: 40vh;
  width: 85vw;
  margin-top: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  img {
    height: 60px;
    width: 60px;
  }
`;

export const GoHome = styled.button`
  height: 45px;
  width: 85px;
  outline: transparent;
  border: 2px solid rgba(28, 125, 226, 0.83);
  border-radius: 5px;
  position: fixed;
  bottom: 45px;
  right: 25px;
  text-align: center;
  background-color: white;
  cursor: pointer;

  transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;
  :hover {
    background-color: rgba(28, 125, 226, 0.83);
    color: white;
  }
`;

export const Label = styled.label`
  margin: 1% 0 0 2%;
  text-transform: capitalize;
`;

export const Input = styled.input`
  height: 35px;
  width: 85%;
  border: none;
  border-bottom: solid 3px gray;
  margin: 1% 0 0 2%;
  border-radius: 5px;
  font-size: large;
`;
export const ButtonPrimary = styled.button`
  height: 4rem;
  min-width: 7rem;
  padding: 1.5rem;
  background-color: white;
  border: transparent;
  outline: none;
  border-radius: 1rem;
  font-weight: bold;
  font-size: large;
  cursor: pointer;
  color: rgba(28, 125, 226, 0.83);
  transition: color 0.6s linear, background-color 0.6s linear;
  :hover {
    color: white;
    background-color: rgba(28, 125, 226, 0.83);
  }
`;

export const ButtonContainer = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;
`;


export const CardAll = styled.div`
  height: 40vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  margin-bottom: 1%;
  padding-bottom: 2%;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(161, 184, 191, 0.67);
  border-radius: 15px;
  transition: background-color 0.3s linear;
  :hover {
    background-color: rgba(161, 184, 191, 0.1);
  }

  h2 {
    margin: 2% 0 0 0;
    color: #004fa0;
  }

  section {
    margin-top: 2%;
    margin-left: 3%;
    .cover {
      height: 25%;
      width: 25%;
      @media (min-width: 480px) {
        width: 15%;
      }
    }
  }

  .info {
    height: 55%;
    width: 85%;

    p.text {
      text-transform: capitalize;
      line-height: 1.5;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 1%;
    width: 80%;

    button {
      height: 30px;
      width: 80px;
      border: none;
      outline: transparent;
      border-radius: 10px;
      font-weight: bolder;
      cursor: pointer;

      transition: background-color 0.5s, color 0.5s;

      :hover {
        background-color: rgba(28, 125, 226, 0.83);
        color: white;
      }
    }
  }
`;
