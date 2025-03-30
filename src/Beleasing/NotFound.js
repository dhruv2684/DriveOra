import { div } from "framer-motion/client";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (

    <div>
        <Helmet>
          <title>404 Not Found | DriveOra</title>
          <meta name="description" content="Oops! The page you are looking for does not exist." />
          <meta name="keywords" content="404, Not Found, Page Missing, Error Page" />
          <link rel="canonical" href="https://yourwebsite.com/404" />
        </Helmet>


        <div className="container my-5 pt-5 text-center">
          {/* GIF Image */}
          <div className="gif">
            <img
              src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
              alt="Page not found animation"
            />
          </div>

          {/* Content */}
          <div className="content">
            <h1 className="main-heading">This page is gone.</h1>
            <p>...maybe the page you're looking for is not found or never existed.</p>

            {/* Centered Button */}
            <div className="btn-container">
              <Link to="/">
                <button className="btnn_not_found">
                  Back to home <i className="far fa-hand-point-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
    </div>

  );
};

export default NotFound;
