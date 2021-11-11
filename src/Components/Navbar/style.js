import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  overflow-x: hidden;
  height: 6vh;
  width: 100%;
  background-color: rgb(43, 129, 205);
  color: #fff;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;
  box-shadow: 0px 10px 13px -7px #000000, 0px 12px 23px -21px #004fa0;
  @media (max-width: 480px) {
    flex-direction: row;
  }

  @media (min-width: 480px) {
    height: 12vh;
  }
`;
export const MenuSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: auto;
  button {
    @media (max-width: 480px) {
      font-size: medium;
      width: auto;
      white-space: nowrap;
      text-align: center;
      margin-right: 2%;
    }
  }
`;
