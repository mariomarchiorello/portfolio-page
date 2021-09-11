import React, {useEffect, useState} from 'react';
import {Background, CardContainer} from "../../Styles/globalstyle";
import Header from "../Header";
import {CardAll} from "./style";
import icon from "../../Assets/book_cover_placeholder.png"
import {Link} from "react-router-dom";
import BackButton from "../BackButton";


function ShowAll(props) {
    /*loop over array of all books and return a card for each element*/
        const [allBooks, setAllBooks] = useState([])
/*------------------ get all books------------------------------------------------*/
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

    /*-----------------book delete by id  function--------------------------------------*/
    const bookDeleter= (id)=>{
        // e.preventDefault()
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



    return (
        <>
            <Background>
                <Header/>
                <CardContainer>
                    {

                        allBooks.map((element,index)=>{
                            return(
                                /*all data and buttons to edit and delete*/
                                <CardAll key={index}>
                                    <section className="cover">
                                        <img src={icon} alt="placeholder for bookcover"/>
                                    </section>
                                    <section className= "info">
                                        <p className="text">Titel: {element? element.title:""}</p>
                                        <p className="text">Author: {element? element.author:""}</p>
                                        <p className="text">Amount in Stock: {element? element.total_amount:""}</p>
                                        <p className="text">Number of pages: {element? element.pages:""}</p>
                                        <p className="text">Isbn: {element? element.isbn:""}</p>
                                    </section>
                                    <section className="actions">
                                        {element ? <Link to="/change" onClick= {()=>sessionStorage.setItem("currentId",element.id)}><button>Edit</button></Link>:null}
                                        {element ? <Link to="/" onClick={()=>bookDeleter(element.id)}><button>Delete</button></Link>:null}

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

export default ShowAll;