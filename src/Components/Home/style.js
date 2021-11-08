import styled from 'styled-components';
import { Background } from '../../Styles/globalstyle';


export const Items = styled.div`
    height:100% ;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img.carouselImage{
    max-height: 100%;
    max-width: 100%;
  }
  

`;

export const BackgroundHome = styled(Background)`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  align-items: flex-start;

  section.pictures {
    position: sticky;
    top: 25vh;
    height: 60vh;
    width: 40vw;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  

  .text {
    position: static;
    top: 25vh;
    min-height: 100%;
    width: 60vw;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: 'Great Vibes', cursive;
      //margin-top: 20%;
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
