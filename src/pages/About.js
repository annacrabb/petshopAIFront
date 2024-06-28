import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

// Import local photos
import Banner from '../assets/about.banner.jack.png';
import Rays from '../assets/about.pic.1.jpg';
import Turtle from '../assets/about.pic.2.jpg';
import Purple1 from '../assets/about.pic.3.png';
import Purple2 from '../assets/about.pic.4.png';

const About = () => {
  return (
    <div className="body">
      {/* Header Photo */}
      <div className="img-fluid banner">
        <img
          src={Banner}
          width="100%"
          alt="reef"
        />
        <div className="d-none d-md-block">
          <p className="quote">
            <span className="blurred-text">
              Man has only to sink beneath the surface and he is free.
            </span>
          </p>
          <p className="quote">
            <span className="blurred-text" style={{ fontFamily: "Great Vibes" }}>
              -Jacques Cousteau
            </span>
          </p>
        </div>
      </div>

      {/* Title */}
      <div className="container my-5 text-center">
        <h1>About Us</h1>
      </div>

      {/* Content - About */}
      <Container>
        <div className="pb-4 lead">
          At Tide Together, we believe in the power of community to safeguard our oceans and their mesmerizing inhabitants. Our mission is to unite scuba divers, ocean enthusiasts, and conservationists worldwide in a common cause: protecting marine flora and fauna through innovative research initiatives.
        </div>
        <div className="pb-4 lead">
          Driven by a deep passion for the ocean's beauty and biodiversity, we provide a platform where individuals can actively contribute to the preservation of marine life. Through our sponsorship program, users have the opportunity to directly support the conservation of specific marine animals, fostering a personal connection with the underwater world.
        </div>

        <Row className="d-none d-md-flex">
          <Col md={6} className="pb-4">
            <Image src={Rays} fluid alt="sting rays being photographed by a diver" />
          </Col>
          <Col md={6} className="pb-4">
            <Image src={Turtle} fluid alt="turtle swimming along a reef" />
          </Col>
        </Row>

        <div className="pb-4 lead">
          We understand that not everyone can explore the depths firsthand, but our platform offers alternative ways to engage with and support marine ecosystems. Whether through sponsoring marine life, participating in educational initiatives, or advocating for sustainable practices, every action on Tide Together contributes to protecting our oceans.
        </div>

        <div className="pb-4 lead">
          Our platform offers three sponsorship tiers to suit different levels of engagement and impact. Tier One (Coral Crusaders) supports the smallest sea life, like nudibranchs, seahorses, and shrimps. Sponsors at this level receive a certificate and a newsletter. Tier Two (Reef Rangers) supports medium-sized animals, such as angelfish, sea turtles, and sea stars, with rewards including a t-shirt or bucket hat. Tier Three (Ocean Ambassadors) supports larger animals like sharks, stingrays, and octopuses, offering bigger rewards such as a virtual dive experience and VIP event invitations.
        </div>

        <Row className="d-none d-md-flex">
          <Col md={6} className="pb-4">
            <Image src={Purple1} fluid alt="long purple coral" />
          </Col>
          <Col md={6} className="pb-4">
            <Image src={Purple2} fluid alt="coral reef" />
          </Col>
        </Row>

        <div className="lead">
          For more detailed information on the coral reef research we support, <Link to='/conservation' className="text-body-secondary">click here</Link>. To learn more about our sponsorship tiers and their benefits, <Link to='/tiers' className="text-body-secondary">click here</Link>. By fostering a sense of community and empowerment, we strive to advance research, conservation, and advocacy efforts, ensuring a vibrant and resilient future for our oceans and the life they sustain. Join us in our mission to explore, conserve, and cherish the wonders of the deep blue sea. Together, we can make a meaningful difference for marine biodiversity and the health of our planet.
        </div>
      </Container>
    </div>
  );
};

export default About;
