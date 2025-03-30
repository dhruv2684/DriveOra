import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import bmwcommodoipsum from '../Beleasing Img/BMW_COMMODO_IPSUM.jpeg'
import lamborghinirutrumlibero from '../Beleasing Img/LAMBORGHINI RUTRUM LIBERO.jpeg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


const cars = [
    {
        name: "BMW COMMODO IPSUM",
        price: "$1,990.00",
        link: "/bmw-commodo-ipsum",
        img: bmwcommodoipsum,
    },
    {
        name: "LAMBORGHINI RUTRUM LIBERO",
        price: "$13,200.00",
        link: "/lamborghini-rutrum-libero",
        img: lamborghinirutrumlibero,
    },
];


const TermaCondtion = () => {
    return (
        <div>

            <Helmet>
                <title>Terms & Conditions | DriveOra - Luxury Car Leasing & Sales</title>

                <meta
                    name="description"
                    content="Read the Terms and Conditions of driveOra. Understand our policies on car leasing, website usage, privacy, and more."
                />
                <meta
                    name="keywords"
                    content="driveOra Terms and Conditions, Car Leasing Policies, Luxury Car Sales Rules, Website Usage Terms"
                />

                <link rel="canonical" href="https://yourwebsite.com/terms-and-conditions" />
            </Helmet>



            <Container className="my-md-5 my-3 pt-md-5 pt-3 ">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <Card className="shadow-lg p-4 border-0">
                            <Card.Body>
                                <h1 className="text-center mb-4">Terms and Conditions</h1>
                                {/* <p className="text-muted text-center">Last Updated: [Date]</p> */}
                                <hr />
                                <h4>Acceptance of Terms</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>By using <strong>driveOra</strong>, you accept and agree to abide by these Terms and Conditions.</li>
                                    <li>We may update these terms from time to time without prior notice.</li>
                                </ul>

                                <h4>Use of Website</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>The content on this website is for informational purposes only, primarily showcasing luxury cars.</li>
                                    <li>You may not use this website for any illegal or unauthorized purpose.</li>
                                    <li>We reserve the right to modify, suspend, or discontinue any part of the website at any time without notice.</li>
                                </ul>

                                <h4>Intellectual Property</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>All content, including text, images, and design elements related to luxury cars, belongs to <strong>driveOra</strong> unless stated otherwise.</li>
                                    <li>You may not reproduce, distribute, or use any content without our prior written consent.</li>
                                </ul>

                                <h4>Limitation of Liability</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>We do not guarantee the accuracy, completeness, or reliability of any content on this website.</li>
                                    <li><a href="/">driveOra</a> shall not be liable for any direct, indirect, or incidental damages arising from the use of this website.</li>
                                </ul>

                                <h4>Third-Party Links</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>Our website may contain links to third-party websites.</li>
                                    <li>We do not control or take responsibility for the content or policies of these external sites.</li>
                                </ul>

                                <h4>Privacy Policy</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>Any personal information collected through the website will be handled according to our Privacy Policy.</li>
                                </ul>

                                <h4>Governing Law</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>These terms shall be governed by and interpreted in accordance with the laws of .</li>
                                </ul>

                                <h4>Contact Us</h4>
                                <ul className='ps-3' style={{ listStyleType: "'▪ '" }}>
                                    <li>If you have any questions about these Terms and Conditions, please contact us at <a href="">[Privacy Policy]</a>.</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-4 col-12 my-5">
                        <h2 className="text-center mb-4">Most Popular Cars in driveOra</h2>
                        <p className="text-center text-muted">Discover the top luxury cars available on driveOra.</p>
                        {cars.map((car, index) => (
                            <div key={index} className="">
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
                    </div>


                </div>
            </Container>
        </div>
    )
}

export default TermaCondtion