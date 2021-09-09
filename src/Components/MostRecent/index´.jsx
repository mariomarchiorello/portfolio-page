import React from 'react';
import {Card, CardContainer} from "../../Styles/globalstyle";
import coverIcon from "../../Assets/book_cover_placeholder.png"




function MostRecent(props) {
    return (
        <>
            <CardContainer>
                <Card>
                    <section className="titel">newest book in stock</section>
                    <section className="content">
                    <div className="left">
                        <img src={coverIcon} alt={"book cover"}/>
                    </div>
                    <div className="right">
                        <p>Titel:<br/></p>
                        <p>to be fetched</p>
                        <p>Author:<br/></p>
                        <p>to be fetched</p>
                    </div>
                    </section>
                </Card>
            </CardContainer>

        </>
    );
}

export default MostRecent;