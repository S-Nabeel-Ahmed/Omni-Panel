import React from 'react'
import styled from 'styled-components'

import '../../views/Marketplace/Marketplace.scss'
import lockimg from '../../images/lock.png'

const StyledSmall = styled.small`
  font-size: 12px;
  color: black;
  font-weight: 800em;
`
const StyledFooter = styled.footer`
  font-size: 12px;
  color: black;
  font-weight: 800em;
`

interface IProps {
  index: number
  item?: any
  image?: string
}

const ImageTabs: React.FC<IProps> = ({ index: ind, item, image }) => (
  <div className="blurry-effect">
    <img className="lock-image" src={lockimg} alt="" />

    <div className="row mt-3 container-box">
      <div className="col-lg-4 col-12 px-3 py-3 py-lg-0" id="carousel_image">
        <div id={`tabs${ind}`} className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 h-100 rounded"
                src={item ? `${process.env.REACT_APP_BASE_URL}/${item?.image}` : image}
                alt="First slide"
              />
              <div className="featured">FEATURED</div>
              <div className="sold-out">SOLD OUT</div>{' '}
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100  h-100 rounded"
                src={item ? `${process.env.REACT_APP_BASE_URL}/${item?.image}` : image}
                alt="Second slide"
              />
              <div className="featured">FEATURED</div>
              <div className="sold-out">SOLD OUT</div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100  h-100 rounded"
                src={item ? `${process.env.REACT_APP_BASE_URL}/${item?.image}` : image}
                alt="Third slide"
              />
              <div className="featured">FEATURED</div>
              <div className="sold-out">SOLD OUT</div>
            </div>
          </div>
          <a className="carousel-control-prev" href={`#tabs${ind}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href={`#tabs${ind}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="col-lg-6 col-md-8">
        {/* <NavLink to="" id="imagetablink"> */}
        <blockquote className="mb-0 mb-lg-2 mt-md-4 mt-lg-0">
          <p className="mb-0" style={{ paddingTop: '0.65rem' }}>
            {item?.name}
          </p>
          <StyledSmall className="mt-0">
            Turn key villas - {item?.bedrooms} bedrooms - {item?.bathrooms} bathrooms {item?.area}m2
          </StyledSmall>
          <StyledFooter className="mt-2">{item?.description}</StyledFooter>
        </blockquote>
        <div className="py-2 py-lg-0">
          <span>
            <i className="fas fa-bed fa-1x" />
            <StyledSmall className="ms-1"> 3</StyledSmall>
          </span>
          <span className="ms-4">
            <i className="fas fa-bath fa-1x" />
            <StyledSmall className="ms-1"> 3</StyledSmall>
          </span>
          <span className="ms-4">
            <i className="far fa-draw-square fa-1x" />
            <StyledSmall className="ms-1"> 3</StyledSmall>
          </span>
        </div>
        {/* </NavLink> */}
      </div>
      <div className="col-lg-2 col-md-4">
        {/* <NavLink to="/marketplace/propertydetails" id="imagetablink"> */}
        <div className="py-2 py-lg-1" id="inner_box">
          <span className="text-center pt-0 d-block">Euro</span>
          <p className="text-center mb-0">1.000.000</p>
        </div>
        <div className="py-2 py-lg-1" id="inner_box">
          <span className="text-center pt-0 d-block">Bitcoin</span>
          <p className="text-center mb-0">34.02</p>
        </div>
        <div className="py-2 py-lg-1" id="">
          <span className="text-center pt-0 d-block ">Ethereum</span>
          <p className="text-center mb-0">484.64</p>
        </div>
        {/* </NavLink> */}
      </div>
    </div>
  </div>
)

export default ImageTabs
