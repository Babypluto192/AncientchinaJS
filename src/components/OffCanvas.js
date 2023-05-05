import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {FaEllipsisV} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";
import classes from "../style/offCanvas.Module.css";


function OffCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                <FaEllipsisV />
            </Button>



            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Навигация по сайу </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup>
                        <ListGroup.Item > <NavLink to="/" >Главная страница </NavLink> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/history" >История </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/phylosophia" >Философия </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/religia" >Религия </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/art" >Исскуство </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/architecture" >Архитектурное направление </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/dinasty" >Династии Список и другое </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/dinasty2 " >Династии  </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/facti " >Интересные Факты  </Link> </ListGroup.Item>
                        <ListGroup.Item> <Link to="/video " >Видео  </Link> </ListGroup.Item>
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}


export default OffCanvas;
