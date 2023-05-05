import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";

import image from "../images/ChinaPhylosophy.jpg"
import posts from "../posts";



import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import Quiz from "../components/Quiz";
import phone from "../images/1657200180_1-pibig-info-p-yarko-fioletovii-fon-1.jpg"
const questions = [{
    key: 1,
    questionText: "Как называется энегрия, которая согласно древнекитайским верованиям, пронзает все вокруг?",
    answersOptions: [
        {optionText: "Си", isCorect: false},
        {optionText: "Ци", isCorect: true},
        {optionText: "Ти", isCorect: false},
        {optionText: "Хи", isCorect: false}
    ]
}, {
    key: 2,
    questionText: "По чьей воле происходили все события в представлении китайцев?",
    answersOptions: [
        {optionText: "Бог", isCorect: false},
        {optionText: "Небо", isCorect: true},
        {optionText: "Солнце", isCorect: false},
        {optionText: "Император", isCorect: false}
    ]
}, {
    key: 3,
    questionText: "Какова одна из особенностей древнекитайской философии?",
    answersOptions: [
        {optionText: "Культ личности", isCorect: false},
        {optionText: "Преклонение перед силой", isCorect: false},
        {optionText: "Взаимодействие мужского и женского начала", isCorect: true},
        {optionText: "Неуважение к предкам", isCorect: false}
    ]
}, {
    key: 4,
    questionText: "Что находится под покровительством духа инь?",
    answersOptions: [
        {optionText: "Земля", isCorect: true},
        {optionText: "Вода ", isCorect: false},
        {optionText: "Небо", isCorect: false},
        {optionText: "Растения", isCorect: false}
    ]
}, {
    key: 5,
    questionText: "Что означает ян?",
    answersOptions: [
        {optionText: "Вселенная", isCorect: false},
        {optionText: "Энегрия ", isCorect: false},
        {optionText: "Мужское начало", isCorect: true},
        {optionText: "Женское начало", isCorect: false}
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
const post = posts[1]
let images = image

const Phylosophia= () => {
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
            <Card.Img src={images} style={{height: "auto"}}
                      alt="Card image"/>
            <Card.ImgOverlay>
                <Card.Title style = {{fontSize: 20}}>{post.title}</Card.Title>
                <Card.Text style = {{fontSize: 20}}  >
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

export default Phylosophia;