import React from 'react';
import { Background, ButtonPrimary } from '../../Styles/globalstyle';
import { Link } from 'react-router-dom';
import MostRecent from '../MostRecent/mostRecent';
import { ButtonContainer } from '../MostRecent/style';

export default function HomeBook() {
  return (
    <>
      <Background className={'home'}>
        <MostRecent />
        <ButtonContainer>
          <Link to="/books/all">
            <ButtonPrimary>Browse all books</ButtonPrimary>
          </Link>
          <Link to="/books/add">
            <ButtonPrimary>Add a Book</ButtonPrimary>
          </Link>
        </ButtonContainer>
      </Background>
    </>
  );
}
