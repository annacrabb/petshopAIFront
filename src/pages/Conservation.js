import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Container } from 'react-bootstrap';

//import carousel slides
import Slide1 from '../components/CarouselImages/Slide1';
import Slide2 from '../components/CarouselImages/Slide2';
import Slide3 from '../components/CarouselImages/Slide3';
import Slide4 from '../components/CarouselImages/Slide4';
import Slide5 from '../components/CarouselImages/Slide5';

//import local photos
import Banner from '../assets/conservation.banner.jack.png';

const Conservation = () => {
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
          The future of mankind depends on our ability to save the ocean.
          </span>
        </p>
        <p className="quote">
          <span className="blurred-text" style={{fontFamily: "Great Vibes"}}>
            -Jacques Cousteau
          </span>
        </p>
      </div>

      {/* Title */}
      <div className="container my-5 text-center customHeader">
        <h1 className="customHeader">Conservation</h1>
      </div>

      {/* Content - Conservation */}
      <div className="container my-5 lead">
        Welcome to our Conservation Efforts page, where we proudly showcase the diverse array of initiatives your generous donations are supporting. At Tide Together, we're committed to seeking out and funding groundbreaking research. From harnessing the power of artificial intelligence to using assisted evolution to grow heat-resistant coral, we welcome you to dive in to our past and current funding opportunities.
      </div>
<Container className="d-none d-md-block carouselCustom">
  
      {/* <div className="container d-none d-md-block"> */}
      <Carousel fade>
        <Carousel.Item>
          <Slide1 text="coral research in Hawai'i"/>
        </Carousel.Item>
        <Carousel.Item>
          <Slide2 text="3d printed coral"/>
        </Carousel.Item>
        <Carousel.Item>
          <Slide3 text="heat-tolerant coral"/>
        </Carousel.Item>
        <Carousel.Item>
          <Slide4 text="AI and marine mammal location"/>
        </Carousel.Item>
        <Carousel.Item>
          <Slide5 text="AI and mapping sea life"/>
        </Carousel.Item>
      </Carousel>
    {/* </div>     */}
</Container>

      {/* This shows up on s and xs screens */}

      <Container className="my-5 d-md-none">
            <Card className="mb-3">
                <Card.Body>
                    <Card.Text>
                        Researchers in Hawai'i are using <mark>Indigenous knowledge</mark> and seafloor maps to predict where coral reefs will thrive in order to prioritize current and future conservation efforts. 
                        <a className="text-muted" href="https://sustainability.stanford.edu/news/protecting-next-generation-corals#:~:text=New%20research%20shows%20the%20major,better%20protect%20these%20coral%20nurseries"> Learn more.</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Text>
                        Coastruction designs, produces, and installs <mark>3D printed coral reefs</mark> to aid in the restoration of damaged reef systems and protect vulnerable coastlines.
                        <a className="text-muted" href="https://www.coastruction.com/"> Learn more.</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Text>
                        Researchers in Australia are working to breed <mark>heat-tolerant coral</mark> populations that can withstand rising temperatures.
                        <a className="text-muted" href="https://www.barrierreef.org/what-we-do/projects/growing-heat-tolerant-corals"> Learn more.</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Text>
                        Whale Seeker is a Canadian startup that uses <mark>artificial intelligence</mark> and human expertise to provide marine mammal detection. This aids in preventing collisions with fishing, cargo, or other marine vessels.
                        <a className="text-muted" href="https://www.whaleseeker.com/"> Learn more.</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Text>
                        Plan Blue is a German startup that is using sensors, <mark>artificial intelligence</mark>, autonomous underwater satellites to revolutionize seafloor mapping and provide a database that can be used to improve conservation and sustainable underwater development.
                        <a className="text-muted" href="https://www.planblue.com/"> Learn more.</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

      <div className="container mt-5 lead">
        These are just a few of the efforts we sponsor, and we're always looking for worth-while endeavors to add to our list! Feel free to fill out our <Link to='/contact' className="text-body-secondary">Contact Form</Link> if you'd like to inform of us new sponsorship opportunities.
      </div>
    </div>
  );
};

export default Conservation;
