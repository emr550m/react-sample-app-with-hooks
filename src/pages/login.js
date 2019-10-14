import React, { Component , useState } from 'react'
import { connect , useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from "react-router";
import { Button, Form, Container, Row, Col, Breadcrumb } from 'react-bootstrap';

export default function Login (props) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const app = useSelector(state => state.app);
    const dashboard = useSelector(state => state.dashboard);
    const dispatch = useDispatch()

    function UpdateUsername(e) {
        setUsername(e.target.value) ;
    }
    function UpdatePassword(e) {
        setPassword( e.target.value);
    }

    function login() {
        dispatch({ type: "SET_LOGIN", login, username });
        history.push("dashboard");
    }

        return (
            <div><Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="#login">Login</Breadcrumb.Item>
                    <Breadcrumb.Item href="#dashboard">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" active>{app.title} - {dashboard.name}</Breadcrumb.Item>
                </Breadcrumb>
                <Form>
                    <Row>
                        <Col><Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" onChange={UpdateUsername} value={username} />
                            <Form.Text className="text-muted" >
                                Your Username is important. Do not share to anybody.
                                </Form.Text>
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col> <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={UpdatePassword} value={password} />
                        </Form.Group></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" onClick={login} type="button">Login</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
            </div>
        );
}