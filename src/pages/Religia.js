import React, {useRef, useState} from 'react';
import Card from "react-bootstrap/Card";
import image from "../images/chinaReliqia.jpg"
import posts from "../posts";
import Button from "react-bootstrap/Button";
import OffCanvas from "../components/OffCanvas";
import {useInView} from "framer-motion";
import Quiz from "../components/Quiz";
import phone from "../images/pholetoviiphone.jpg"
const questions = [{
    key: 1,
    questionText: "Какое учение стало доминирующим в Китае в период с Ханьской до Танской династий?",
    answersOptions: [
        {optionText: "Даосизм", isCorect: false},
        {optionText: "Конфуцианство ", isCorect: true},
        {optionText: "Буддизм", isCorect: false},
        {optionText: "Шинтоизм", isCorect: false}
    ]
}, {
    key: 2,
    questionText: "Какое учение было разработано Лао Цзы в IV веке до нашей эры?",
    answersOptions: [
        {optionText: "Конфуцианство", isCorect: false},
        {optionText: "Даосизм", isCorect: true},
        {optionText: "Буддизм", isCorect: true},
        {optionText: "Шинтоизм", isCorect: false}
    ]
}, {
    key: 3,
    questionText: "Какой из этих китайских богов является богом войны?",
    answersOptions: [
        {optionText: "Юй Фэй", isCorect: false},
        {optionText: "Фу Хэй", isCorect: false},
        {optionText: "Цай Шэн", isCorect: true},
        {optionText: "Гуань Ди", isCorect: false}
    ]
}, {
    key: 4,
    questionText: "Какое учение пришло в Китай из Индии в эпоху Ханьской династии??",
    answersOptions: [
        {optionText: "Даосизм", isCorect: true},
        {optionText: "Конфуцианство ", isCorect: false},
        {optionText: "Буддизм", isCorect: false},
        {optionText: "Шинтоизм", isCorect: false}
    ]
}, {
    key: 5,
    questionText: "Кто является основателем конфуцианства?",
    answersOptions: [
        {optionText: "Лао Цзы", isCorect: false},
        {optionText: "Мэн Цзы ", isCorect: false},
        {optionText: "Конфуций", isCorect: true},
        {optionText: "Мо Ди", isCorect: false}
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
const post = posts[2]
let images = image

const Religia= () => {
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

export default Religia;