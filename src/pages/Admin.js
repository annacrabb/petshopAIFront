import React, { useState } from 'react';
import PetForm from '../forms/PetForm';
import { Container, Row, Col } from 'react-bootstrap'

const Admin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const correctPassword = 'scifi';

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setError(null);
        } else {
            setError('Incorrect password');
        }
    };

    if (isAuthenticated) {
        return (
            <div>
                <PetForm />
            </div>
        );
    }

    return (
        <Container className="adminPage container">
            <h3 className="m-5 text-center">You've arrived at the Admin page!</h3>
            <Row className="justify-content-center">
                <Col md={4}>
                    <form onSubmit={handleSubmit} className="submitForm text-center">
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter password"
                            className="form-control "
                        />
                        <button className="btn btn-primary my-3" type="submit">Submit</button>
                        {error && <div className="errorMsg text-danger">{error}</div>}
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Admin;
