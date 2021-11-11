import React from 'react';
import { Background, CardAll, CardContainer } from '../../Styles/globalstyle';
import icon from '../../Assets/book_cover_placeholder.png';
import { Link } from 'react-router-dom';
import BackButton from '../../Components/BackButton/backButton';
import { useAllBooks, useDeleteBook } from '../../Api';
import { useQueryClient } from 'react-query';
import useToast from '../../hooks/useToast';
import Loader from '../../Components/Loader/loader';

function AllBooks() {
  const queryClient = useQueryClient();
  const raiseToast = useToast();
  /*useQueryClient lets you aces the current instance of the the QueryClient and all it's properties and methods */

  const { data: allBooks, isLoading } = useAllBooks();

  const { mutateAsync: deleteBook } = useDeleteBook();

  const remove = id => async () => {
    await deleteBook(id);
    raiseToast('deleting was successful');
    await queryClient.refetchQueries('books');
  };

  if (isLoading) return <Loader/>;

  return (
    <>
      <Background>
        <CardContainer>
          {allBooks.map((book, index) => {
            return (
              /*all data and buttons to edit and delete*/
              <CardAll key={index}>
                <section className="cover">
                  <img src={icon} alt="placeholder for bookcover" />
                </section>
                <section className="info">
                  <p className="text">Titel: {book ? book.title : ''}</p>
                  <p className="text">Author: {book ? book.author : ''}</p>
                  <p className="text">
                    Amount in Stock: {book ? book.total_amount : ''}
                  </p>
                  <p className="text">
                    Number of pages: {book ? book.pages : ''}
                  </p>
                  <p className="text">Isbn: {book ? book.isbn : ''}</p>
                </section>
                <section className="actions">
                  <Link to={`/books/edit/${book.id}`}>
                    <button>Edit</button>
                  </Link>

                  <button onClick={remove(book.id)}>Delete</button>
                </section>
              </CardAll>
            );
          })}
        </CardContainer>
        <BackButton />
      </Background>
    </>
  );
}

export default AllBooks;
