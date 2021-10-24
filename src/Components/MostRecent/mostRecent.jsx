import React from 'react';
import { CardContainer } from '../../Styles/globalstyle';
import { useAllBooks } from '../../Api';
import { CardAll } from '../AllBooks/style';
import icon from '../../Assets/book_cover_placeholder.png';

function MostRecent() {
  const { data: allBooks, isLoading } = useAllBooks();
  if (isLoading) return null;

  const mostRecent = allBooks[allBooks.length - 1];

  return (
    <>
      <CardContainer>
        <CardAll>
          <section className="cover">
            <img src={icon} alt="placeholder for bookcover" />
          </section>
          <section className="info">
            <p className="text">Titel: {mostRecent ? mostRecent.title : ''}</p>
            <p className="text">
              Author: {mostRecent ? mostRecent.author : ''}
            </p>
            <p className="text">
              Amount in Stock: {mostRecent ? mostRecent.total_amount : ''}
            </p>
            <p className="text">
              Number of pages: {mostRecent ? mostRecent.pages : ''}
            </p>
            <p className="text">Isbn: {mostRecent ? mostRecent.isbn : ''}</p>
          </section>
        </CardAll>
      </CardContainer>
    </>
  );
}

export default MostRecent;
