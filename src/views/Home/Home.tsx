import React from 'react'
import PropertyCard from 'components/PropertyCard/PropertyCard'
import profilepic from '../../images/profilepic.png'
import property1 from '../../images/1.jpg'
import property2 from '../../images/2.jpg'
import property3 from '../../images/3.jpg'
import property4 from '../../images/4.jpg'

import './Home.css'


const Home: React.FC = () => {
  return (
    <div className="container">
      <h2 className='text-center my-5 color-blue'>Welcome John</h2>
      <div className="row mb-5">
        <div className="col-md-7">
          <h3 className="text-center color-golden mb-3">My Properties</h3>
          <div className='home-listing-column box-styling'>
            <form className='mb-3'>
              <input type='text' name='search' placeholder='Search property name ' />
              <button type='submit' aria-label="Search" className="search-btn" />
            </form>
            <b className='color-golden'>7 properties</b>
            <div>
              <PropertyCard
              img={property1}
              name='Property #001'
              bedroom='02'
              bathroom='01'
              area='532'
              />
              <PropertyCard
              img={property2}
              name='Property #002'
              bedroom='02'
              bathroom='01'
              area='532'
              />
              <PropertyCard
              img={property3}
              name='Property #003'
              bedroom='02'
              bathroom='01'
              area='532'
              />
              <PropertyCard
              img={property4}
              name='Property #004'
              bedroom='02'
              bathroom='01'
              area='532'
              />
              
              
            </div>
          </div>
        </div>
        <div className="col-md-5">
        <h3 className="text-center color-golden mb-3 mt-md-0 mt-4">My Information</h3>
          <div className='box-styling profile-detail position-relative'>
            <button className='edit-btn' type='submit' aria-label='edit' />
            <h3 className='color-golden'>Basic details</h3>
            <img className='profile-pic' src={profilepic} alt='profile' />
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Name:</span>
            <span>John Doe</span>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Email:</span>
            <span>Johndoe@gmail.com</span>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Wallet Address:</span>
            <span>0xcd.........f168</span>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Properties:</span>
            <span>  7</span>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Location:   </span>
            <span> Spain</span>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Phone: </span>
            <span>+34 625 273 282</span>
            </div>
            
          </div>
          <div className='box-styling kyc-detail position-relative mt-5'>
            <h3 className='color-golden'>KYC details</h3>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Basic Info</span>
            <span className='kyc-status done' />
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Official Id Card</span>
            <span className='kyc-status done' />
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center entry-row px-3'>
            <span>Facial Verification </span>
            <span className='kyc-status not-done' />
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
