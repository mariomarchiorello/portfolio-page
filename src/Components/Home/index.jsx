import React from 'react';
import {Background, CardContainer} from "../../Styles/globalstyle";
import {Link} from "react-router-dom";
import icon from "../../Assets/book_cover_placeholder.png";
import {CardAll} from "../SeeAllBooks/style";

export default function Home() {



        return (
            <>
                <Background>
                        <CardContainer>
                                    <CardAll className="onHomePage">
                                        <h2>newest book in stock</h2>
                                    <section className="cover">
                                        <img src={icon} alt="placeholder for bookcover"/>
                                    </section>
                                    <section className= "info">
                                        {/*<p className="text">Titel: {latest? latest.title:""}</p>*/}
                                        {/*<p className="text">Author: {latest? latest.author:""}</p>*/}
                                        {/*<p className="text">Amount in Stock: {latest? latest.total_amount:""}</p>*/}
                                        {/*<p className="text">Number of pages: {latest? latest.pages:""}</p>*/}
                                    </section>
                                        <section className="actions">


                                    </section>
                                </CardAll>
                        </CardContainer>

                    <CardContainer><Link to="/books" className="buttonCard" >Browse all books</Link></CardContainer>
                    <CardContainer><Link to="/add" className="buttonCard">Add New Book</Link></CardContainer>

                </Background>

            </>
        );


}
