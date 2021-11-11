import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Background, Input, Label } from '../../Styles/globalstyle';
import { PostFormContainer } from '../AddBook/style';
import BackButton from '../../Components/BackButton/backButton';
import { useBook, useEditBook } from '../../Api';
import toast from 'react-hot-toast';

const initialBook = {
  title: '',
  author: '',
  total_amount: 0,
  pages: 0,
  isbn: '',
};

const EditBook = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, isLoading } = useBook(id);
  const { mutateAsync: updateBook } = useEditBook(id);

  /*----when the input changes the new state is saved within the book object,
   * ---- the parameter name will stand for the  "key" and "value" stands for it's value
   * ----- this makes writing  -- const [val, setVal] = useState()-- for every pair in the book redundant*/

  const [book, setBook] = useState(initialBook);

  useEffect(() => {
    if (data) {
      setBook(data);
    }
  }, [data]);

  const handleChange = ({ target: { value, name } }) => {
    setBook(book => ({ ...book, [name]: value }));
  };

  /*--------------------- save updates---------------------------*/
  const update = async event => {
    event.preventDefault();

    await updateBook(book);

    toast('update was successful', {
      duration: 4000,
      position: 'top-center',
    });

    history.push('/books');
  };
  /*------------discard changes before saving------------------*/
  const reset = event => {
    event.preventDefault();

    setBook(data);
  };

  if (isLoading) return null;

  return (
    <>
      <Background>
        {book ? (
          <PostFormContainer id="form">
            <section className="text"> change {book.title}</section>
            <section className="form">
              <Label htmlFor="title">Title: {book.title}</Label>
              <Input
                required
                placeholder="new Title"
                type="text"
                name="title"
                value={book.title}
                onChange={handleChange}
              />

              <Label htmlFor="author">Author: {book.author}</Label>
              <Input
                required
                placeholder="new Author"
                type="text"
                name="author"
                value={book.author}
                onChange={handleChange}
              />
              <Label htmlFor="amount">Amount in stock: {book.amount}</Label>
              <Input
                required
                placeholder="new amount"
                type="number"
                name="amount"
                value={book.amount}
                onChange={handleChange}
              />
              <Label htmlFor="pages">Number of pages: {book.pages}</Label>
              <Input
                required
                placeholder="new number of pages"
                type="number"
                name="pages"
                value={book.pages}
                onChange={handleChange}
              />
              <Label htmlFor="isbn">ISBN: {book.isbn}</Label>
              <Input
                required
                placeholder="new isbn number"
                type="text"
                name="isbn"
                value={book.isbn}
                onChange={handleChange}
              />
            </section>

            <section className="button">
              <button onClick={reset}>discard changes</button>
              <button onClick={update}>save changes</button>
            </section>
          </PostFormContainer>
        ) : null}
        <BackButton />
      </Background>
    </>
  );
};

export default EditBook;
