import styled from 'styled-components';

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
