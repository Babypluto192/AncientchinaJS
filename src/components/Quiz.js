import React from 'react';
import {useState} from "react";
import "../style/quiz.css"
import Offcanvas from "react-bootstrap/Offcanvas";

const Quiz = (props) => {



    const [curentQuestion, setcurentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const handleQuiz = () => props.set(!props.quiz);
    let corectOption = []

    const handleAnswerOpionsClick = (isCorect) => {
        if (isCorect) {
            setScore(score + 1)
        }


        const nextQuestion = curentQuestion + 1

        if (nextQuestion < props.questions.length) {
            setcurentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }
    props.questions.map( item => {
        item.answersOptions.map(item =>
            {
                if(item.isCorect){
                    corectOption.push(item.optionText)
                }
           return 0; }
        )
    return 0; })


    return (

        <Offcanvas show={props.quiz} className="bg-transparent"  placement="top" style={{display: "flex", top: 100 , width: 1700, left: 100, height: 600, fontSize: 20, color: "#ffffff" }}>
            <Offcanvas.Body  >
                <Offcanvas.Header closeButton onClick={handleQuiz}>
                </Offcanvas.Header>
        <div className="App">
            {showScore
                ? <div>
                    <div className="question_count"> Вы ответили правильно на {score} из {props.questions.length}  вопросов  </div>

                        Правильные ответы:
                {corectOption.map( (item, index) => <span key ={index} className="question_count"><br />

                        {item}


                     </span>
                )}
                </div>
                : <div className="quiz">
                    <div className="question_section">
                        <div className="question_count">
                            <span>Вопрос {curentQuestion + 1}</span> / {props.questions.length}
                        </div>
                        <div className="question_text">{props.questions[curentQuestion].questionText}</div>
                    </div>
                    <div className="answer_section">
                        {props.questions[curentQuestion].answersOptions.map( (item,index) => (
                                <button key={index} onClick={() => handleAnswerOpionsClick(item.isCorect)}> {item.optionText} </button>
                            )
                        )}
                    </div>
                </div>

            }
        </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default Quiz;