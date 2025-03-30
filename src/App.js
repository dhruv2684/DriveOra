import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Header from "./Beleasing/Header";
import Footer from "./Beleasing/Footer";
import Home from "./Beleasing/Home";
import About from "./Beleasing/About";
import Contact from "./Beleasing/Contact";
import Sedan from "./Beleasing/Sedan";
import Hatchback from "./Beleasing/Hatchback";
import Combi from "./Beleasing/Combi";
import Suv from "./Beleasing/Suv";
import Allcars from "./Beleasing/Allcars";
import Bmw from "./Beleasing/Cars/Bmw";
import Ford from "./Beleasing/Cars/Ford";
import Lamborghini from "./Beleasing/Cars/Lamborghini";
import Mconubia from "./Beleasing/Cars/Mconubia";
import Bmwproin from "./Beleasing/Cars/Bmwproin";
import Audi from "./Beleasing/Cars/Audi";
import Metiam from "./Beleasing/Cars/Metiam";
import Bmwcubilia from "./Beleasing/Cars/Bmwcubilia";
import Mattis from "./Beleasing/Cars/Mattis";
import TermaCondtion from "./Beleasing/TermaCondtion";
import NotFound from "./Beleasing/NotFound"; // Import 404 Page
import "./App.css";
import Privacy from "./Beleasing/Privacy";

function Layout() {
  const location = useLocation();
  
  // Hide header and footer for the 404 Not Found page
  const isNotFound = location.pathname !== "/" && 
                     location.pathname !== "/about" && 
                     location.pathname !== "/contact" && 
                     location.pathname !== "/all-cars" && 
                     location.pathname !== "/sedan" && 
                     location.pathname !== "/hatchback" && 
                     location.pathname !== "/combi" && 
                     location.pathname !== "/suv" && 
                     location.pathname !== "/terms-and-conditions" && 
                     location.pathname !== "/privacy-policy" && 
                     location.pathname !== "/bmw-commodo-ipsum" &&
                     location.pathname !== "/ford-enim-nibh-litora" &&
                     location.pathname !== "/lamborghini-rutrum-libero" &&
                     location.pathname !== "/mercedes-conubia-blandit-sem-neque" &&
                     location.pathname !== "/bmw-proin-commodo-interdum" &&
                     location.pathname !== "/mercedes-mattis-arcu-maximus" &&
                     location.pathname !== "/audi-litora-nec-amet" &&
                     location.pathname !== "/mercedes-etiam-quam" &&
                     location.pathname !== "/bmw-cubilia";

  return (
    <>
      {!isNotFound && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-cars" element={<Allcars />} />
        <Route path="/sedan" element={<Sedan />} />
        <Route path="/hatchback" element={<Hatchback />} />
        <Route path="/combi" element={<Combi />} />
        <Route path="/suv" element={<Suv />} />
        <Route path="/terms-and-conditions" element={<TermaCondtion />} />
        <Route path="/privacy-policy" element={<Privacy />} />

        <Route path="/bmw-commodo-ipsum" element={<Bmw />} />
        <Route path="/ford-enim-nibh-litora" element={<Ford />} />
        <Route path="/lamborghini-rutrum-libero" element={<Lamborghini />} />
        <Route path="/mercedes-conubia-blandit-sem-neque" element={<Mconubia />} />
        <Route path="/bmw-proin-commodo-interdum" element={<Bmwproin />} />
        <Route path="/mercedes-mattis-arcu-maximus" element={<Mattis />} />
        <Route path="/audi-litora-nec-amet" element={<Audi />} />
        <Route path="/mercedes-etiam-quam" element={<Metiam />} />
        <Route path="/bmw-cubilia" element={<Bmwcubilia />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isNotFound && <Footer />}
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "DriveOra Luxury Cars";
  }, []);

  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
