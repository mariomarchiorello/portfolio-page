import React from 'react';
import {Background, CardContainer} from "../../Styles/globalstyle";
import {CardAll} from "./style";
import icon from "../../Assets/book_cover_placeholder.png"
import {Link} from "react-router-dom";
import BackButton from "../BackButton";
import {useAllBooks} from "../../Api";


function AllBooks(props) {
    /*loop over array of all books and return a card for each element*/
    const {data: allBooks, isLoading} = useAllBooks()



    /*-----------------book delete by id  function--------------------------------------*/
    const bookDeleter= (id)=>{
    const config = {
            method: "DELETE",
            headers: new Headers({
                "content-Type": "application/json"
            })
        }
        const url = `https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/${id}`
        fetch(url, config)
            .then(res => {
                console.log(res)
                res.json()})

            .catch(err => {
                console.error(err)
            })}


    if (isLoading) return null

    return (
        <>
            <Background>
                <CardContainer>
                    {

                        allBooks.map((book,index)=>{
                            return(
                                /*all data and buttons to edit and delete*/
                                <CardAll key={index}>
                                    <section className="cover">
                                        <img src={icon} alt="placeholder for bookcover"/>
                                    </section>
                                    <section className= "info">
                                        <p className="text">Titel: {book? book.title:""}</p>
                                        <p className="text">Author: {book? book.author:""}</p>
                                        <p className="text">Amount in Stock: {book? book.total_amount:""}</p>
                                        <p className="text">Number of pages: {book? book.pages:""}</p>
                                        <p className="text">Isbn: {book? book.isbn:""}</p>
                                    </section>
                                    <section className="actions">
                                        {book ? <Link to={`books/${book.id}`}><button>Edit</button></Link>:null}
                                        {book ? <Link to="/" onClick={()=>bookDeleter(book.id)}><button>Delete</button></Link>:null}

                                    </section>
                                </CardAll>
                            )
                        })
                    }

                </CardContainer>
            <BackButton/>
            </Background>

        </>
    );
}

export default AllBooks;