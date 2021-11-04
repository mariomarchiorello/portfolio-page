import React from 'react';
import {Background} from "../../Styles/globalstyle";
import image from "../../Assets/404_image.png"
import {Link} from "react-router-dom";
function NotFound() {
    return (
        <>
            <Background >
                <div className={"not-found-page"}>
                    <img src={image} alt={"404 meme"}/>
                    <h3>Please follow <Link to={"/portfolio-page"}> this link</Link> to my website!</h3>

                </div>

            </Background>

        </>
    );
}

export default NotFound;