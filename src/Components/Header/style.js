import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  overflow-x: hidden;
  height: 5rem;
  width: 100%;
  background-color: rgba(25, 119, 201, 0.79);
  color: #fff;
  display: flex;
  align-items: center;
  //justify-content: center;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;
  box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;

  .logo {
    height: 80%;
    width: 15%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 80%;
      width: 80%;
    }
  }

  @media (min-width: 480px) {
    height: 5rem;
  }
`;
