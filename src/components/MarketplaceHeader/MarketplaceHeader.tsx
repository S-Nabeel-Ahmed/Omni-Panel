import React from 'react'
import styled from 'styled-components'
import headerabstract from '../../images/headerabstract.png'
import img1 from '../../images/1.jpg'

const HeaderImage = styled.div`
  border-radius: 15px;
  background: url(${headerabstract}) no-repeat top;
  background-size: cover;
`
// const CheckListItem = styled.span`
//   font-weight: 400;
//   color: #5f6f88;
//   font-size: 1rem;

//   @media (min-width: 768px) and (max-width: 1040px) {
//     font-size: 0.8rem;
//   }
//   @media (min-width: 290px) and (max-width: 480px) {
//     font-size: 0.8rem;
//   }
// `
const CenteredImage = styled.img`
  height: 90%;
  width: 104%;
  border-radius: 25px;
  position: relative;
  left: -10%;

  @media (max-width: 992px) {
    position: static;
    width: 100%;
  }

  @media (min-width: 1400px) {
    left: -5%;
  }
`

// const investArray = [
//   "Europe's First Tokenized Real Estate Assets\n.",
//   'Blockchain Powered Real Estate Investment.',
//   'Disrupting Real Estate Investments.',
//   'Fractional And Frictionless Real Estate Investing.',
//   'Fractional Real Estate Interests.',
//   'Investors around the globe can buy into the real estate market through fully-compliant, Fractional, tokenized ownership.',
// ]

const MarketplaceHeader: React.FC = () => (
  <div className="row mx-0">
    <HeaderImage className="col-lg-6  col-12 mt-4 d-flex justify-content-center align-items-center bg-white mb-3 py-4">
      <div>
        <p className="my-4 h3 text-center">LEGAL DISCLAIMER</p>

        <div className="px-3 px-sm-4 px-lg-5 lead" style={{ fontWeight: '400' }}>
          The properties offered have the best profitability conditions and the lowest risk. All this through the
          guarantee of being under the supervision of an ESI as stipulated in article 35.2 of the Securities Market Law.
        </div>
      </div>

      {/* {investArray.map((item, index) => {
        return (
          <div className="row mt-3 text-sm-center text-md-left" key={`invest-${index + 1}`}>
            <div className="col-lg-1 col-1 " />
            <div className="col-10  ps-3 ">
              <i className="fa fa-check" aria-hidden="true" />
              <CheckListItem className="ps-3">{item}</CheckListItem>
            </div>
          </div>
        )
      })} */}
    </HeaderImage>
    {/* <div className="col-3  col-md-1" /> */}
    <div className="col-lg-6 offset-lg-0 col-10 offset-1 col-sm-8 offset-sm-2 mt-2 mt-sm-5">
      <CenteredImage src={img1} alt="..." />
    </div>
  </div>
)

export default MarketplaceHeader
