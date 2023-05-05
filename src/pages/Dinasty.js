import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import image from "../images/chinaDinasty.jpg"
import posts from "../posts";
import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import {ListGroup} from "react-bootstrap";
import Quiz from "../components/Quiz";
import phone from "../images/1657200180_1-pibig-info-p-yarko-fioletovii-fon-1.jpg"
const questions = [{
    key: 1,
    questionText: "Какая династия была первой династией древнего Китая?",
    answersOptions: [
        {optionText: " Династия Мин", isCorect: false},
        {optionText: "Династия Цинь", isCorect: false},
        {optionText: "Династия Шан", isCorect: true},
        {optionText: "Династия Хань", isCorect: false}
    ]
}, {
    key: 2,
    questionText: "Какая династия правила Китаем на протяжении наиболее длительного периода времени?",
    answersOptions: [
        {optionText: "Династия Чжоу", isCorect: true},
        {optionText: "Династия Хань", isCorect: false},
        {optionText: "Династия Тан", isCorect: false},
        {optionText: "Династия Сун", isCorect: false}
    ]
}, {
    key: 3,
    questionText: "Какая династия представляет собой Золотой век китайской культуры?",
    answersOptions: [
        {optionText: "Династия Мин", isCorect: false},
        {optionText: "Династия Цинь", isCorect: false},
        {optionText: "Династия Чжоу", isCorect: false},
        {optionText: "Династия Тан", isCorect:  true}
    ]
}, {
    key: 4,
    questionText: "Какую династию можно назвать династией великих завоевателей ?",
    answersOptions: [
        {optionText: "Династия Сун", isCorect: false},
        {optionText: "Династия Хань ", isCorect: false},
        {optionText: "Династия Цинь", isCorect:  true},
        {optionText: "Династия Чжоу", isCorect: false}
    ]
}, {
    key: 5,
    questionText: "Какая династия установила связи с западными странами через Шелковый путь??",
    answersOptions: [
        {optionText: "Династия Мин", isCorect: false},
        {optionText: " Династия Тан ", isCorect: false},
        {optionText: "Династия Шан", isCorect: false},
        {optionText: "Династия Хань", isCorect:  true}
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
const post = posts[5]
let images = image

const Dinasty= () => {
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
                    <Card.Text  className = "px-4"style = {{fontSize: 20}}  >
                        C 2070 г. до н.э. и по 1912 г на китайском троне сменилось 14 династий. Есть обрывочные сведения о первых правителях, которые с 4-3 тыс. до н.э. возглавляли Китайское государство. Но точно неизвестно, передавалась ли их власть по наследству.

                        Династии Китая в хронологическом порядке
                        О первых династиях нет достоверных свидетельств, поэтому их относят к мифическим. Перечень известных китайских императорских семейств:  </Card.Text>
                    <ListGroup >
                       <ListGroup.Item> Ся    2070 г. – 1600 г. до н.э.</ListGroup.Item>
                        <ListGroup.Item> Шан    1600 г. – 1046 г. до н.э.</ListGroup.Item>
                        <ListGroup.Item> Чжоу    1066 г. – 256 г. до н.э.</ListGroup.Item>
                        <ListGroup.Item>Цинь    221 г. – 206 г. до н.э.</ListGroup.Item>
                        <ListGroup.Item> Хань    206 г. до н.э. – 220 г. н.э.</ListGroup.Item>
                        <ListGroup.Item> Цзинь    265 г. – 420 г.</ListGroup.Item>
                        <ListGroup.Item> Ляо    907 – 1125 гг.</ListGroup.Item>
                        <ListGroup.Item>Сун    960 – 1279 гг.</ListGroup.Item>
                        <ListGroup.Item>Цзинь    1115 – 1234 гг. </ListGroup.Item>
                        <ListGroup.Item>Мин    1368 – 1644 гг. </ListGroup.Item>
                        <ListGroup.Item>Цин    1644 – 1912 гг. </ListGroup.Item>
                    </ListGroup>
                    <Button  className="primary mt-3" onClick={handleQuiz}>
                        Пройти тест по теме
                    </Button >
                </Card.ImgOverlay>
            </Card>

        </Section>
    )
}

export default Dinasty;