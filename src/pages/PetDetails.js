import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Signup from '../pages/Signup';

const PetDetails = ({ pet }) => {
    const [showModal, setShowModal] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const handleSuccess = () => {
        setShowModal(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000); // Automatically hide the success message after 5 seconds
    };

    // Function to handle image load error
    const handleImageError = () => {
        console.error(`Error loading image: ${pet.picture}`);
    };

    return (
        <div className="row gx-5 product">
            <div className="col-lg pb-4">
                <h5>{`${pet.petName} the ${pet.petType}`}</h5>
                <img 
                    className="img-fluid"
                    width="550px" 
                    src={pet.picture} 
                    alt={pet.petType} 
                    onError={handleImageError}
                />
            </div>
            <div className="col-md d-flex align-items-center">
                <br />
                <span>
                    <p className="customBorder">{pet.desc}</p>
                    <p><em className="text-muted">${pet.cost} per month</em></p>
                    <Button className="btn" onClick={handleShow}>Sponsor {pet.petName}</Button>
                </span>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2 className="text-center ms-4 mt-3">Sign up & Dive in!</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Signup onSuccess={handleSuccess} />
                </Modal.Body>
                <Modal.Footer>
                    {/* Already have an account? Log in <Link to='/login' className="text-body-secondary">here</Link>! */}
                </Modal.Footer>
            </Modal>

            {showSuccess && (
                <div className="successMsg mt-3 text-center">
                    Your email was added to our newsletter!
                </div>
            )}
        </div>
    );
};

export default PetDetails;
