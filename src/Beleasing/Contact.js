import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//iconn
import { FaArrowRight } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import audimiddel from '../Beleasing Img/audipng-removebg-preview.png'
import contact from '../Beleasing Img/contact.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Helmet } from 'react-helmet';


const Contact = () => {
  return (
    <div>

      <Helmet>
        <title>Get Expert Car Leasing Support | 24/7 Assistance Available</title>
        <meta
          name="description"
          content="Need help with car leasing or sales? Our experts are just a click away! Get 24/7 assistance for the best luxury car deals & services."
        />
        <meta
          name="keywords"
          content="Car Leasing Support, 24/7 Car Assistance, Best Car Deals, Luxury Car Help, Car Sales Experts"
        />

        <link rel="canonical" href="https://yourwebsite.com/support" />
      </Helmet>



      {/*  */}
      <Container fluid className="bele-img-2">
        <Row className="m-0 justify-content-center ">
          <div className="col-4 pd fs-1 d-md-block d-none">
            <h1 className="text-white text-center mb-5 bg-color word p-4 ms-3">
              Need Help? We’re Just a Click Away!
            </h1>
          </div>

          <div className='pd d-md-none d-block '>
            <h3 className='bg-color text-center text-white p-3 mx-5 my-3'>
              Need Help? We’re Just a Click Away!
            </h3>
          </div>
        </Row>
      </Container>

      {/*  */}
      <Container fluid className="overflow-hidden"> {/* ✅ Prevent Horizontal Scroll */}
        <Row className="align-items-center mx-0"> {/* ✅ Remove extra margin */}

          {/* Left Box */}
          <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3 text-md-start text-center">
            <h6 className="text-uppercase">Find Your Perfect Ride</h6>
            <h3><a href="" className="color fs-2">+1 234 567 8900</a></h3>
          </div>

          {/* Middle Box */}
          <div className="col-lg-4 col-md-6 col-12 p-lg-5 p-3 text-md-start text-center">
            <h6 className="text-uppercase">Which Car Suits You Best?</h6>
            <h3><a href="" className="color fs-2">driveorahelp@bnsteps.com</a></h3>
          </div>

          {/* Right Box */}
          <div className="col-lg-4 col-12 p-lg-5 p-3 text-md-start text-center">
            <ul className="d-flex mb-0 justify-content-center ps-0 align-items-center">
              <li className="ps-5"><Link to="https://www.instagram.com/the.filmora?igsh=dWdqYnpldjZnZHBq" className="fs-4 color"><FaInstagram /></Link></li>
              <li className="mt-2 ms-2">Follow On Instagram</li>
            </ul>
          </div>

        </Row>
      </Container>

      <Container fluid className="bg-light mt-md-5 mt-3 pt-md-5 pt-3">
        <Row>

          <div className="row d-flex align-items-stretch">
            {/* Left Box */}
            <div className="col-lg-6 col-12 pt-5 pb-lg-5 d-flex">
              <div className="bg-white p-5 w-100 h-100 d-flex flex-column">
                <h3 className="fs-2 mb-3">
                  Unit 0X, DriveOra, 789 Fictional Ave, Brisbane, QLD 4000, Australia
                </h3>
                <span className="c-g">Monday - Friday: 8am - 5pm</span>
                <img className="mt-auto text-center" src={contact} width="100%" alt="" />
              </div>
            </div>

            {/* Right Box */}
            <div className="col-lg-6 col-12 pt-lg-5 pb-5 d-flex">
              <div className="bg-white p-5 w-100 h-100 d-flex flex-column">
                <h3 className="fs-2 mb-3">WE’D LOVE TO HEAR <br /> FROM YOU!</h3>
                <div className="mt-auto">
                  <form>
                    <div className="pb-3">
                      <input type="text" className="form-control" placeholder="Full Name" />
                    </div>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Phone*" />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="E-mail" />
                    </div>
                    <div className="mb-4">
                      <textarea className="form-control" rows="3" placeholder="Your message"></textarea>
                    </div>
                    <div>
                      <Button variant="" className="b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3 mb-2">
                        Let’s Connect
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

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
              {["Hassle-Free Maintenance & Full Service Coverage",
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

export default Contact;