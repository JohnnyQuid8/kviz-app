import React from "react";
import Answer from './Answer'

export default function Questions(props) {


    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }


    return (
        <div className="container" >{props.data.map(item => {

            return <div className="row">
                <h1>{item.question}</h1>


                <Answer data={props.data} send={shuffle([item.correct_answer, ...item.incorrect_answers])} />


            </div>
        })}







            <button className="check-answers" onClick={getClick} >Check answers</button>

        </div>

    )
}
