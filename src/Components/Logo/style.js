import styled from 'styled-components';

export const Container = styled.section`
  height: 80%;
  width: 15%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    width: 25%;
  }
`;
export const Logo = styled.img`
  height: 80%;
  width: 80%;
`;
