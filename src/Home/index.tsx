import React from 'react';
import './Home.scss';
import '../common.scss';
// string...
// single quote..
export default function Home(){
    return (
        <div className="home">
        <section className="section">
            <h1 className="title">Welcome to the Quiz</h1>
            <h2>Please choose from the options below to host a quiz to participate.</h2>
        </section>
        <section className="section">
            <div className="button-container">
            <button className="button is-company-blue">Host a quiz</button>
            </div>
            <div className="button-container">
            <button className="button is-company-blue">Participate in quiz</button>
            </div>
        </section>

        </div>
    );
}