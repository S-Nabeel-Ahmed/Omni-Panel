import React from 'react'
import styled from 'styled-components'
import newsletterbg from '../../images/newsletterbg.jpg'

const BlueCoinImage = styled.div`
  background: url(${newsletterbg}) no-repeat top;
  background-size: cover;
`

const NewsLetter: React.FC = () => (
  <BlueCoinImage className="mt-5 row">
    <div className="col-1 col-md-2 col-lg-3" />

    <div className=" col-10 col-md-8 col-lg-6 pb-5">
      <p className="text-center text-white pt-5 h3">SUBSCRIBE TO OUR NEWS LETTER</p>
      <p className="text-center text-white pt-3">
        Fill your email to receive latest news about marketplace updates,real state tokenization and blockchain in
        general.
      </p>
    </div>

    <div className="col-1 col-md-2 col-lg-3" />
  </BlueCoinImage>
)

export default NewsLetter
