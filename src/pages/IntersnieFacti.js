import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import image from "../images/201121_0943_000.jpg"
import posts from "../posts";
import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import {ListGroup} from "react-bootstrap";
import facti from "../facti"
import Quiz from "../components/Quiz";
import phone from "../images/1657200180_1-pibig-info-p-yarko-fioletovii-fon-1.jpg"
const questions = [{
    key: 1,
    questionText: "Какое из этих изобретений не появилось в Древнем Китае?",
    answersOptions: [
        {optionText: "бумага", isCorect: false},
        {optionText: "компас", isCorect: false},
        {optionText: "порох", isCorect: false},
        {optionText: "стекло", isCorect: true}
    ]
}, {
    key: 2,
    questionText: "Какое из этих животных было символом императорской власти в Древнем Китае?",
    answersOptions: [
        {optionText: "дракон", isCorect: true},
        {optionText: "лев", isCorect: false},
        {optionText: "феникс", isCorect: false},
        {optionText: "змея", isCorect: false}
    ]
}, {
    key: 3,
    questionText: "Какие из этих кулинарных традиций появились в Древнем Китае?",
    answersOptions: [
        {optionText: "суши", isCorect: false},
        {optionText: "пекинская утка", isCorect: true},
        {optionText: "пицца", isCorect: false},
        {optionText: "гамбургеры", isCorect: false}
    ]
}, {
    key: 4,
    questionText: "Какая из этих игр была придумана в Древнем Китае?",
    answersOptions: [
        {optionText: "шахматы", isCorect: false},
        {optionText: "го ", isCorect: true},
        {optionText: "покер", isCorect: false},
        {optionText: "шашки", isCorect: false}
    ]
}, {
    key: 5,
    questionText: "Какое древнекитайское искусство было основано на искусстве обмана глаза?",
    answersOptions: [
        {optionText: "граффити", isCorect: false},
        {optionText: "каллиграфия ", isCorect: false},
        {optionText: "резьба по дереву", isCorect: false},
        {optionText: "живопись", isCorect: true}
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

const post = posts[0]
let images = image

const InteresnieFacti = () => {




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
                    <ListGroup>
                    {facti.map (fact =>
                        <ListGroup.Item as="li" style={{width:1000}}>{fact.key}.  {fact.text}</ListGroup.Item>
                    )}
                    </ListGroup>
                    <Button className="primary mt-3" onClick={handleQuiz}>
                        Пройти тест по теме
                    </Button>
                </Card.ImgOverlay>
            </Card>


        </Section>
    )

}
export default InteresnieFacti;

