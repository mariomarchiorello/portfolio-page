import React, { useState } from 'react';
import { Background, ButtonPrimary } from '../../Styles/globalstyle';
import { Link } from 'react-router-dom';
import MostRecent from '../MostRecent/mostRecent';
import { ButtonContainer } from '../MostRecent/style';
import Modal from 'react-modal';
import description from '../../Assets/Chalenge_description.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const customStyles = {
  content: {
    marginTop: '5%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: 25,
  },
};

export default function HomeBook() {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Document file={description}>
          <Page width={600} pageNumber={1} />
        </Document>
      </Modal>
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
