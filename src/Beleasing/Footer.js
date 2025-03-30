import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark-blue pt-5 pb-4 overflow-hidden">
        {/* Top Section (Logo & Social Icons) */}
        <Row className="align-items-center pb-3 mb-3">
          {/* Logo & Text */}
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
            <h1 className="fs-14 ms-3 mb-0 word text-white" style={{ fontFamily: "MyCustomFont" }}>DriveOra</h1>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-6 col-12 d-flex justify-content-center mt-md-0 mt-3">
            <ul className="d-flex mb-0 me-3 align-items-center">
              <li className='fs-4'><Link to="https://www.instagram.com/the.filmora?igsh=dWdqYnpldjZnZHBq" className="text-white"><FaInstagram /></Link></li>
              <li className='text-white ms-2 fs-6 mt-2'>Follow On Instagram</li>
            </ul>
          </div>
        </Row>

        {/* Footer Links */}
        <Row className="pt-md-5 pt-3 text-center">
          {[{
            title: "About",
            links: ["Contact us", "Accessibility", "Carreers", "Request brochure"]
          }, {
            title: "Leasing & Finance",
            links: ["Apply for credit", "Reward & Finance programs", "End of lease options"],
            subTitle: "Help & Support",
            subLinks: ["Roadside assistance", "Navigation", "FAQ"]
          }, {
            title: "Owners",
            links: ["Benefits", "Pay my bill", "Drivers website"],
            subTitle: "Our Brand",
            subLinks: ["Motorsports", "Safety technology", "Luxury to buy"]
          }, {
            title: "Service & Warranty",
            links: ["Maintenance schedule", "Find a dealer", "Beleasing tire center", "Service by Beleasing", "Warranty coverage"]
          }].map((section, index) => (
            <div className="col-md-3 col-sm-6 col-12 mt-md-0 mt-4" key={index}>
              <p className="mb-2 text-white">{section.title}</p>
              <ul className="mb-0 ps-0">
                {section.links.map((link, i) => (
                  <li key={i} className="mb-2"><Link to="/" className="text-white">{link}</Link></li>
                ))}
              </ul>

              {section.subTitle && (
                <>
                  <p className="mb-2 text-white">{section.subTitle}</p>
                  <ul className="ps-0 mb-0">
                    {section.subLinks.map((subLink, i) => (
                      <li key={i} className="mb-2"><Link to="/" className="text-white">{subLink}</Link></li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </Row>
      </Container>

      {/* Bottom Footer - Copyright */}
      <Container fluid className="bg-blue-light text-white text-center py-3">
        <p className="mb-0">&copy; {new Date().getFullYear()} DriveOra. All Rights Reserved.</p>
      </Container>
    </div>
  )
}

export default Footer;
