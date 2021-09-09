import React from 'react';
import Header from "../Header";
import MostRecent from "../MostRecent/index´";
import {Background, CardContainer} from "../../Styles/globalstyle";

function Home(props) {
    return (
        <>
            <Background>
                <Header/>
                <MostRecent/>
                <CardContainer>
                    <p>Brows all books</p>
                </CardContainer>
                <CardContainer>
                    <p>Add New Book</p>
                </CardContainer>

            </Background>

        </>
    );
}

export default Home;