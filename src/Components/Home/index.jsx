import React, {useEffect, useState} from 'react';
import Header from "../Header";
import {Background, Card, CardContainer} from "../../Styles/globalstyle";
import coverIcon from "../../Assets/book_cover_placeholder.png";

export default function Home() {

    const [allBooks, setAllBooks] = useState([])

    useEffect(()=> {
        const config = {
            method:"GET",
            headers: new Headers({
                "content-Type": "application/json"
            })
        }
        const url = "https://5c6eb0534fa1c9001424240b.mockapi.io/api/v1/books"
        fetch(url,config)
            .then(res=>res.json())
            .then(data=>setAllBooks(data))
            .catch(err=>{
                console.error(err)
            })
    },[])

    const latest = allBooks[allBooks.length-1]

        return (
            <>
                <Background>
                    <Header/>
                        <CardContainer>
                            <Card>
                                <section className="titel">newest book in stock</section>
                                <section className="content">
                                <div className="left">
                                    <img src={coverIcon} alt={"book cover"}/>
                                </div>
                                <div className="right">
                                    <p>Titel:<br/></p>
                                    <p className="text">{latest? latest.title:""}</p>
                                    <p>Author:<br/></p>
                                    <p className="text">{latest?latest.author:""}</p>
                                </div>
                                </section>
                            </Card>
                        </CardContainer>

                    <CardContainer>
                        <p>Browse all books</p>
                    </CardContainer>
                    <CardContainer>
                        <p>Add New Book</p>
                    </CardContainer>

                </Background>

            </>
        );


}
