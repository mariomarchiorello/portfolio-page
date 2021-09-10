import React, {useState} from 'react';
import {Background,  Input, Label} from "../../Styles/globalstyle";
import Header from "../Header";
import {PostFormContainer} from "./style";
import { useHistory } from "react-router-dom";


function AddNewBook(props) {

    const history=useHistory()

    const [title, setTitle]=useState("")
    const [author, setAuthor]=useState("")
    const [amount, setTotalAmount]=useState("")
    const [pages, setPages]=useState("")
    const [isbn, setIsbn]=useState("")

    const lastId = sessionStorage.getItem("latestID")+1

    const addNewBook = (e) =>{
        e.preventDefault();

        const postCredentials = {
            id: lastId,
            title: title,
            author: author,
            amount: amount,
            pages: pages,
            isbn: isbn
        }
        const config = {
            method: "POST",
            body: JSON.stringify(postCredentials),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }
        fetch("https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books",config)
            .then(res=>{
                res.json()
                console.log(res.status)
            })
            .then(data=> {
                history.push("/")
                console.log(data)
            })
            .catch(err=>console.error(err))
    }
    return (
        <>
            <Background>
                <Header/>
                <PostFormContainer>
                    <section className="text"> Something about add a new book</section>
                    <section className="form">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            required
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}/>

                        <Label htmlFor="author">Author</Label>
                        <Input
                            required
                            type="text"
                            name="author"
                            value={author}
                            onChange={(e)=> setAuthor(e.target.value)}/>
                        <Label htmlFor="amount">Amount in stock</Label>
                        <Input
                            required
                            type="number"
                            name="amount"
                            value={amount}
                            onChange={(e)=> setTotalAmount(e.target.value)}/>
                        <Label htmlFor="pages">Number of pages</Label>
                        <Input
                            required
                            type="number"
                            name="pages"
                            value={pages}
                            onChange={(e)=> setPages(e.target.value)}/>
                        <Label htmlFor="isbn">ISBN</Label>
                        <Input
                            required
                            type="number"
                            name="isbn"
                            value={isbn}
                            onChange={(e)=> setIsbn(e.target.value)}/>
                    </section>
                    <section className="button">
                        <button onClick={addNewBook}>Add to Library</button>
                    </section>
                </PostFormContainer>

            </Background>

        </>
    );
}

export default AddNewBook;