import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import audimiddel from '../Beleasing Img/audipng-removebg-preview.png'

import bmwcommodoipsum from '../Beleasing Img/BMW_COMMODO_IPSUM.jpeg'
import fordenimnibhlitora from '../Beleasing Img/fordenimnibhlitora.jpeg'
import lamborghinirutrumlibero from '../Beleasing Img/LAMBORGHINI RUTRUM LIBERO.jpeg'
import MERCEDESCob from '../Beleasing Img/marsci.jpeg'
import bmwcommodoipsum2 from '../Beleasing Img/BMW X4 M Competition 2022.jpeg'
import MercedesMATTIS from '../Beleasing Img/MERCEDES MATTIS ARCU MAXIMUS.jpeg'
import AudiGT from '../Beleasing Img/2023 Audi R8 GT Coupe.jpeg'
import AudMERCEDESETIAM from '../Beleasing Img/2024 Mercedes-AMG GT Coupe.jpeg'
import BMWM4 from '../Beleasing Img/BMW 543HP 2025 M4 .jpeg'
import allcar from '../Beleasing Img/all car.webp'


//icon
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';



const cars = [
  {
    name: "BMW COMMODO IPSUM",
    price: "$1,990.00",
    link: "/bmw-commodo-ipsum",
    img: bmwcommodoipsum,
  },
  {
    name: "FORD ENIM NIBH LITORA",
    price: "$3,500.00",
    link: "/ford-enim-nibh-litora",
    img: fordenimnibhlitora,
  },
  {
    name: "LAMBORGHINI RUTRUM LIBERO",
    price: "$13,200.00",
    link: "/lamborghini-rutrum-libero",
    img: lamborghinirutrumlibero,
  },
  {
    name: "MERCEDES CONUBIA BLANDIT NEQUE",
    price: "$15,000.00",
    link: "/mercedes-conubia-blandit-sem-neque",
    img: MERCEDESCob,
  },
  {
    name: "BMW PROIN COMMODO INTERDUM",
    price: "$3,800.00",
    link: "/bmw-proin-commodo-interdum",
    img: bmwcommodoipsum2,
  },
  {
    name: "MERCEDES MATTIS ARCU MAXIMUS",
    price: "$3,800.00",
    link: "/mercedes-mattis-arcu-maximus",
    img: MercedesMATTIS,
  },
  {
    name: "AUDI LITORA NEC AMET",
    price: "$3,800.00",
    link: "/audi-litora-nec-amet",
    img: AudiGT,
  },
  {
    name: "MERCEDES ETIAM QUAM",
    price: "$1,890.00",
    link: "/mercedes-etiam-quam",
    img: AudMERCEDESETIAM,
  },
  {
    name: "BMW CUBILIA CLASS",
    price: "$2,115.00",
    link: "/bmw-cubilia",
    img: BMWM4,
  },
];


const Allcars = () => {
  return (
    <div>

      <Helmet>
        <title>Explore Luxury & Performance Cars | Best Deals & Latest Models</title>

        <meta
          name="description"
          content="Browse our wide selection of luxury, sports, and performance cars. Experience the best in efficiency, power, and comfort with driveOra."
        />
        <meta
          name="keywords"
          content="Luxury Cars, Sports Cars, Performance Vehicles, Car Collection, Best Car Deals, driveOra Cars"
        />

        <link rel="canonical" href="https://yourwebsite.com/cars" />
      </Helmet>


      {/*  */}
      <Container fluid className="overflow-hidden mt-5 pt-3">
        <Row className="align-items-center">

          {/* Left Content */}
          <div className="col-md-7 col-12">
            <h2 className="fs-1 text-uppercase">Explore Our Full Range of Cars</h2>
            <p className="c-g">Discover a wide selection of cars designed for every lifestyle. Whether you seek efficiency, luxury, or power, our collection offers top-tier performance, advanced features, and ultimate driving comfort.</p>
          </div>

          {/* Right Image */}
          <div className="col-md-5">
            <img
              className="mt-4"
              src={allcar}
              width="100%"
              alt=""
            />
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



    </div>
  )
}

export default Allcars;