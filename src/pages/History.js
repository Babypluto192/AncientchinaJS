import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import image from "../images/chinaHistory.jpg"
import posts from "../posts";
import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import Quiz from "../components/Quiz";
import phone from "../images/pholetoviiphone.jpg"

 const questions = [{
    key: 1,
    questionText: "Какую реку Китая называют «рекой тысячи бедствий»?",
    answersOptions: [
        {optionText: "Янцзы", isCorect: false},
        {optionText: "Хуанхэ", isCorect: true},
        {optionText: "Сицзян", isCorect: false},
        {optionText: "Зеленский", isCorect: false}
    ]
}, {
    key: 2,
    questionText: "Какой злак в Китае выращивали больше всего?",
    answersOptions: [
        {optionText: "Ячмень", isCorect: false},
        {optionText: "Пшеницу", isCorect: false},
        {optionText: "Рис", isCorect: true},

    ]
}, {
    key: 3,
    questionText: "Какую редкую ткань производили в Китае?",
    answersOptions: [
        {optionText: "Шелк", isCorect: true},
        {optionText: "Хлопок", isCorect: false},
        {optionText: "Бархат", isCorect: false},

    ]
}, {
    key: 4,
    questionText: "Как назывался торговый путь, через который товары из Китая попадали в Европу?",
    answersOptions: [
        {optionText: "Из варяг в греки", isCorect: false},
        {optionText: "Великий шелковый путь ", isCorect: true},
        {optionText: "Волжский путь", isCorect: false},

    ]
}, {
    key: 5,
    questionText: "Когда Китай стал единым государством?",
    answersOptions: [
        {optionText: "221г. до нашей эры", isCorect: true},
        {optionText: "153г. до нашей эры", isCorect: false},
        {optionText: "129г. до нашей эры", isCorect: false},

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

const History = () => {

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
export default History;

