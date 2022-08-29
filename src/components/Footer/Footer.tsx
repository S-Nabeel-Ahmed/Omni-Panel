import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
// import MailchimpSubscribe from 'react-mailchimp-subscribe'

const Footer: React.FC = () => {
  const [hubspotPlaced, setHubspotPlaced] = useState(false)
  useEffect(() => {
    if (!hubspotPlaced) {
      const script = document.createElement('script')
      script.src = 'https://js-eu1.hsforms.net/forms/v2.js'
      document.body.appendChild(script)

      script.addEventListener('load', () => {
        // @TS-ignore
        if (window.hbspt) {
          // @TS-ignore
          window.hbspt.forms.create({
            region: 'eu1',
            portalId: '25694847',
            formId: '1ef4c922-f34f-4105-b8c8-2649f6814f2d',
            target: '#hubspotFormto',
          })
        }
      })
      setHubspotPlaced(true)
    }
  }, [hubspotPlaced])

  return (
    <footer id="footer">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-5">
            <div className="col-12 col-md-12 col-lg-12 mb-4 mb-lg-0 text-center text-sm-start">
              <span className="text-white h2 d-block" id="span_color">
                Don&apos;t Miss Out
              </span>
              <span className="text-white h4 fst-italic d-block">Sign up for the latest news</span>

              <div className="footer-mailchimp">
                <div id="hubspotFormto" />
              </div>
              <div className="d-grid gap-2 mt-3 mb-4">
                <small id="emailHelp" className="form-text text-white mt-2">
                  By signing up you understand and agree that your data is collected and used subject to our{' '}
                  <NavLink to="/privacy-policy" className="text-white" id="underline">
                    Privacy Policy
                  </NavLink>{' '}
                  and{' '}
                  <NavLink to="/terms-and-condition" className="text-white" id="underline">
                    Terms and Conditions{' '}
                  </NavLink>
                  .
                </small>
              </div>

              <div id="icon-align-last" className="d-flex justify-content-center justify-content-sm-start">
                <a href="https://twitter.com/omniestategroup">
                  <span className="fa-stack">
                    <i className="fab fa-twitter fa-stack-1x font-22" />
                  </span>
                </a>
                <a href="https://www.facebook.com/Omniigroup">
                  <span className="fa-stack ms-1">
                    <i className="fab fa-facebook-f fa-stack-1x font-22" />
                  </span>
                </a>
                <a href="https://www.instagram.com/omniestategroup/?igshid=1j8lwi9k2zfoe">
                  <span className="fa-stack ms-1">
                    <i className="fab fa-instagram fa-stack-1x font-22" />
                  </span>
                </a>
                <a href="https://www.youtube.com/channel/UC1L_H3LWpjbmlVBr7FdDmQg">
                  <span className="fa-stack ms-1">
                    <i className="fab fa-youtube fa-stack-1x font-22" />
                  </span>
                </a>
                <a href="https://t.me/omnipsi">
                  <span className="fa-stack ms-1">
                    <i className="fab fa-telegram fa-stack-1x font-22" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 mb-3 mb-sm-0 text-center text-sm-start">
                <div>
                  <p className="h6 text-white" style={{ fontSize: '22px' }}>
                    COMPANY
                  </p>
                  <ul className="ps-0" style={{ listStyleType: 'none' }}>
                    <li className="lead">
                      <a href="https://omni-psi.com" target="_blank" rel="noreferrer" className="text-white">
                        About Us
                      </a>
                    </li>
                    <li className="lead">
                      <a href="https://omni-psi.com/our_team" target="_blank" rel="noreferrer" className="text-white">
                        Team
                      </a>
                    </li>
                    <li className="lead">
                      <a
                        href="https://omni-blockchain-solutions.gitbook.io/new/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white"
                      >
                        Whitepaper
                      </a>
                    </li>
                    <li className="lead">
                      <a href="https://omni-psi.com/blogs" target="_blank" rel="noreferrer" className="text-white">
                        Blogs
                      </a>
                    </li>
                    <li className="lead">
                      <NavLink to="/terms-and-condition" className="text-white">
                        Terms and Conditions
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-6 text-center text-sm-start">
                <div>
                  <p className="h6 text-white" style={{ fontSize: '22px' }}>
                    CUSTOMER SERVICE
                  </p>
                  <ul className="ps-0" style={{ listStyleType: 'none' }}>
                    <li className="lead">
                      <NavLink to="/profile" className="text-white">
                        Wallet
                      </NavLink>
                    </li>
                    <li className="lead">
                      <NavLink to="/property" className="text-white">
                        Marketplace
                      </NavLink>
                    </li>
                    <li className="lead">
                      <a
                        href="https://www.coingecko.com/nl/coins/omni-real-estate-token"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white"
                      >
                        $ORT
                      </a>
                    </li>
                    <li className="lead">
                      <a href="https://omni-psi.com/contact" target="_blank" rel="noreferrer" className="text-white">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div className="mt-3 disclaimerbox">
              <h5 className="text-white footer-disclaimer-heading">Disclaimer:</h5>
              <p className="text-white footer-disclaimer-para">
                All of our property sales go in accordance with article 240 bis of the consolidated text of the
                Securities Market Law, approved by Royal Legislative Decree 4/2015, October 23th.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <hr className="footer" />
      <div className="text-center text-white pt-1 pb-4" style={{ position: 'relative' }}>
        Copyright © {new Date().getFullYear()} OMNI GROUP &nbsp;{' '}
        <Link to="navigation" activeClass="active" spy duration={700} smooth style={{ cursor: 'pointer' }}>
          <span id="span_color" style={{ position: 'absolute', right: '20px', bottom: '16px' }}>
            <i className="fas fa-arrow-circle-up" style={{ fontSize: '40px' }} />
          </span>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
