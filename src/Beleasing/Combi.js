import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// Icons
import { FaArrowCircleRight, FaArrowRight, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// Images
import audimiddel from '../Beleasing Img/audipng-removebg-preview.png';
import MercedesMATTIS from '../Beleasing Img/MERCEDES MATTIS ARCU MAXIMUS.jpeg';
import AudiGT from '../Beleasing Img/2023 Audi R8 GT Coupe.jpeg';
import BMWM4 from '../Beleasing Img/BMW 543HP 2025 M4 .jpeg';
import comcar from '../Beleasing Img/combi car.webp';

const cars = [
  {
    name: "AUDI LITORA NEC AMET",
    price: "$3,800.00",
    link: "/audi-litora-nec-amet",
    img: AudiGT,
  },
  {
    name: "BMW CUBILIA CLASS",
    price: "$2,115.00",
    link: "/bmw-cubilia",
    img: BMWM4,
  },
  {
    name: "MERCEDES MATTIS ARCU MAXIMUS",
    price: "$3,800.00",
    link: "/mercedes-mattis-arcu-maximus",
    img: MercedesMATTIS,
  },
];

const Combi = () => {
  return (
    <div>
      <Helmet>
        <title>Spacious & Versatile Combi Cars | Family & Cargo Vehicles - DriveOra</title>
        <meta
          name="description"
          content="Explore the best Combi cars, offering spacious interiors, fuel efficiency, and versatility for both families and businesses. Find your perfect ride at DriveOra."
        />
        <meta
          name="keywords"
          content="Combi Cars, Spacious Vehicles, Family Cars, Cargo Vans, Versatile Cars, DriveOra Combi"
        />
        <link rel="canonical" href="https://www.driveora.com/combi-cars" />
      </Helmet>

      <Container fluid className="overflow-hidden mt-5">
        <Row className="align-items-center">
          {/* Text Section */}
          <div className="col-md-7 col-12 order-md-1 order-2">
            <h2 className="fs-1">COMBI</h2>
            <p className="c-g">
              In tellus interdum mollis enim aenean lectus pellentesque leo. Elit enim pellentesque.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-md-5 col-12 order-md-2 order-1">
            <img className="mt-4" src={comcar} width="100%" alt="Combi Car" />
          </div>
        </Row>
      </Container>

      {/* CHOOSE FROM 1,200 NEW CARS */}
      <Container fluid className="pt-md-3 pt-3 mt-md-5 mt-3 bg-light pb-5 overflow-hidden">
        <Row className="mt-5 g-lg-4 g-2">
          {cars.map((car, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div className="bg-white pb-4 position-relative hov-link">
                <Link to={car.link}>
                  <img src={car.img} width="100%" alt={car.name} />
                </Link>
                <Link to={car.link} className="link-pos bg-white p-2 rounded-circle">
                  <FaLink className="text-dark" />
                </Link>
                <div className="pt-4 ms-4 me-4">
                  <h5>{car.name}</h5>
                  <p className="c-g">{car.price}</p>
                  <div className="d-flex border-top pt-3 align-items-center justify-content-between">
                    <p className="mb-0">Check details</p>
                    <Link to={car.link}>
                      <FaArrowRight className="text-dark" />
                    </Link>
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
              variant="primary"
              className="text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3"
            >
              CHECK YOUR CAR <FaArrowRight className="ms-3" />
            </Button>
          </div>

          {/* Middle Car Image */}
          <div className="col-lg-4 col-md-6 col-12">
            <img src={audimiddel} width="100%" alt="Luxury Audi Car" />
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
    </div>
  );
};

export default Combi;
