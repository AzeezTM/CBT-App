import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useState } from "react";

const Home = () => {
  const nametoUpperCase = () => {
    return nail.charAt(0).toUpperCase() + nail.slice(1)
  }


  let nail = localStorage.getItem("LastName").replace(/"/g, "");
  const questions = [
    {
      ques: "What is the Name of the highest mountain in Nigeria?",
      options: [
        { answertext: "Suna hill", isCorrect: false },
        { answertext: "Chappal Wadi", isCorrect: true },
        { answertext: "Are hill", isCorrect: false },
        { answertext: "Mount Kilmanjaro", isCorrect: false },
      ],
    },

    {
      ques: "what is the Name of the most migratory mammal?",
      options: [
        { answertext: "Humpback Whale", isCorrect: true },
        { answertext: "Bat", isCorrect: false },
        { answertext: "Wildebeest", isCorrect: false },
        { answertext: "Shark", isCorrect: false },
      ],
    },
    {
      ques: "Which male mammal carries pregnancy and give birth?",
      options: [
        { answertext: "Dragon fly", isCorrect: false },
        { answertext: "Sea dragon", isCorrect: true },
        { answertext: "humback whale", isCorrect: false },
        { answertext: "Shark", isCorrect: false },
      ],
    },
    {
      ques: "what is the meaning of Chappa waddi?",
      options: [
        { answertext: "Mountain of prayer", isCorrect: false },
        { answertext: "Peak", isCorrect: false },
        { answertext: "Mountain of death", isCorrect: true },
        { answertext: "Mountain of deliverance", isCorrect: false },

      ],
    },

    {
      ques: "if Queen Elizabeth II is 81 this year,What will happen next?",
      options: [
        { answertext: "She will Die", isCorrect: false },
        { answertext: "She will celebration", isCorrect: false },
        { answertext: "She will be 82", isCorrect: true },
        { answertext: "Shark", isCorrect: false },

      ],
    },

  ]


  const [currentQues, setCurrentQues] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState();

  const Answer = [];
  // Answer.push(setScore);
  // console.log(Answer);




  const showMyScore = () => {
    setShowScore(true)

  }

  const addAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      Answer.push(setScore);
      console.log(Answer);

    }
  }

const handleNext = () => {
    const nextQuestion = currentQues + 1;
    if (nextQuestion < questions.length) {
      setCurrentQues(nextQuestion);
    } else {
      alert("you have finished your test, click submit to check your score")
    }

  }

  const handlePrevious = () => {
    setCurrentQues((prevQuestion) => {
      if (prevQuestion == 0) {

        return 0;
      } else {
        return prevQuestion - 1;
        //alert("press next, No question to answer")
      }

    });
  };
  //const prevQuestion = currentQues - 1

  return (
    <>

      {/* 
      <div className="mb-3">
        <h1 className="text-light">Start your test, {nametoUpperCase(nail)}</h1>
      </div> */}


      <div className="question display text-dark">
        {showScore ? (
          <div className="score-section">
            <h2>You scored {score} out of {questions.length}</h2>

          </div>


        ) : (
          <>

            <div className="question-section">
              <div className="question-count">
                <h1><span>Question {currentQues + 1}</span>/{questions.length}</h1>
              </div>

              <div className="question-text">
                <h3>{questions[currentQues].ques}</h3>
              </div><br />

              <div className="answer-section mb-5">

                {questions[currentQues].options.map((option, index) => (

                   <div className="btn1 btn btn-outline-success"  onClick={() => addAnswer(option.isCorrect)}>{option.answertext}</div>
                  // <div >
                  //   <input type="radio"
                  //     key={index}

                  //     checked
                  //     name="options"
                  //     onChange={() => addAnswer(option.isCorrect)}

                  //   />
                  //   <label htmlFor={option.index}>
                  //     {option.answertext}</label>
                  // </div>
                )

                )}
                {/* <input type="radio" checked name="options" onchange= {() => handleNext(option.isCorrect)}>{option.answertext}</input>))} */}

              </div>
              <div className="button">
                <button className=" btn btn-outline-info" onClick={handlePrevious}>previous</button>
                <button className="btn btn-outline-info" onClick={handleNext}>Next</button>
                <button className="btn btn-outline-info" onClick={showMyScore}>Submit</button>

              </div>

              {/* <div className="modal" tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}



              {/* <div>
              {questions.map(() => (
                <button className="btn btn-white" onClick={questions[key]}>{questions[key]}</button>
              ))}
            </div> */}
              {/* <button className="btn btn-light mb-2" onClick={questions[1]}> 1</button><br />
                <button className="btn btn-light mb-2" onClick={questions[2]}> 2</button><br />
                <button className="btn btn-light mb-2" onClick={questions[3]}> 3</button><br />
                <button className="btn btn-light mb-2" onClick={questions[4]}> 4</button><br /> */}
            </div>
          </>


        )}

      </div>
    </>

  )
}

export default Home;