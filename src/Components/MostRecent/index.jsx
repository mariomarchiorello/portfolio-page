import React from 'react';
import {Card, CardContainer} from "../../Styles/globalstyle";
import coverIcon from "../../Assets/book_cover_placeholder.png"



function MostRecent(props) {

    // const details = props.stateToProps
    // console.log(details)





    return (
        <>
            <CardContainer>
                <Card>
                    <h1>newest book in stock</h1>
                    <section className="content">
                    <div className="left">
                        <img src={coverIcon} alt={"book cover"}/>
                    </div>
                    <div className="right">
                        <p>Titel:<br/></p>
                        {/*<p className="text">{details.title}</p>*/}
                        <p>Author:<br/></p>
                        {/*<p className="text">{details.author}</p>*/}
                    </div>
                    </section>
                </Card>
            </CardContainer>

        </>
    );
}

export default MostRecent;