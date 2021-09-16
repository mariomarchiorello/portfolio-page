import styled from 'styled-components'
import { Card } from '../../Styles/globalstyle'

export const CardAll = styled(Card)`
    height: 40vh;
    display: flex;
    flex-direction: column;
    margin-top: 1%;
    margin-bottom: 1%;
    justify-content: center;
    align-items: center;
    box-shadow: 5px 10px 11px 3px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 5px 10px 11px 3px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 5px 10px 11px 3px rgba(0, 0, 0, 0.6);
    outline: transparent;

    h2 {
        margin: 2% 0 0 0;
        color: #004fa0;
    }

    section {
        margin-top: 2%;
        margin-left: 3%;

        .cover {
            height: 25%;
            width: 25%;
            @media (min-width: 480px) {
                width: 15%;
            }
        }
    }

    .info {
        height: 55%;
        width: 85%;

        p.text {
            text-transform: capitalize;
            line-height: 1.5;
        }
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 1%;
        width: 80%;

        button {
            height: 30px;
            width: 80px;
            border: none;
            outline: transparent;
            border-radius: 10px;
            font-weight: bolder;
            transition: background-color 0.5s, color 0.5s;

            :hover {
                background-color: rgba(28, 125, 226, 0.83);
                color: white;
            }
        }
    }
`
