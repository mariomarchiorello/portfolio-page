import styled from 'styled-components'

export const PostFormContainer = styled.form`
    color: white;
    position: fixed;
    top: 17vh;
    height: 60vh;
    width: 85vw;
    display: flex;
    flex-direction: column;
    background: linear-gradient(100deg, #004d9f 0%, #0ec8c8 90%);
    box-shadow: 1px 10px 11px 3px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 1px 10px 11px 3px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 1px 10px 11px 3px rgba(0, 0, 0, 0.6);
    @media (min-width: 480px) {
        height: 75vh;
        top: 21vh;
    }

    .text {
        height: 10%;
        text-align: center;
        line-height: 2;
        margin-top: 2%;
        font-size: large;
    }
    .form {
        display: flex;
        flex-direction: column;
    }
    .button {
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        @media (min-width: 480px) {
        }
        button {
            height: 100%;
            color: white;
            border: none;
            width: 50%;
            outline: transparent;
            background-color: #004d9f;
            :hover {
                -webkit-box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.12),
                    0px 8px 8px -4px rgba(0, 0, 0, 0.08);
                box-shadow: 0px 4px 6px -4px rgba(0, 0, 0, 0.12),
                    0px 8px 8px -4px rgba(0, 0, 0, 0.08);
                cursor: pointer;
                text-decoration: none;
                color: #fff;
            }
        }
    }
`
