import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import image from "../images/chinaArt.jpg"
import posts from "../posts";
import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import Quiz from "../components/Quiz";
import phone from "../images/pholetoviiphone.jpg"

const questions = [{
    key: 1,
    questionText: "Какое искусство было самым популярным в древнем Китае?",
    answersOptions: [
        {optionText: "живопись", isCorect: false},
        {optionText: " каллиграфия", isCorect: true},
        {optionText: "скульптура", isCorect: false},
        {optionText: "архитектура", isCorect: false}
    ]
}, {
    key: 2,
    questionText: "Как называется традиционный китайский стиль живописи, который использует густую, черную краску на белой бумаге?",
    answersOptions: [
        {optionText: "шуй-мо", isCorect: false},
        {optionText: "гун-би", isCorect: true},
        {optionText: "сяо-цзы", isCorect: false},
        {optionText: "цзинь-хуа", isCorect: false}
    ]
}, {
    key: 3,
    questionText: "Какое знаменитое здание находится в Пекине и является символом древней китайской архитектуры?",
    answersOptions: [
        {optionText: "Запретный город", isCorect: true},
        {optionText: "Башня Шанхай", isCorect: false},
        {optionText: "Гробница царя Му", isCorect: false},
        {optionText: " Храм Неба", isCorect: false}
    ]
}, {
    key: 4,
    questionText: "Какой материал был наиболее распространенным для создания скульптур в древнем Китае?",
    answersOptions: [
        {optionText: "бронза", isCorect: false},
        {optionText: "камень ", isCorect: true},
        {optionText: "дерево", isCorect: false},
        {optionText: "слоновая кость", isCorect: false}
    ]
}, {
    key: 5,
    questionText: "Как называется традиционный китайский музыкальный инструмент, который изображен на флаге Китая?",
    answersOptions: [
        {optionText: "гучжэнь", isCorect: true},
        {optionText: "эрху ", isCorect: false},
        {optionText: "пипа", isCorect: false},
        {optionText: "дизи", isCorect: false}
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
const post = posts[3]
let images = image

const Art= () => {
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
                    <Card.Title className = "pt-4 px-4" style = {{fontSize: 20 }}>{post.title}</Card.Title>
                    <Card.Text  className = "px-4" style = {{fontSize: 20}}  >
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

export default Art;