import React, { Component, useState, useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb, Modal } from 'react-bootstrap';

export default function Dashboard() {

    const [title, settitle] = useState("");
    const [name, setname] = useState("");
    const [show, setshow] = useState(false);
    const history = useHistory();
    const app = useSelector(state => state.app);
    const dashboard = useSelector(state => state.dashboard);
    const dispatch = useDispatch()

    function UpdateShow(value) {
        setshow(value);
    }

    function UpdateTitleValue(e) {
        settitle(e.target.value);
    }

    function UpdateTitle() {
        dispatch({ type: "SET_TITLE", title });
    }

    function UpdateNameValue(e) {
        setname(e.target.value);
    }

    function UpdateName() {
        dispatch({ type: "SET_NAME", name });
    }

    function handleClose() {
        history.push("login");
    }

    useEffect(() => {
        if (!app.login) {
            UpdateShow(true);
        }
    }, []);

    return (
        <div>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#login">Login</Breadcrumb.Item>
                    <Breadcrumb.Item href="#dashboard">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>{app.title} - {dashboard.name}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>User : {app.username}</Breadcrumb.Item>
                </Breadcrumb>
                <Form>
                    <Row>
                        <Col><Form.Group controlId="formBasicEmail">
                            <Form.Label>App Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter New Title" onChange={UpdateTitleValue} value={title} />
                            <Form.Text className="text-muted" >
                                Please set new title.
                            </Form.Text>
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={UpdateTitle} type="button">Set Title</Button>
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Row>
                        <Col><Form.Group controlId="formBasicEmail">
                            <Form.Label>App Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter New Nametle" onChange={UpdateNameValue} value={name} />
                            <Form.Text className="text-muted" >
                                Please set new name.
                            </Form.Text>
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={UpdateName} type="button">Set Name</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Security Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you need to login!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        OK
                       </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}