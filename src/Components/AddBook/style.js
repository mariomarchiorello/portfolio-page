import styled from 'styled-components';

export const PostFormContainer = styled.form`
  color: white;
  position: fixed;
  top: 17vh;
  height: 60vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
  background: linear-gradient(100deg, #004d9f 0%, #0ec8c8 90%);

  @media (min-width: 480px) {
    height: 75vh;
    top: 21vh;
  }

  .text {
    height: 10%;
    text-align: center;
    line-height: 2;
    margin-top: 2%;
    font-size: large;
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .button {
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
    @media (min-width: 480px) {
    }

    button {
      height: 100%;
      color: white;
      border: none;
      border-radius: 15px;
      width: 50%;
      outline: transparent;
      background-color: rgba(0, 77, 159, 0.48);
      transition: background-color 0.5s linear;

      :hover {
        background-color: rgba(0, 77, 159, 0.89);
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;
