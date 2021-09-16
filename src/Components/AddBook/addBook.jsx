import React, { useState } from 'react';
import { Background, Input, Label } from '../../Styles/globalstyle';
import { PostFormContainer } from './style';
import { useHistory } from 'react-router-dom';
import BackButton from '../BackButton';
import { useAddBook } from '../../Api';

const initialBook = {
  title: '',
  author: '',
  total_amount: '',
  pages: '',
  isbn: '',
};

function AddBook(props) {
  const { mutateAsync: addBook } = useAddBook();

  /*------- adding new book without the useState for every key-Val-Pair-----------*/
  const [newBook, setNewBook] = useState(initialBook);

  const newValue = ({ target: { value, name } }) => {
    setNewBook(newBook => ({ ...newBook, [name]: value }));
  };

  const add = async e => {
    e.preventDefault();
    await addBook(newBook);
    history.push('/');
    // TODO show toast
  };

  const history = useHistory();

  return (
    <>
      <Background>
        <PostFormContainer>
          <section className="text">
            Fill in the information about the new book
          </section>
          <section className="form">
            <Label htmlFor="title">Title</Label>
            <Input
              required
              type="text"
              name="title"
              value={newBook.title}
              onChange={newValue}
            />

            <Label htmlFor="author">Author</Label>
            <Input
              required
              type="text"
              name="author"
              value={newBook.author}
              onChange={newValue}
            />
            <Label htmlFor="amount">Amount in stock</Label>
            <Input
              required
              type="number"
              name="amount"
              value={newBook.amount}
              onChange={newValue}
            />
            <Label htmlFor="pages">Number of pages</Label>
            <Input
              required
              type="number"
              name="pages"
              value={newBook.pages}
              onChange={newValue}
            />
            <Label htmlFor="isbn">ISBN</Label>
            <Input
              required
              type="number"
              name="isbn"
              value={newBook.isbn}
              onChange={newValue}
            />
          </section>
          <section className="button">
            <button onClick={add}>Add to Library</button>
          </section>
        </PostFormContainer>

        <BackButton />
      </Background>
    </>
  );
}

export default AddBook;
