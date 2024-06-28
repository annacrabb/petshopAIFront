import React from 'react';

// Import local photos
import Banner from '../assets/home.banner.png';
import Logo from '../assets/slimtidetogether.png';
import Coral from '../assets/home.pic.1.png';
import Palancar from '../assets/home.pic.2.png';
import Brain from '../assets/home.pic.3.png';

const Home = () => {
    return (
        <div className="body">
            <div className="img-fluid banner">
                <img
                    src={Banner}
                    width="100%"
                    alt="reef"
                />
                <div className="d-none d-md-block">
                    <p className="quote">
                        <span className="blurred-text">
                            The Sea, once it casts its spell, holds one in its net of wonder forever.
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
                <img src={Logo} alt="tide together logo" width="350px" />
            </div>

            {/* Content - Main Page */}
            <div className="container">
                <div className="row py-4">
                    <div className="col d-none d-md-block">
                        <img className="img-fluid" src={Coral} alt="reef with orange coral and fishes" />
                    </div>
                    <div className="col lead">
                        Dive into a world of conservation with Tide Together: Marine Life Sponsorship. Born from a deep-seated love for scuba diving and a profound appreciation for the wonders beneath the waves, our mission transcends borders and bubbles. We aim to connect passionate individuals with the pressing need for marine conservation, enabling everyone to play a part in preserving the breathtaking beauty and biodiversity of our oceans.
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col lead">
                        In the wake of our shifting climate's ripple effect on marine flora and fauna, we've witnessed firsthand the urgent need for action. Rising sea temperatures, acidification, and pollution are taking a toll on delicate ecosystems, threatening the vibrant marine life that thrives within them. Our vision is to forge a community of ocean guardians, united by a common passion for preserving marine biodiversity.
                    </div>
                    <div className="col d-none d-md-block">
                        <img className="img-fluid" src={Palancar} alt="palancar reef in cozumel" />
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col d-none d-md-block">
                        <img className="img-fluid" src={Brain} alt="brain coral" />
                    </div>
                    <div className="col lead">
                        By sponsoring marine life, each sponsorship becomes a testament to our commitment to safeguarding the fragile ecosystems we hold dear. Together, we can ensure that the treasures of the deep endure for generations to come. By engaging in these efforts, you become an integral part of a global movement dedicated to the health and vitality of our oceans.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
