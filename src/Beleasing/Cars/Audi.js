import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
//icon
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const Audi = () => {
  return (
    <div>
      <Container fluid className="mt-5 mb-5">
        <Row className='align-items-center'>
          <div className="col-md-5 col-12 p-5 order-2">
            <h2 className="fs-1 mb-4">AUDI LITORA NEC<br></br> AMET</h2>
            <p className='c-g'>Venenatis sollicitudin dapibus dolor nisl ornare pulvinar mauris letius in aenean proin magnis eu efficitur class odio vitae scelerisque nam</p>
            <ul className='ps-0'>
              <li className=' c-g mb-2'>● Maximus justo.</li>
              <li className=' c-g mb-2'>● Maecenas mi tortor, pellentesque a aliquam ut,</li>
              <li className=' c-g mb-2'>● Fringilla eleifend lectus</li>
              <li className=' c-g mb-2'>● Maecenas ultrices tellus sit amet sem placerat tempor</li>
            </ul>
            <p className='mt-4'><span>$</span>3,800.00</p>
            <Button variant="" className='b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3'>CONFIGURE</Button>{' '}
          </div>
          <div className="col-md-7 col-12">
            <Link to=""> <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-product-pic7-800x573.webp" width="100%" alt="" /></Link>
          </div>
        </Row>
      </Container>

      {/*  TECHNICAL SPECIFICATIONS  */}
      {/* <Container fluid className='mt-5 pt-5 pb-5 bg-light'>
        <Row className='gap-2'>
          <h3 className="">TECHNICAL SPECIFICATIONS</h3>
          <div className="w-20 ms-3  bg-white p-4">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-icon1.svg" width="40%" alt="" />
            <div className="ms-3">
              <h5 className="mt-2">Class</h5>
              <div className="c-g">Offroad</div>
            </div>
          </div>
          <div className="w-20 ms-3  bg-white p-4">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-icon2.svg" width="40%" alt="" />
            <div className="ms-3">
              <h5 className="mt-2">Doors</h5>
              <div className="c-g">5</div>
            </div>
          </div>
          <div className="w-20 ms-3  bg-white p-4">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-icon3.svg" width="40%" alt="" />
            <div className="ms-3">
              <h5 className="mt-2">Fuel usage</h5>
              <div className="c-g">10l/100mi</div>
            </div>
          </div>
          <div className="w-20 ms-3  bg-white p-4">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-icon4.svg" width="40%" alt="" />
            <div className="ms-3">
              <h5 className="mt-2">Fuel</h5>
              <div className="c-g">Gasoline</div>
            </div>
          </div>
          <div className="w-20 ms-3  bg-white p-4">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-icon5.svg" width="40%" alt="" />
            <div className="ms-3">
              <h5 className="mt-2">Gearbox</h5>
              <div className="c-g">Manual</div>
            </div>
          </div>
        </Row>
      </Container> */}

      {/* KEY SPECIFICATIONS OF BMW COMMODO IPSUM */}
      <Container fluid className='bg-light pt-5 pb-5'>
        <Row>
          <h3 className="fs-2">KEY SPECIFICATIONS OF BMW COMMODO IPSUM</h3>
          <div className="col-lg-5 col-12 mt-5">
            <p className='c-g text-justify'>Primis ut duis pulvinar lobortis libero aliquet suscipit vivamus mi commodo congue adipiscing integer diam odio placerat donec cubilia etiam imperdiet hendrerit suspendisse facilisis pulvinar sollicitudin dui hac ultrices feugiat class tristique vitae condimentum auctor sagittis ligula varius  lobortis magna velit integer hac purus venenatis commodo nisi bibendum suscipit vel curabitur fusce phasellus.</p>
            <p className='c-g text-justify'>Dictum orci class lorem venenatis netus in justo per luctus ante turpis purus mi ultricies sem interdum malesuada dictum suscipit suspendisse aptent imperdiet egestas imperdiet massa nam torquent primis amet.</p>
          </div>
          <div className="col-2 d-lg-block d-none"></div>
          <div className="col-lg-5 col-12 mt-lg-5 mt-3 text-align-left">
            <div className='ps-3 pe-3 mt-4 '>
              <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                <p className='c-g'>Mileage</p>
                <p className='me-5'>8.13 kmpl</p>
              </div>
              <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                <p className='c-g'>Engine Power</p>
                <p className='me-5'>Petrol</p>
              </div>
              <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                <p className='c-g'>Seats</p>
                <p className='me-5'>5</p>
              </div>
              <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                <p className='c-g'>Transmisison type  </p>
                <p className='me-5'>Automatic</p>
              </div>
              <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                <p className='c-g'>Fuel tank capacity</p>
                <p className='me-5'>100</p>
              </div>
            </div>
          </div>
        </Row>
      </Container>



      {/*  */}
      <Container fluid className='pt-5 pb-5 bg-light'>
        <Row className='g-1'>
          <div className="col-lg-4 col-12">
            <div className="bg-white p-5">
              <img className='mb-4' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-num1.svg" alt="" />
              <h4 className="pb-4 border-bottom fs-3 mb-3">AUDI LITORA NEC AMET<br></br> A</h4>
              <p className='c-g mb-0 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend, elit in posuere</p>
              <div className='ps-3 pe-3 mt-4 '>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Size</p>
                  <p className=''>3196 CC</p>
                </div>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Power</p>
                  <p className=''>200 HP</p>
                </div>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Type</p>
                  <p className=''>Diesel</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="bg-white p-5">
              <img className='mb-4' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-num2.svg" alt="" />
              <h4 className="pb-4 border-bottom fs-3 mb-3">AUDI LITORA NEC AMET<br></br> A</h4>
              <p className='c-g mb-0 pb-3'>Mi letius curae sociosqu gravida amet tellus quis velit rhoncus nunc</p>
              <div className='ps-3 pe-3 mt-4 '>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Size</p>
                  <p className=''>3299 CC</p>
                </div>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Power</p>
                  <p className=''>218 HP</p>
                </div>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Type</p>
                  <p className=''>Gasoline</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="bg-white p-5">
              <img className='mb-4' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-productdetails-num3.svg" alt="" />
              <h4 className="pb-4 border-bottom fs-3 mb-3">AUDI LITORA NEC AMET<br></br> A</h4>
              <p className='c-g mb-0 pb-3'>Dictum ante ridiculus inceptos rhoncus ullamcorper sagittis</p>
              <div className='ps-3 pe-3 mt-4 '>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Size</p>
                  <p className='fs-4 mb-0'>-</p>
                </div>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Power</p>
                  <p className=''>230 HP</p>
                </div>
                <div className='border-bottom mb-2 text-left d-flex justify-content-between'>
                  <p className='c-g'>Engine Type</p>
                  <p className=''>Electric</p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>

      {/* HOW MUCH WILL YOU PAY? */}
      <Container fluid className='bg-light pt-5 pb-5 '>
        <Row>
          <div className="col-md-4 col-12">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-home-pic3-500x415.webp" width="100%" alt="" />
          </div>
          <div className="col-md-8 col-12">
            <h6 className="c-g">BELEASING</h6>
            <h2 className="color fs-1">HOW MUCH WILL YOU PAY?</h2>
            <div className='d-md-flex'>
              <div>
                <ul className='mt-4 ps-md-3 ps-0'>
                  <li className='mb-4'><FaPlus className='me-3' /> Integer a tellus aliquam penatibus vehicula.</li>
                  <li className='mb-4'><FaPlus className='me-3' /> Odio praesent egestas inceptos integer.</li>
                </ul>
              </div>
              <div className='ms-md-3 ms-0'>
                <ul className='mt-4 ps-md-3 ps-0'>
                  <li className='mb-4'><FaPlus className='me-3' />Tincidunt a semper fermentum praesent.</li>
                  <li className='mb-4'><FaPlus className='me-3' />Donec ullamcorper elit gravida class famestu.</li>
                </ul>
              </div>
            </div>
            <Button variant="" className='b-color mt-4 text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3'>CHECK YOUR CAR <FaArrowRight className='ms-3' /></Button>{' '}
          </div>
        </Row>
      </Container>

      {/* DISCOVER THE ADVANTAGES OF THIS CAR */}
      <Container fluid className='bg-color p-5'>
        <Row className='align-items-center'>
          <div className="col-2 pt-5 pb-5">
            <img className='rounded-circle' src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-details-pic1.webp" width="90%" alt="" />
          </div>
          <div className="col-10 text-white ps-4">
            <h3 className="fs-md-2 fs-6 mb-3">DISCOVER THE ADVANTAGES OF THIS CAR</h3>
            <p className='mb-2'>Call us and arrange a test drive</p>
            <a className="text-white fs-ṃd-2 fs-6" href="tel:+61383766284">+61 (0) 3 8376 6284</a>
          </div>
        </Row>
      </Container>

      {/* RENTING IS PURE CONVENIENCE */}
      <Container fluid className='pb-md-5 pb-3 pt-5  bg-light'>
        <Row className='align-items-center'>
          <div className="col-lg-4 col-md-6 col-12 text-center ">
            <h2 className=' fs-1'>RENTING IS <br className='d-md-block d-none' />PURE<br /> CONVENIENCE</h2>
            <p className='mt-4 c-g'>Maximus justo. Maecenas mi tortor, pellentesque a aliquam ut, fringilla eleifend lectus. Maecenas.</p>
            <Button variant="" className='b-color text-white rounded-0 border-0 ps-5 pe-5 pt-3 pb-3'>CHECK YOUR CAR <FaArrowRight className='ms-3' /></Button>{' '}
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <img src="https://themes.muffingroup.com/be/leasing2/wp-content/uploads/2023/02/beleasing2-about-pic1-500x438.webp" width="100%" alt="" />
          </div>
          <div className="col-lg-4  col-12 text-center">
            <ul className=' p-0'>
              <p className='fw-bold fs-5'><FaArrowCircleRight className='me-3' /> Service and full care included</p>
              <p className='fw-bold fs-5'><FaArrowCircleRight className='me-3' /> Possibility of changing the car to a <br className='d-md-none d-block' /> <span className='ms-lg-5 ms-md-1 '>newer one on a regular basis</span></p>
              <p className='fw-bold fs-5'><FaArrowCircleRight className='me-3' /> Predictable costs of operating the car</p>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default Audi