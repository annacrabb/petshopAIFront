import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const defaultPassword = "defaultPassword123!";
    const { signup, error, isLoading, successMessage } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(email, defaultPassword);
    };

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={9}>
                    <Form className="signup" onSubmit={handleSubmit}>
                        <p className="text-center">Sign up to our mailing list to receive updates about animals to sponsor, novel conservation efforts, and extra perks for our members!</p>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Form.Group>
                        <br />
                        {/* <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </Form.Group> */}
                        <Button 
                            className="btn" 
                            type="submit" 
                            disabled={isLoading}
                            style={{ backgroundColor: '#c16dac', borderColor: '#c16dac' }}
                            >
                            Sign Up
                        </Button>

                        {error && <Alert className="errorMsg mt-3">{error}</Alert>}
                        {successMessage && <Alert variant="success" className="mt-3">{successMessage}</Alert>}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
