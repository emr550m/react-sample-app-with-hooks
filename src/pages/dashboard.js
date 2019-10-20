import React, { Component, useState, useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb, Modal } from 'react-bootstrap';

export default function Dashboard() {
    const [state,setState]= useState({title:"" , name: "", show:false});
    const history = useHistory();
    const app = useSelector(state => state.app);
    const dashboard = useSelector(state => state.dashboard);
    const dispatch = useDispatch()

    function UpdateShow(value) { 
        setState({...state, show:value});
    }

    function UpdateTitleValue(e) { 
        setState({...state, title:e.target.value});
    }

    function UpdateTitle() {
        dispatch({ type: "SET_TITLE", title: state.title });
    }

    function UpdateNameValue(e) { 
        setState({...state,name:e.target.value});
    }

    function UpdateName() {
        dispatch({ type: "SET_NAME", name: state.name });
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
                            <Form.Control type="text" placeholder="Enter New Title" onChange={UpdateTitleValue} value={state.title} />
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
                            <Form.Control type="text" placeholder="Enter New Nametle" onChange={UpdateNameValue} value={state.name} />
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
            <Modal show={state.show} onHide={handleClose}>
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