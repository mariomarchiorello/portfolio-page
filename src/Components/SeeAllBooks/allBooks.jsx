import React from 'react'
import { Background, CardContainer } from '../../Styles/globalstyle'
import { CardAll } from './style'
import icon from '../../Assets/book_cover_placeholder.png'
import { Link } from 'react-router-dom'
import BackButton from '../BackButton'
import { useAllBooks } from '../../Api'

function AllBooks(props) {
    // const history = useHistory()
    const { data: allBooks, isLoading } = useAllBooks()
    // const [deleteId, setDeleteId] = useState()
    // const { mutateAsync: deleteBook} = useDeleteBook()

    /*const deleting =async event  =>{
        event.preventDefault();
        await deleteBook()
         history.push("/")
    }*/

    if (isLoading) return null

    return (
        <>
            <Background>
                <CardContainer>
                    {allBooks.map((book, index) => {
                        return (
                            /*all data and buttons to edit and delete*/
                            <CardAll key={index}>
                                <section className="cover">
                                    <img
                                        src={icon}
                                        alt="placeholder for bookcover"
                                    />
                                </section>
                                <section className="info">
                                    <p className="text">
                                        Titel: {book ? book.title : ''}
                                    </p>
                                    <p className="text">
                                        Author: {book ? book.author : ''}
                                    </p>
                                    <p className="text">
                                        Amount in Stock:{' '}
                                        {book ? book.total_amount : ''}
                                    </p>
                                    <p className="text">
                                        Number of pages:{' '}
                                        {book ? book.pages : ''}
                                    </p>
                                    <p className="text">
                                        Isbn: {book ? book.isbn : ''}
                                    </p>
                                </section>
                                <section className="actions">
                                    <Link to={`books/${book.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <Link to="/">
                                        <button>Delete</button>
                                    </Link>
                                </section>
                            </CardAll>
                        )
                    })}
                </CardContainer>
                <BackButton />
            </Background>
        </>
    )
}

export default AllBooks
