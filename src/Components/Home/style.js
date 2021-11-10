import styled from 'styled-components';
import { Background } from '../../Styles/globalstyle';

export const Items = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img.carouselImage {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    max-width: 100%;
  }
`;

export const BackgroundHome = styled(Background)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-start;
  @media (max-width: 480px) {
    flex-direction: column;
    overflow: hidden;
  }

  section.pictures {
    position: sticky;
    top: 20vh;
    height: 60vh;
    width: 40vw;
    margin-left: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
      position: relative;
      width: 100vw;
      top: 7vh;
      height: auto;
    }
  }

  section.text {
    overflow-y: hidden;
    position: sticky;
    top: 20vh;
    width: 60vw;
    display: flex;
    flex-direction: column;
    .clamp-lines > span {
      display: flow;
      width: 60%;
      margin-left: 2%;
      line-height: 1.4;
      font-size: 20px;
      @media (max-width: 480px) {
        width: 90%;
        font-size: 12px;
        height: 25%;
      }
    }
    .clamp-lines.custom-class .clamp-lines__button {
      height: 35px;
      width: 85px;
      background: white;
      outline: transparent;
      border: 2px solid rgba(28, 125, 226, 0.83);
      border-radius: 10px;
      margin-top: 2%;
      margin-left: 2%;
      text-align: center;
      transition: background-color 0.6s ease-in-out, color 0.6s ease-in-out;
      margin-bottom: 2%;
      @media (max-width: 480px) {
        font-size: 12px;
        height: auto;
        width: auto;
        padding: 5px;
      }
    }
    .clamp-lines.custom-class .clamp-lines__button:hover {
      background: rgba(28, 125, 226, 0.83);
      color: white;
    }
    h1 {
      font-family: 'Great Vibes', cursive;
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
    @media (max-width: 480px) {
      position: relative;
      top: 0;
      margin-top: 15%;
      width: 100%;
      h1 {
        font-size: 48px;
      }
      h3 {
        font-size: 22px;
      }
    }
  }
`;
