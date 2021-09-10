import React, {useEffect, useState} from 'react';
import Header from "../Header";
import {Background, CardContainer} from "../../Styles/globalstyle";
// import coverIcon from "../../Assets/book_cover_placeholder.png";
import {Link} from "react-router-dom";
import icon from "../../Assets/book_cover_placeholder.png";
import {CardAll} from "../SeeAllBooks/style";

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
            .then(data=>
                setAllBooks(data))
            .catch(err=>{
                console.error(err)
            })
    },[])
    const latest = allBooks[allBooks.length-1]
    latest? sessionStorage.setItem("latestID", latest.id):sessionStorage.setItem("latestID", "")

        return (
            <>
                <Background>
                    <Header/>
                        <CardContainer className="scene">
                                    <CardAll>
                                        <h2>newest book in stock</h2>
                                    <section className="cover">
                                        <img src={icon} alt="placeholder for bookcover"/>
                                    </section>
                                    <section className= "info">
                                        <p className="text">Titel: {latest? latest.title:""}</p>
                                        <p className="text">Author: {latest? latest.author:""}</p>
                                        <p className="text">Amount in Stock: {latest? latest.total_amount:""}</p>
                                        <p className="text">Number of pages: {latest? latest.pages:""}</p>
                                    </section>
                                </CardAll>
                        </CardContainer>

                    {allBooks?<CardContainer><Link to="/show-all" className="buttonCard" stateToProps={allBooks} >Browse all books</Link></CardContainer>:null}
                    <CardContainer><Link to="/add-new" className="buttonCard">Add New Book</Link></CardContainer>

                </Background>

            </>
        );


}
