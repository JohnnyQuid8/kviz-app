import React from "react";

export default function HomePage({ setIsShown }) {

    return (
        <div className="HomePage">
            <h1 className="opening-header">Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={() => setIsShown(false)} className={'start-quiz'}>Start Quiz</button>


        </div>
    )
}