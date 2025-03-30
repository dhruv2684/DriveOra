import React, { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import sedan from '../Beleasing Img/sedan car.webp'
import hatchback from '../Beleasing Img/hatchback car.webp'
import combi from '../Beleasing Img/combi car.webp'
import suv from '../Beleasing Img/suv car.webp'
import bmwcommodoipsum from '../Beleasing Img/BMW_COMMODO_IPSUM.jpeg'
import fordenimnibhlitora from '../Beleasing Img/fordenimnibhlitora.jpeg'
import lamborghinirutrumlibero from '../Beleasing Img/LAMBORGHINI RUTRUM LIBERO.jpeg'
import audimiddel from '../Beleasing Img/audipng-removebg-preview.png'
import audi from '../DriveOra Image/2.1 car.jpg'
import incar from '../DriveOra Image/2.2 car.jpg'
import phonecar from '../Beleasing Img/car with phone.png'
import img1 from '../Beleasing Img/buy to driveora.jpeg'
import S_logo from '../Beleasing Img/citroen symbol.svg'
import S_logo2 from '../Beleasing Img/audi symbol.svg'
import S_logo3 from '../Beleasing Img/lexus symbol.svg'
import S_logo4 from '../Beleasing Img/ford symbol.svg'
import S_logo5 from '../Beleasing Img/hyindai symbol.svg'
import S_logo6 from '../Beleasing Img/bmw symbol.svg'
import sef from '../Beleasing Img/sefty.svg'
import ger from '../Beleasing Img/gerunty.svg'
import ret from '../Beleasing Img/return.svg'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Helmet } from "react-helmet";


