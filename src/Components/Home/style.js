import styled from 'styled-components';
import { Background } from '../../Styles/globalstyle';

export const BackgroundHome = styled(Background)`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  align-items: flex-start;

  .pictures {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin: 4%;
      height: auto;
      width: 96%;
    }
  }
  .text {
    min-height: 100%;
    width: 60vw;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Dancing Script', cursive;
      margin-top: 20%;
      margin-left: 2%;
      font-size: 78px;
      color: rgba(92, 225, 230, 0.79);
    }
    h3 {
      font-family: 'Dancing Script', cursive;
      margin-left: 2%;
      color: rgba(92, 225, 230, 0.79);
      font-size: 48px;
    }
  }
`;
