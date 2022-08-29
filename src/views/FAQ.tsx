import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import { Container } from 'react-bootstrap'
// import MarketplaceHeader from 'components/MarketplaceHeader/MarketplaceHeader'
import backgroundImg from '../images/2.jpg'
import FAQComponent from './FAQComponent'

const BGContainer = styled.div`
  background: url('${backgroundImg}') no-repeat !important;
  background-size: cover !important;
`

const TermsAndCondition: React.FC = () => (
  <div>
    <BGContainer className="py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://marketplace.omni-psi.com/faq" />
      </Helmet>
      <Container>
        <h2 className="mb-4 text-white">Frequently Asked Questions</h2>
        <FAQComponent />
      </Container>
    </BGContainer>
    {/* <MarketplaceHeader /> */}
  </div>
)

export default TermsAndCondition
