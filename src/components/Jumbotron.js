import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/back.jpg'

const Styles = styled.div`
    .jumbo {
        background: url(${img}) no-repeat fixed bottom;
        background-size: cover;
        color: #fff;
        height: 400px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.4;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 0; 
    }

    .overlay-text {
        z-index: 1;
    }
`;
export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <div className="overlay-text">
                    <h1>Welcome</h1>
                    <p>Schedule an appointment with Doctor Freckles</p>
                </div>
            </Container>

        </Jumbo>
    </Styles>
)
