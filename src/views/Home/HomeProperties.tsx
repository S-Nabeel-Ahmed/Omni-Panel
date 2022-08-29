/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import Carousel from 'react-multi-carousel'
import firstproperty1 from '../../images/firstproperty/firstproperty1.jpg'
import firstproperty2 from '../../images/firstproperty/firstproperty2.jpg'
import firstproperty3 from '../../images/firstproperty/firstproperty3.jpg'
import firstproperty4 from '../../images/firstproperty/firstproperty4.jpg'
import firstproperty5 from '../../images/firstproperty/firstproperty6.jpg'
import firstproperty6 from '../../images/firstproperty/firstproperty7.jpg'
import firstproperty7 from '../../images/firstproperty/firstproperty8.jpg'
import firstproperty8 from '../../images/firstproperty/firstproperty9.jpg'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1441 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1440, min: 1076 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1075, min: 993 },
    items: 1,
  },
  tablet1: {
    breakpoint: { max: 992, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
}

const propertyData = [
  firstproperty1,
  firstproperty2,
  firstproperty3,
  firstproperty4,
  firstproperty5,
  firstproperty6,
  firstproperty7,
  firstproperty8,
]

const HomeProperties: React.FC = () => (
  <div>
    <div className="mt-2 mb-5 mx-3">
      <Carousel responsive={responsive} keyBoardControl arrows={false}>
        {propertyData.map((item, index) => {
          return (
            <div className="p-1" key={`property-${index + 1}`}>
              <div className="card">
                <div className="row">
                  <div className="col-lg-6 align-self-center">
                    <div
                      id={`first${index}`}
                      className="carousel slide p-2 home-page-property-slider"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={item}
                            alt="Second slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={firstproperty2}
                            alt="Third slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={firstproperty3}
                            alt="Third slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                        <div className="carousel-item active">
                          <img
                            className="d-block w-100"
                            src={firstproperty4}
                            alt="Third slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={firstproperty5}
                            alt="Third slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={firstproperty6}
                            alt="Third slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={firstproperty7}
                            alt="Third slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            src={firstproperty8}
                            alt="Third slide"
                            style={{ borderRadius: '10px', filter: 'brightness(0.9)' }}
                          />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href={`#first${index}`} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href={`#first${index}`} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="card-body p-2 py-3">
                      <p className="mb-1 h5" style={{ color: '#ffacaf' }}>
                        Costa del sol, Spain{' '}
                      </p>
                      <p className="mb-2 h1">OMNI, Spain - Property #001</p>
                      <p className="my-0" style={{ fontSize: '24px' }}>
                        $440,900.00
                      </p>
                      <div>
                        <small style={{ fontSize: '14px' }}>
                          2 Bedroom Apartment for sale on the Costa del Sol, Spain. New residential composed of
                          contemporary and spacious apartments overlooking the Mediterranean Sea, Gibraltar, and North
                          Africa coastline. With a wide range of amenities on your doorstep and within walking distance
                          to the local beach, the marina and the town centre. The Key Ready 2 bedroom apartment features
                          an elegant and contemporary design that takes advantage of the sunlight and the natural
                          environment. These apartments are composed of bright and ample interior spaces, comfortable
                          bedrooms, and luxury bathrooms. The open plan lounge integrates a modern kitchen and connects
                          to the oversized terrace with beautiful views. The special features are the porcelain
                          flooring, fitted bathrooms, wardrobes, a designer kitchen with top brand appliances, and
                          aircon fully installed. The fantastic communal areas include an outdoor swimming pool,
                          beautiful gardens and a gym.
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  </div>
)

export default HomeProperties
