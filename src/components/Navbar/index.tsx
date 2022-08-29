import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap'
// import { isEmpty } from 'lodash'
import { NavigationRouteObject } from 'routes'
// import { useActiveWeb3React } from 'hooks/web3'
import Authenticate from 'components/Authenticate'
import icon from '../../images/latestomnilogo.png'

interface Props {
  routes: NavigationRouteObject[]
}

const Navbar: React.FC<Props> = ({ routes }) => {
  // const { account } = useActiveWeb3React()

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <BootstrapNavbar id="navigation" className="navbar-dark py-4 px-3" expand="lg">
        <BootstrapNavbar.Brand href="/" style={{ padding: 0 }}>
          <div className="logo-box-area">
            <img
              src={icon}
              // width="100"
              alt=""
              className="header-top-logo"
              style={{ width: '100px' }}
            />
          </div>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle color="white" onClick={toggleMenu} />

        <BootstrapNavbar.Collapse className="mobile-collapse-show">
          <Nav className="me-auto">
            {routes.map((prop) => {
              if (!prop.name) return null
              return (
                <NavLink
                  key={prop.path}
                  to={prop.path}
                  className={({ isActive }) => `nav-item nav-link text-white ${isActive ? ' item' : ''}`}
                >
                  {prop.name}
                </NavLink>
              )
            })}
          </Nav>

          {/* <div className="d-flex ms-auto">
            {!isEmpty(account) ? (
              <Dropdown className="dropdown-nav-profile" id="dropdown-nav-container">
                <Dropdown.Toggle>
                  <i className="fal fa-user-circle me-2 mb-2 mb-lg-0" id="nav-profile" />
                </Dropdown.Toggle>
                <Dropdown.Menu id="dropdown-nav">
                  <Dropdown.Item>
                    <NavLink end to="/staking" className="nav-item nav-link text-center text-white">
                      STAKING
                    </NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : null}
          </div> */}
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
      <Authenticate />
    </div>
  )
}

export default Navbar
