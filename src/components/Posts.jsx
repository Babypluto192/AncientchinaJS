import React, { useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import classes from "../style/Posts.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import ChinaHistory from "../images/chinaHistory.jpg"
import ChinaFilosophy from "../images/chinaPhylosophy.jpg"
import ChinaReligia from "../images/chinaReliqia.jpg"
import ChinaArt from "../images/chinaArt.jpg"
import ChinaArchitecture from "../images/chinaArchitecture.jpg"
import ChinaDinasty from "../images/chinaDinasty.jpg"
import ChinaDinasty2 from "../images/chinaDinasty2.jpg"
import placeholder from "../images/placeholder.jpg";
import {useInView} from "framer-motion";
import {Card} from "react-bootstrap";
import InteresnieFacti from "../images/chinaFacti.jpg"

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    return (
        <section ref={ref}>
      <span
          style={{
              transform: isInView ? "none" : "translateY(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.2s cubic-bezier(0.37, 0.75, 0.55, 1) 0.9s"
          }}
      >
        {children}
      </span>
        </section>
    );
}


function Posts  (props) {
    let image = ''
    switch (props.post.key){
        case 1: image = ChinaHistory
            break;
        case 2: image = ChinaFilosophy
            break;
        case 3: image = ChinaReligia
            break;
        case 4: image = ChinaArt
            break;
        case 5: image = ChinaArchitecture
            break;
        case 6: image = ChinaDinasty
            break;
        case 7: image = ChinaDinasty2
            break;
        case 8: image = InteresnieFacti
            break;
        default: image = placeholder;
    }
    let newtext = ''
    const a = props.post.text.length
    if(props.post.key === 1 || props.post.key === 6) {
         newtext = props.post.text.slice(0, a / 2)
    } else if(props.post.key === 7 || props.post.key === 5) {
         newtext = props.post.text.slice(0, a / 12)
    }  else {
        newtext = props.post.text.slice(0, a / 7)
    }



const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



    return(
    <Section >
    <Card  id ={`post${props.post.key}`} className=" text-white mt-3 mx-3">
        <Card.Img src={image} style={{height: 470}}
                  alt="Card image"/>
        <Card.ImgOverlay>
            <Card.Title className={classes.text}>{props.post.title}</Card.Title>
            <Card.Text className ={classes.text}>
                {`${newtext} ... `}
            </Card.Text>
            <Button variant="dark" onClick={handleShow} className={classes.button}>
                Посмотреть полностью
            </Button>
            <Offcanvas  show={show} onHide={handleClose} className="bg-success" placement="top" style={{display: "flex", top: 100 , width: 1700, left: 100, height: 600, fontSize: 20, color: "#ffffff"}}>
                <Offcanvas.Header closeButton >
                    <Offcanvas.Title>{props.post.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body  >
                    {props.post.text}
                </Offcanvas.Body>
            </Offcanvas>
        </Card.ImgOverlay>



    </Card>
    </Section>
);
}




export default Posts;