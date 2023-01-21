import React, { useEffect, useState } from "react";
import Questions from "./Questions";

export default function QuizPage() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple").
            then(response => response.json()).
            then(data => setData(data.results))

    };
    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className="QuizPage">
            <Questions data={data} />

        </div>
    );

}
