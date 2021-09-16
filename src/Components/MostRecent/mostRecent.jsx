import React from 'react';
import { CardContainer } from '../../Styles/globalstyle';
import { useAllBooks } from '../../Api';

function MostRecent(props) {
  const { data: allBooks, isLoading } = useAllBooks();
  if (isLoading) return null;

  // const mostRecent = allBooks[allBooks.length - 1]
  // console.log(mostRecent)

  return (
    <>
      <CardContainer></CardContainer>
    </>
  );
}

export default MostRecent;
