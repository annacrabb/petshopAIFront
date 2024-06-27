import React, { useEffect, useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';

import BACKEND_URL from '../config';

//import photo and component
import Banner from "../assets/sponsor.banner.png";
import PetDetails from './PetDetails';

function Sponsor() {
  const [selectedTier, setSelectedTier] = useState('tierOne');
  const [pets, setPets] = useState(null);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchPets = async (tier) => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/routes/sponsor/${tier}`);
        if (response.data) {
          setPets(response.data);
        } else {
          console.log(`no pets in ${tier}`);
        }
      } catch (error) {
        console.log('error:', error);
      }
    };

    fetchPets(selectedTier);
  }, [selectedTier]);

  const handleTierChange = (event) => {
    setSelectedTier(event.target.value);
  };

  return (
    <div className="body">
      {/* Header Photo */}
      <div className="img-fluid banner">
        <img
          src={Banner}
          width="100%"
          alt="reef"
        />
        <p className="quote">
          <span className="blurred-text">
            The best way to observe a fish is to become a fish.
          </span>
        </p>
        <p className="quote">
          <span className="blurred-text" style={{fontFamily: "Great Vibes"}}>
            -Jacques Cousteau
          </span>
        </p>
      </div>


      {/* Title */}
      <div className="container mt-5 text-center">
        <h1 className="customHeader">Sponsor</h1>
        <div className="lead mb-3">
          Welcome to Tide Together, where you can dive into the world of sponsorship! Choose a tier below to see the marine animals you can sponsor. Your contributions help keep our coral reefs alive and kicking (or should we say, swimming)!
        </div>
        <div className="sponsor">
          <select className="sponsorSelect" value={selectedTier} onChange={handleTierChange}>
            <option value="tierOne">Tier One - Coral Crusader</option>
            <option value="tierTwo">Tier Two - Reef Rangers</option>
            <option value="tierThree">Tier Three - Ocean Ambassadors</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="container text-center pets">
        {pets && pets.map((pet) => (
          <PetDetails key={pet._id} pet={pet} />
        ))}
        {pets && pets.length === 0 && <p>No pets found in this tier.</p>}
      </div>
    </div>
  );
}

export default Sponsor;

//   useEffect(() => {
//     const fetchPet = async () => {
//         const response = await fetch('api/routes/sponsor/tierOne', {
//             headers: {'Authorization': Bearer ${user.token}},
//         })
//         const json = await response.json()

//     }
//     if(user) {
//         fetchPet()
//     }
// }, [user])