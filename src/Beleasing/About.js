import React from 'react'
import { Container, Row } from 'react-bootstrap';
//icon
import { FaCheckCircle } from "react-icons/fa";
import audimiddel from '../Beleasing Img/audipng-removebg-preview.png'
import aboutcar1 from '../Beleasing Img/about car.jpeg'
import aboutcarkey from '../Beleasing Img/abouu car key.jpeg'
import aboutcarinter from '../Beleasing Img/car inside.jpeg'
import sef from '../Beleasing Img/sefty.svg'
import ger from '../Beleasing Img/gerunty.svg'
import ret from '../Beleasing Img/return.svg'
import img1 from '../Beleasing Img/buy to driveora.jpeg'
import { Helmet } from 'react-helmet';



const About = () => {
  return (
    <div>

      <Helmet>
      <title>About Us - Trusted Luxury Car Leasing Experts | 15+ Years of Excellence</title>

        <meta
          name="description"
          content="Learn about our 15+ years of expertise in luxury car leasing & sales. Trusted by thousands, we offer the best deals on top car brands!"
        />
        <meta
          name="keywords"
          content="Trusted Car Leasing Experts, Luxury Car Leasing, Best Car Leasing Deals, Car Rental Experts, Affordable Car Sales"
        />

        <link rel="canonical" href="https://yourwebsite.com/about" />
      </Helmet>



      {/* main img */}
      <Container fluid className="bele-img-1 overflow-hidden"> {/* ✅ Prevent Horizontal Scroll */}
        <Row className="m-0">
          <div className="col-6 pd d-md-block d-none">
            <h1 className="text-white mb-5 bg-color word p-4 ms-3 text-uppercase">
              Trusted Car Leasing Experts for Over 15 Years
            </h1>
          </div>

          <div className='pd d-md-none d-block '>
            <h3 className='bg-color text-center text-white p-3 mx-5 my-3'>
              Trusted Car Leasing Experts for Over 15 Years
            </h3>
          </div>
        </Row>
      </Container>

      {/* QUAM IN AUGUE MONTES */}
      <Container fluid className="mt-md-5 mt-3 mb-md-5 mb-3 pt-md-5 pt-4 pb-md-5 pb-3 overflow-hidden">
        <Row className="align-items-center p-lg-0 p-4">

          {/* Left Image */}
          <div className="col-md-4 col-12">
            <img src={audimiddel} width="100%" alt="" />
          </div>

          {/* Right Content */}
          <div className="col-md-8 col-12 pt-2">
            <h3 className="color fs-lg-1 fs-4 p-lg-0 p-3">
              Reliable. Affordable. Comfortable. The Way Car <br /> Leasing Should Be
            </h3>

            <div className="d-lg-flex pt-lg-4 pt-2">

              {/* Left Box */}
              <div className="col-lg-6 bg-light-pink">
                <h4 className="p-5 mb-0">
                  Luxury, Performance, and Reliability Combined & Drive Smart, Drive with Confidence & also Reliable Cars for a Hassle-Free Journey.
                </h4>
              </div>

              {/* Right Text */}
              <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-3">
                <p>
                  Experience the perfect blend of comfort and performance with our premium car leasing solutions. Designed to meet your needs, our vehicles offer seamless driving, advanced features, and unmatched reliability. Whether you're looking for efficiency, luxury, or power, we provide the right car for every journey. Drive with confidence, knowing that every ride is smooth, secure, and tailored to your expectations.
                </p>
              </div>

            </div>
          </div>

        </Row>
      </Container>

      {/*  */}
      <Container fluid className="bg-light pt-5 pb-5 overflow-hidden">
        <Row className="align-items-center">

          {/* Left Text */}
          <div className="col-lg-4 col-md-6 col-12 p-md-5 p-4 p-0">
            <h4 className="mb-lg-4 mb-0 fs-lg-2 fs-3">
              Designed for Comfort, Built for Performance.
            </h4>
            <p>
              Enjoy a seamless blend of style, comfort, and performance. Drive with confidence, safety, and reliability on every journey. 🚗✨
            </p>
          </div>

          {/* Middle Image */}
          <div className="col-lg-4 col-md-6 col-12 p-0">
            <img src={aboutcar1} width="100%" alt="" />
          </div>

          {/* Right Text */}
          <div className="col-lg-4 col-md-6 col-12 p-md-5 p-4 p-0">
            <h4 className="mb-lg-4 mb-0 fs-lg-2 fs-3">
              Advanced Engineering for a Smooth Ride
            </h4>
            <p>
              Experience superior comfort and precision with every drive. Our vehicles are designed for smooth handling, advanced safety, and unmatched efficiency, ensuring a hassle-free journey every time.🚘✨
            </p>
          </div>

        </Row>

        <Row>

          {/* Left Image */}
          <div className="col-lg-4 col-md-6 col-12 p-0">
            <img src={aboutcarkey} width="100%" alt="" />
          </div>

          {/* Middle Text */}
          <div className="col-lg-4 col-md-6 col-12 p-md-5 p-4 p-0">
            <h4 className="mb-lg-4 mb-0 fs-lg-2 fs-3">
              Smooth Rides, Advanced Engineering.
            </h4>
            <p>
              Experience the perfect balance of style, comfort, and performance. Our vehicles are crafted for effortless handling, enhanced safety, and a smooth driving experience—making every journey enjoyable and worry-free.🚘✨
            </p>
          </div>

          {/* Right Image */}
          <div className="col-lg-4 col-md-6 col-12 p-0">
            <img src={aboutcarinter} width="100%" alt="" />
          </div>

        </Row>
      </Container>

      {/* WHY BELEASING? */}
      <Container fluid className="pt-md-5 pt-3 pb-md-5 overflow-hidden">
        <Row className="align-items-center">
          {/* Left Image */}
          <div className="col-lg-5 col-12 order-lg-1 order-2 p-0">
            <img src={img1} width="100%" alt="DriveOra Car" />
          </div>

          {/* Right Content */}
          <div className="col-lg-7 col-12 pt-md-5 pt-4 order-lg-2 order-1">
            <h2 className="color fs-1 pb-2">WHY DRIVEORA ?</h2>
            <p className="c-g">
              DriveOra offers the perfect combination of affordability, luxury, and convenience—
              making your car rental experience seamless and hassle-free.
            </p>

            <Row className="mt-md-5 mt-0 pt-md-4 pt-0">
              {/* Box 1 - Safe Rides */}
              <div className="col-md-4 hov-up">
                <img className="d-md-block d-none" src={sef} width="25%" alt="Safe, Secure & Reliable Rides" />
                <h5 className="color mt-md-5 mt-2">Your Safety, Our Priority</h5>
                <p className="c-g">Drive worry-free with high-end security systems and 24/7 support.</p>
              </div>

              {/* Box 2 - Customer Satisfaction */}
              <div className="col-md-4 hov-up">
                <img className="d-md-block d-none" src={ger} width="25%" alt="Our Commitment to You" />
                <h5 className="color mt-md-5 mt-2">Your Satisfaction, Our Promise</h5>
                <p className="c-g">Every ride comes with a promise of safety, comfort.</p>
              </div>

              {/* Box 3 - Easy Returns */}
              <div className="col-md-4 hov-up">
                <img className="d-md-block d-none" src={ret} width="25%" alt="Easy Returns & Flexible Policies" />
                <h5 className="color mt-md-5 mt-2">Return Your Car with Ease</h5>
                <p className="c-g">Flexible return policies designed to suit your needs—because life happens!</p>
              </div>
            </Row>
          </div>
        </Row>
      </Container>


      {/*  */}
      <Container className='mt-md-3 mt-4 mb-md-3 mb-3 overflow-hidden'>
        <Row>
          {/* Heading */}
          <h3 className='text-center fs-md-2 fs-4'>
            Experience Unmatched Performance and <br /> Seamless Comfort with Our Advanced Vehicles
          </h3>
        </Row>

        <div className="d-md-flex mt-md-2 mt-3 pt-md-3 pt-3">

          {/* Left List */}
          <div className="col-md-6 col-12">
            <ul className='p-0'>
              <li className='pb-md-3 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Smooth and Efficient Driving, Tailored to Your Needs.</li>
              <li className='pb-md-3 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Advanced Comfort Features, Built for Every Journey</li>
              <li className='pb-md-3 '> <FaCheckCircle className='fs-4 me-2' /> Reliable, Safe, and Efficient – Drive with Confidence.</li>
            </ul>
          </div>

          {/* Right List */}
          <div className="col-md-6 col-12">
            <ul className='p-0'>
              <li className='pb-md-3 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Engineered for Excellence, Designed for Comfort.</li>
              <li className='pb-md-3 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Maximized Performance, Perfected for You.</li>
              <li className='pb-md-3 pb-3'> <FaCheckCircle className='fs-4 me-2' /> Seamless Driving Experience, No Matter the Road.</li>
            </ul>
          </div>

        </div>
      </Container>




    </div >
  )
}

export default About;