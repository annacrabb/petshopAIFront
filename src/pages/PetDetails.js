
import React from 'react';
// import { Link } from 'react-router-dom';

const PetDetails = ({ pet }) => {

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
                    <button className="btn">Sponsor {pet.petName}</button>
                </span>
            </div>
        </div>
    );
};

export default PetDetails;

{/* <Link to={`/${pet._id}`} className="btn">Sponsor {pet.petName}</Link> */}