import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import image from "../images/chinaDinasty2.jpg"
import posts from "../posts";
import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import Quiz from "../components/Quiz";
import phone from "../images/pholetoviiphone.jpg"

const questions = [{
    key: 1,
    questionText: "Какая династия установила правило Мандат неба ?",
    answersOptions: [
        {optionText: "Династия Шан", isCorect: false},
        {optionText: "Династия Цинь", isCorect: false},
        {optionText: "Династия Чжоу", isCorect: true},
        {optionText: "Династия Хань", isCorect: false}
    ]
}, {
    key: 2,
    questionText: "Какая династия ввела систему экзаменов на знание конфуцианской классики?",
    answersOptions: [
        {optionText: "Династия Хань", isCorect: false},
        {optionText: "Династия Тан", isCorect: false},
        {optionText: "Династия Сун", isCorect: false},
        {optionText: "Династия Суй", isCorect: true}
    ]
}, {
    key: 3,
    questionText: "Какую династию можно назвать династией маньчжуров ?",
    answersOptions: [
        {optionText: "Династия Цинь", isCorect: false},
        {optionText: "Династия Хань", isCorect: false},
        {optionText: "Династия Мин", isCorect: false},
        {optionText: "Династия Цин", isCorect: true}
    ]
}, {
    key: 4,
    questionText: "Какую династию называют Династией войн ?",
    answersOptions: [
        {optionText: "Династия Сун", isCorect: false},
        {optionText: "Династия Хань ", isCorect: false},
        {optionText: "Династия Чжоу", isCorect: false},
        {optionText: "Династия Странных", isCorect: true}
    ]
}, {
    key: 5,
    questionText: "Какая династия восстановила единство Китая после периода Разделенных Царств?",
    answersOptions: [
        {optionText: "Династия Шан", isCorect: false},
        {optionText: "Династия Мин ", isCorect: false},
        {optionText: "Династия Сун", isCorect: false},
        {optionText: "Династия Суй", isCorect: true}
    ]
}
]
function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    return (
        <section ref={ref}>
      <span
          style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.75, 0.55, 1) 0.8s"
          }}
      >
        {children}
      </span>
        </section>
    );
}
const post = posts[6]
let images = image

const Dinasty2= () => {
    const [show, setShow] = useState(false);
    const [quiz,setQuiz] = useState(false)
    const handleShow = () => setShow(!show);
    const handleQuiz = () => setQuiz(!quiz);

    if(show) {
        images = phone
    } else{
        images = image
    }
    return(
        <Section>
            <header>
                <OffCanvas />
                <h1>Древний Китай</h1>
                <Button className="primary" onClick={handleShow}>
                    Поменять фон
                </Button>
            </header>
            {quiz ?   <Quiz questions ={questions} quiz = {quiz} set ={setQuiz} />: null}
            <Card   id ={`post${post.key}`} className="text-white mt-3 mx-3">
                <Card.Img src={images} style={{height: "160vh"}}
                          alt="Card image"/>
                <Card.ImgOverlay>
                    <Card.Title className = "pt-4 px-4" style = {{fontSize: 20 }}>{post.title}</Card.Title>
                    <Card.Text  className = "px-4"style = {{fontSize: 20}}  >
                        {post.text}
                    </Card.Text>
                    <Button className="primary" onClick={handleQuiz}>
                        Пройти тест по теме
                    </Button>
                </Card.ImgOverlay>
            </Card>

        </Section>
    )
}

export default Dinasty2;