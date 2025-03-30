import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaArrowCircleRight, FaArrowRight, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

// Images
import audimiddel from '../Beleasing Img/audipng-removebg-preview.png';
import bmwcommodoipsum from '../Beleasing Img/BMW_COMMODO_IPSUM.jpeg';
import lamborghinirutrumlibero from '../Beleasing Img/LAMBORGHINI RUTRUM LIBERO.jpeg';
import MERCEDESCob from '../Beleasing Img/marsci.jpeg';
import MercedesMATTIS from '../Beleasing Img/MERCEDES MATTIS ARCU MAXIMUS.jpeg';
import hhatchback from '../Beleasing Img/hatchback car.webp';

const cars = [
  { name: "BMW COMMODO IPSUM", price: "$1,990.00", link: "/bmw-commodo-ipsum", img: bmwcommodoipsum },
  { name: "LAMBORGHINI RUTRUM LIBERO", price: "$13,200.00", link: "/lamborghini-rutrum-libero", img: lamborghinirutrumlibero },
  { name: "MERCEDES CONUBIA BLANDIT SEM NEQUE", price: "$15,000.00", link: "/mercedes-conubia-blandit-sem-neque", img: MERCEDESCob },
  { name: "MERCEDES MATTIS ARCU MAXIMUS", price: "$3,800.00", link: "/mercedes-mattis-arcu-maximus", img: MercedesMATTIS },
];

const Hatchback = () => {
  return (
    <div>
      <Helmet>
        <title>Compact & Efficient Hatchbacks | Best Small Cars | driveOra</title>
        <meta name="description" content="Explore the best hatchback cars with advanced features, fuel efficiency, and compact design. Find your perfect city ride with driveOra." />
        <meta name="keywords" content="Hatchback Cars, Compact Cars, Fuel Efficient Cars, Best City Cars, driveOra Hatchbacks" />
        <link rel="canonical" href="https://yourwebsite.com/hatchbacks" />
      </Helmet>

      <Container fluid className="overflow-hidden mt-5">
        <Row className="align-items-center">
          <div className="col-md-7 col-12 order-md-1 order-2">
            <h2 className="fs-1">HATCHBACK</h2>
            <p className="c-g">Amet nibh sagittis massa eget vehicula sed dui. Vitae neque luctus sit porta eros platea ultrices. Et magna.</p>
          </div>
          <div className="col-md-5 col-12 order-md-2 order-1">
            <img className="mt-4" src={hhatchback} width="100%" alt="Hatchback Car" />
          </div>
        </Row>
      </Container>

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

      <Container fluid className="pb-5 bg-light" style={{ overflowX: "hidden" }}>
        <Row className="align-items-center">
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <h2 className="fs-1">SMART RENTING, <br className="d-md-block d-none" /> SMOOTH DRIVING</h2>
            <p className="mt-4 c-g">Drive your dream car effortlessly – easy booking, great prices, and zero hassle!</p>
            <Button href="/all-cars" variant="primary" className="text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3">
              CHECK YOUR CAR <FaArrowRight className="ms-3" />
            </Button>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <img src={audimiddel} width="100%" alt="Luxury Audi Car with Advanced Technology & Performance" />
          </div>

          <div className="col-lg-4 col-12">
            <ul className="p-0">
              {["Hassle-Free Maintenance & Full Service Coverage", "Easily Swap Your Car for the Latest Model", "No Hidden Fees – Transparent & Predictable Costs"].map((item, index) => (
                <li key={index} className="d-flex align-items-center fw-bold fs-5 border-bottom_text pb-2">
                  <FaArrowCircleRight className="me-3" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Hatchback;