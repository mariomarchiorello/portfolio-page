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

    console.log(allBooks)
        return (
            <>
                <Background>
                    <Header/>
                        <CardContainer className="scene">
                {/*            <Card className="card">
                                <div className="card_face card_face--front">
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
                                </div>
                                <div className="card_face card_face--back">*/}
                                    <CardAll>
                                    <section className="titel">newest book in stock</section>
                                    <section className="cover">
                                        <img src={icon} alt="placeholder for bookcover"/>
                                    </section>
                                    <section className= "info">
                                        <p className="text">Titel: {latest? latest.title:""}</p>
                                        <p className="text">Author: {latest? latest.author:""}</p>
                                        <p className="text">Amount in Stock: {latest? latest.total_amount:""}</p>
                                        <p className="text">Number of pages: {latest? latest.pages:""}</p>
                                        <p className="text">Isbn: {latest? latest.isbn:""}</p>
                                    </section>
                                </CardAll>
                                {/*</div>*/}
                            {/*</Card>*/}
                        </CardContainer>

                    {allBooks?<Link to="/show-all" ><CardContainer  stateToProps={allBooks}><p className="buttonCard">
                        Browse all books</p></CardContainer></Link>:null}
                    <CardContainer>
                        <Link to="/add-new"><p className="buttonCard">Add New Book</p></Link>
                    </CardContainer>

                </Background>

            </>
        );


}
