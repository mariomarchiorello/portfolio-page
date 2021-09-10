import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import {Background, Input, Label} from "../../Styles/globalstyle";
import Header from "../Header";
import {PostFormContainer} from "./style";
import BackButton from "../BackButton";

const ChangeBook=(props)=> {
    /*---------------get the id specific id--------------------------------------------------*/
    const id = sessionStorage.getItem("currentId")
    console.log("from in da edit render", id)


    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [amount, setTotalAmount] = useState("")
    const [pages, setPages] = useState("")
    const [isbn, setIsbn] = useState("")
    const [currentBook, setCurrentBook] = useState("")

    const history = useHistory()

    /*---------------- get info from book that will be changed----------------------------*/
    useEffect(() => {
        const config = {
            method: "GET",
            headers: new Headers({
                "content-Type": "application/json"
            })
        }
        const url = `https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/${id}`
        fetch(url, config)
            .then(res => res.json())
            .then(data =>
                setCurrentBook(data))
            .catch(err => {
                console.error(err)
            })
    }, [id]);

    /*------------- update old book-------------------------------------------------------*/
    const editBook = (e) => {
        e.preventDefault();
        const editCredentials = {
            id: id,
            title: title,
            author: author,
            amount: amount,
            pages: pages,
            isbn: isbn
        }
        const config = {
            method: "PUT",
            body: JSON.stringify(editCredentials),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }
        fetch(`https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books/${id}`, config)
            .then(res => {
                res.json()
            })
            .then(data => {
                history.push("/")
            })
            .catch(err => console.error(err))
    }
    return (
        <>
            <Background>
                <Header/>
                {currentBook ? <PostFormContainer>
                    <section className="text"> change {currentBook.title}</section>
                    <section className="form">
                        <Label htmlFor="title">Title: {currentBook.title}</Label>
                        <Input
                            required
                            placeholder="new Title"
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>

                        <Label htmlFor="author">Author: {currentBook.author}</Label>
                        <Input
                            required
                            placeholder="new Author"
                            type="text"
                            name="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}/>
                        <Label htmlFor="amount">Amount in stock: {currentBook.total_amount}</Label>
                        <Input
                            required
                            placeholder="new amount"
                            type="number"
                            name="amount"
                            value={amount}
                            onChange={(e) => setTotalAmount(e.target.value)}/>
                        <Label htmlFor="pages">Number of pages: {currentBook.pages}</Label>
                        <Input
                            required
                            placeholder="new number of pages"
                            type="number"
                            name="pages"
                            value={pages}
                            onChange={(e) => setPages(e.target.value)}/>
                        <Label htmlFor="isbn">ISBN: {currentBook.isbn}</Label>
                        <Input
                            required
                            placeholder="new isbn number"
                            type="text"
                            name="isbn"
                            value={isbn}
                            onChange={(e) => setIsbn(e.target.value)}/>
                    </section>

                    <section className="button">

                        <button onClick={editBook}>save changes</button>
                    </section>
                </PostFormContainer> : null}
            <BackButton/>
            </Background>

        </>
    );

}


export default ChangeBook