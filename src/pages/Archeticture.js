import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import image from "../images/chinaArchitecture.jpg"
import posts from "../posts";
import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import Quiz from "../components/Quiz";
const questions = [{
    key: 1,
    questionText: "Какие материалы использовались в китайской архитектуре для строительства стен и крыш зданий?",
    answersOptions: [
        {optionText: "Дерево и бамбук", isCorect: false},
        {optionText: "Глина и кирпич", isCorect: false},
        {optionText: "Камень и мрамор", isCorect: false},
        {optionText: "Дерево и керамика", isCorect: true}
    ]
}, {
    key: 2,
    questionText: "Как называется характерная черта китайской архитектуры, которая заключается в сочетании зданий и природы?",
    answersOptions: [
        {optionText: "Гармония", isCorect: true},
        {optionText: "Минимализм", isCorect: false},
        {optionText: "Эклектика", isCorect: false},
        {optionText: "Классицизм", isCorect: false}
    ]
}, {
    key: 3,
    questionText: "Что представляет собой традиционный китайский двор?",
    answersOptions: [
        {optionText: "Квадратный двор с зданиями по периметру и пустым центром", isCorect: true},
        {optionText: "Треугольный двор с крытым двором", isCorect: false},
        {optionText: "Округлый двор с водным прудом в центре", isCorect: false},
        {optionText: "Прямоугольный двор с зданиями в углах и плодородным садом посередине", isCorect: false}
    ]
}, {
    key: 4,
    questionText: "Как называется китайский элемент архитектуры, который представляет собой украшение на крыше здания, имитирующее гору?",
    answersOptions: [
        {optionText: "Фенг-шуй", isCorect: false},
        {optionText: "Пагода ", isCorect: false},
        {optionText: "Дагоба", isCorect: false},
        {optionText: "Гаоюэ ", isCorect: true}
    ]
}, {
    key: 5,
    questionText: "Как называется типичное здание, представляющее собой длинный одноэтажный дом, в котором жили несколько поколений одной семьи?",
    answersOptions: [
        {optionText: "Пагода", isCorect: false},
        {optionText: "Башня ", isCorect: false},
        {optionText: "Цзяюань", isCorect: false},
        {optionText: "Фу (терраса)", isCorect: true}
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
const post = posts[4]
let images = image

const Architecture= () => {
    const [show, setShow] = useState(false);
    const [quiz,setQuiz] = useState(false)
    const handleShow = () => setShow(!show);
    const handleQuiz = () => setQuiz(!quiz);

    if(show) {
        images = "https://pibig.info/uploads/posts/2022-07/1657200180_1-pibig-info-p-yarko-fioletovii-fon-1.jpg"
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
                <Card.Img src={images}
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

export default Architecture;