const Home = () => {

  const logos = [S_logo, S_logo2, S_logo3, S_logo4, S_logo5, S_logo6];

  return (
    <div>

      <Helmet>
        {/* Page Title */}
        <title>DriveOra | Luxury Cars for Lease & Sale – Best Deals 2025</title>

        {/* Meta Description & Keywords */}
        <meta
          name="description"
          content="Get the best luxury car leasing & sales deals in 2025. Affordable prices, top brands & exclusive offers – Drive your dream car today!"
        />
        <meta
          name="keywords"
          content="Luxury Cars for Lease, Best Car Deals 2025, Buy Luxury Cars, Affordable Car Leasing, Top Car Brands for Sale"
        />
        <meta name="author" content="DriveOra" />
        <meta name="robots" content="index, follow" />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.driveora.com" />

        {/* Open Graph (For Facebook & Social Media) */}
        <meta property="og:title" content="Luxury Cars for Lease & Sale | Best Deals 2025" />
        <meta
          property="og:description"
          content="Drive your dream luxury car! Explore the best leasing & sale offers on premium cars in 2025."
        />
        <meta property="og:image" content="https://www.driveora.com/images/luxury-car.jpg" />
        <meta property="og:url" content="https://www.driveora.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card (For Twitter SEO) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Cars for Lease & Sale | Best Deals 2025" />
        <meta
          name="twitter:description"
          content="Find top luxury car leasing & sales deals. Affordable prices & exclusive offers!"
        />
        <meta name="twitter:image" content="https://www.driveora.com/images/luxury-car.jpg" />

        {/* Schema Markup (For Google Rich Snippets) */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Car",
      "name": "Luxury Cars for Lease & Sale",
      "description": "Find top luxury cars for lease and sale. Get the best deals & offers in 2025.",
      "brand": {
        "@type": "Brand",
        "name": "DriveOra"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "image": "https://www.driveora.com/images/luxury-car.jpg",
      "url": "https://www.driveora.com"
    }
    `}
        </script>
      </Helmet>


      {/* IMG */}
      <Container fluid className='bele-img mt-1'>
        <Row className='m-0'>
          <div className="col-8 pd">
            <h2 className="text-white d-md-block d-none fs-md-1 mb-md-5 mb-2">
              DRIVE YOUR DREAM CAR <br /> WITH OUR LEASING PLANS
            </h2>
            <h4 className="text-white d-md-none d-block fs-md-1 mb-md-5 mb-2">
              DRIVE YOUR DREAM CAR  WITH OUR LEASING PLANS
            </h4>
            <Button
              href='/all-cars'
              variant=""
              className='b-color d-md-none d-block text-white mt-3 rounded-0 border-0 ps-md-4 ps-2 pe-md-4 pe-2 pt-md-3 pt- pb-md-3 pb-2'
            >
              UNLOCK YOUR CAR <FaArrowRight className='ms-3' />
            </Button>

            <Button
              href='/all-cars'
              variant=""
              className='b-color text-white d-md-inline-block d-none rounded-0 border-0 ps-md-4 ps-3 pe-md-4 pe-3 pt-md-3 pt-2 pb-md-3 pb-2'
            >
              UNLOCK YOUR CAR <FaArrowRight className='ms-3' />
            </Button>
          </div>

          {/* Right Side Content */}
          <div className="col-md-4 pd justify-content-end d-flex d-md-block d-none">
          </div>
        </Row>

        {/* Bottom Steps */}
        <Row className='pb-5'>
          <div className="col-4 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">1. CHOOSE FROM 1,200 NEW CARS</h6>
          </div>

          <div className="col-4 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">2. CHOOSE EQUIPMENT</h6>
          </div>

          <div className="col-4 d-md-block d-none">
            <h6 className="pt-4 mb-4 border-top text-white">3. CONTACT US</h6>
          </div>
        </Row>
      </Container>

      {/* 4 car with hover  */}
      <Container fluid className="pt-5" style={{ overflowX: "hidden" }}>
        <Row className="align-items-center">
          {/* SEDAN - Left Side */}
          <div className="col-lg-6 col-12 hov-up">
            <div className="hov-up d-md-flex text-md-start text-center">
              <div className="me-3">
                <img src={sedan} width="260px" height="145px" alt="Sedan" />
              </div>
              <div className="pt-2">
                <h3 className="fs-2 color">SEDAN</h3>
                <p>Luxury, efficiency, and smooth handling.</p>
              </div>
            </div>
          </div>

          {/* HATCHBACK - Right Side */}
          <div className="col-lg-6 col-12">
            <div className="hov-up d-md-flex text-md-start text-center">
              <div className="me-3">
                <img src={hatchback} width="260px" height="145px" alt="Hatchback" />
              </div>
              <div className="pt-2">
                <h3 className="fs-2 color">HATCHBACK</h3>
                <p>Spacious and perfect for urban streets.</p>
              </div>
            </div>
          </div>

          {/* COMBI - Bottom */}
          <div className="col-lg-6 col-12 pt-4">
            <div className="hov-up d-md-flex text-md-start text-center">
              <div className="me-3">
                <img src={combi} width="260px" height="145px" alt="Combi" />
              </div>
              <div className="pt-2">
                <h3 className="fs-2 color">COMBI</h3>
                <p>More room and comfort for long journeys.</p>
              </div>
            </div>
          </div>

          {/* SUV - Bottom */}
          <div className="col-lg-6 col-12 pt-4">
            <div className="hov-up d-md-flex text-md-start text-center">
              <div className="me-3">
                <img src={suv} width="260px" height="145px" alt="SUV" />
              </div>
              <div className="pt-2">
                <h3 className="fs-2 color">SUV</h3>
                <p>Perfect for city streets and off-road adventures.</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      {/* CHOOSE FROM 1,200 NEW CARS */}
      <Container fluid className="pt-5 mt-5 bg-light pb-5" style={{ overflowX: "hidden" }}>
        <Row className="align-items-center">
          {/* Left Side Text */}
          <div className="">
            <h1 className=" text-center">1,200+ Cars for Sale | Best Car Deals Online</h1>
          </div>
        </Row>

        {/* Car Cards */}
        <Row className="mt-5">
          {[
            {
              name: "BMW COMMODO IPSUM",
              img: bmwcommodoipsum,
              link: "/bmw-commodo-ipsum"
            },
            {
              name: "FORD ENIM NIBH LITORA",
              img: fordenimnibhlitora,
              link: "/ford-enim-nibh-litora"
            },
            {
              name: "LAMBORGHINI RUTRUM LIBERO",
              img: lamborghinirutrumlibero,
              link: "/lamborghini-rutrum-libero"
            },
          ].map((car, index) => (
            <div key={index} className="col-md-4 col-12">
              <div className="bg-white pb-4">
                <img src={car.img} width="100%" alt={car.name} />
                <div className="pt-4 ms-4 me-4">
                  <h5>{car.name}</h5>
                  <div className="d-flex mt-4 align-items-center justify-content-between">
                    <p className="mb-0">Check details</p>
                    <a href={car.link} className='text-dark'>
                      View All <FaArrowRight className="text-dark" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>

      {/* RENTING IS PURE CONVENIENCE */}
      <Container fluid className="pb-5 bg-light" style={{ overflowX: "hidden" }}>
        <Row className="align-items-center">
          {/* Left Side Text */}
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <h2 className="fs-1">
              SMART RENTING, <br className="d-md-block d-none" />
              SMOOTH DRIVING
            </h2>
            <p className="mt-4 c-g">
              Drive your dream car effortlessly – easy booking, great prices, and zero hassle!
            </p>
            <Button
              href="/all-cars"
              variant=""
              className="b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3"
            >
              CHECK YOUR CAR <FaArrowRight className="ms-3" />
            </Button>
          </div>

          {/* Middle Car Image */}
          <div className="col-lg-4 col-md-6 col-12">
            <img src={audimiddel} width="100%" alt="Luxury Audi Car with Advanced Technology & Performance" />
          </div>

          {/* Right Side List */}
          <div className="col-lg-4 col-12">
            <ul className="p-0">
              {[
                "Hassle-Free Maintenance & Full Service Coverage",
                "Easily Swap Your Car for the Latest Model",
                "No Hidden Fees – Transparent & Predictable Costs",
              ].map((item, index) => (
                <div key={index} className="d-flex align-items-center fw-bold fs-5 border-bottom_text pb-2">
                  <FaArrowCircleRight className="me-3" /> {item}
                </div>
              ))}
            </ul>
          </div>
        </Row>
      </Container>

      {/* 2 img car */}
      <Container fluid className="mb-md-5 mb-4 pb-md-5" style={{ overflowX: "hidden" }}>
        <Row>
          {/* Audi Section */}
          <div className="col-lg-6 col-12 p-0 pe-lg-1 position-relative">
            <img
              src={audi} width="100%" alt="Audi Sports Car Ultimate Driving Experience"
            />
            <div className="pos-t text-white ms-5">
              <Link to="">
                <h3 className="text-white">EXPERIENCE THE POWER OF AUDI</h3>
              </Link>
              <p className="m-0">Sophisticated design meets cutting-edge performance for an unmatched drive.</p>
              <p className="m-0">Dynamic, stylish, and built for those who demand more.</p>
            </div>
          </div>

          {/* Mercedes Section */}
          <div className="col-lg-6 col-12 p-0 ps-lg-1 position-relative">
            <img
              src={incar} width="100%" alt="Mercedes Interior Luxury"
            />
            <div className="pos-t text-white ms-5">
              <Link to="">
                <h3 className="text-white">DRIVE THE FUTURE WITH MERCEDES</h3>
              </Link>
              <p className="m-0">Experience luxury, innovation, and top-tier performance in every drive.</p>
              <p className="m-0">Timeless elegance and advanced technology in every detail.</p>
            </div>
          </div>
        </Row>
      </Container>

      {/* 6 car logo */}
      <Container fluid className="pb-md-5 pb-3 mb-md-5 mb-3">
        <Container>
          <Row>
            {logos.map((logo, index) => (
              <div
                key={index}
                className="col-md-2 col-6 mb-md-0 mb-4 d-flex justify-content-center"
              >
                <img src={logo} width="80%" alt={`logo-${index}`} />
              </div>
            ))}
          </Row>
        </Container>
      </Container>

      {/*Video */}
      <Container fluid className="p-0 position-relative">
        <Row className="m-0">
          <div className="p-0 position-relative">
            {/* Background Video */}
            <video
              className="p-0 w-100"
              autoPlay
              muted
              loop
              src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-home-pic1.mp4"
            ></video>

            {/* Text & Button Overlay */}
            <div className="position-absolute top-50 start-0 translate-middle-y ms-5 d-lg-block d-none">
              <h2 className="text-white fs-1 mb-5">
                DISCOVER THE NEXT-GEN <br />
                CROSSOVER – SPEED, <br />
                COMFORT & EFFICIENCY.
              </h2>
              <Button className="b-color text-white rounded-0 border-0 px-4 py-3">
                DISCOVER MORE
              </Button>
            </div>
          </div>
        </Row>

        {/* Counter Section */}
        <Container fluid className="count mb-5">
          <Row>
            {[
              { title: "ALL CARS AVAILABLE", value: "1200" },
              { title: "KINDS OF OUR CARS", value: "08" },
              { title: "YEARS OF WARRANTY", value: "03" },
              { title: "PRICES START FROM", value: "$12000" },
            ].map((item, index) => (
              <div
                key={index}
                className={`col-md-3 col-6 mb-md-0 mb-1 p-0 ${index !== 0 ? "" : ""}`}
              >
                <div className="p-md-5 p-2 bg-white shadow-lg video-box m-1">
                  <h6 className="p-0 fs mb-1">{item.title}</h6>
                  <span className="fs-md-1 fs-4">{item.value}</span>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </Container>

      {/* HOW MUCH WILL YOU PAY? */}
      <Container fluid className="bg-light pt-5 pb-5 mt-5 overflow-hidden">
        <Row className="align-items-center">
          {/* Left Image */}
          <div className="col-md-4 col-12">
            <img src={phonecar} width="100%" alt="Car with Phone Payment Options" />
          </div>

          {/* Right Content */}
          <div className="col-md-8 col-12">
            <h6 className="c-g">DRIVEORA</h6>
            <h2 className="color fs-1">KNOW YOUR PAYMENT OPTIONS</h2>

            <div className="d-md-flex">
              {/* Left List */}
              <div>
                <ul className="mt-4 ps-md-3 ps-0">
                  <li className="mb-4 d-flex align-items-center">
                    <FaPlus className="me-3" /> Smooth & Comfortable Driving Experience
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <FaPlus className="me-3" /> Designed for Maximum Efficiency & Performance
                  </li>
                </ul>
              </div>

              {/* Right List */}
              <div className="ms-md-3 ms-0">
                <ul className="mt-4 ps-md-3 ps-0">
                  <li className="mb-4 d-flex align-items-center">
                    <FaPlus className="me-3" /> Equipped with Smart Safety Features for Peace of Mind
                  </li>
                  <li className="mb-4 d-flex align-items-center">
                    <FaPlus className="me-3" /> Premium Interiors & Innovative Technology for a Next-Level Experience
                  </li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <div>
              <Button variant="" className="b-color mt-4 text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3">
                KNOW YOUR CAR <FaArrowRight className="ms-3" />
              </Button>
            </div>
          </div>
        </Row>
      </Container>

      {/* WHY BELEASING? */}
      <Container fluid className="pt-md-5 pt-3 pb-md-5 overflow-hidden">
        <Row className="align-items-center">
          {/* Left Content */}
          <div className="col-lg-7 col-12 pt-md-5 pt-4 order-lg-1 order-2">
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
                <p className="c-g">Every ride comes with a promise of safety, comfort, and exceptional service.</p>
              </div>

              {/* Box 3 - Easy Returns */}
              <div className="col-md-4 hov-up">
                <img className="d-md-block d-none" src={ret} width="25%" alt="Easy Returns & Flexible Policies" />
                <h5 className="color mt-md-5 mt-2">Return Your Car with Ease</h5>
                <p className="c-g">Flexible return policies designed to suit your needs—because life happens!</p>
              </div>
            </Row>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 col-12 order-lg-2 order-1 p-0">
            <img src={img1} width="100%" alt="DriveOra Car" />
          </div>
        </Row>
      </Container>

    </div>
  )
}

export default Home;




// {/* Right Side Button - Animate from Right */}
// <motion.div
// className="col-4 d-flex justify-content-end"
// initial={{ x: 100, opacity: 0 }}
// whileInView={{ x: 0, opacity: 1 }}
// transition={{ duration: 1 }}
// viewport={{ once: true }}
// >
// <Button
//   href="/all-cars"
//   variant="light rounded-0 fw-bold border-0 ps-md-4 ps-2 pe-md-4 pe-2 pt-ms-2 pt-1 pb-md-2 pb-1"
// >
//   SEE ALL <FaArrowRight className="ms-md-3 d-md-block d-none" />
// </Button>
// </motion.div>