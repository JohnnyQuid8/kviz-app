// import './App.css';
import React from "react";
import HomePage from "./components/HomePage";
import QuizPage from "./components/QuizPage";

function App() {

  const [isShown, setIsShown] = React.useState(true);



  return (
    <div className="App">
      {isShown ? (
        <HomePage setIsShown={setIsShown}/>
      ) : (
        <QuizPage />
      )}



    </div>
  );
}

export default App;
