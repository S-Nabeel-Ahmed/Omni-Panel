import React, { useState } from 'react'

import { Button } from 'react-bootstrap'
import placeholderimg from '../../images/upload-placeholder.png'
import adduser from '../../images/add-user.png'
import chevup from '../../images/chev-up.png'
import chevdown from '../../images/chev-down.png'
import './Panel.scss'

const CreateProperty: React.FC = () => {

    const [COUNT_PERCENT, SETCOUNT_PERCENT] = useState(100)

    const ADD_PERCENT = () => {
        if (COUNT_PERCENT === 0) {
            SETCOUNT_PERCENT(25)
        } else if (COUNT_PERCENT === 25) {
            SETCOUNT_PERCENT(50)
        } else if (COUNT_PERCENT === 50) {
            SETCOUNT_PERCENT(75)
        } else if (COUNT_PERCENT === 75) {
            SETCOUNT_PERCENT(100)
        }
    }
    const DECREAMENT_PERCENT = () => {
        if (COUNT_PERCENT === 100) {
            SETCOUNT_PERCENT(75)
        } else if (COUNT_PERCENT === 75) {
            SETCOUNT_PERCENT(50)
        } else if (COUNT_PERCENT === 50) {
            SETCOUNT_PERCENT(25)
        } else if (COUNT_PERCENT === 25) {
            SETCOUNT_PERCENT(0)
        }
    }

    return (
        <div className='create-property'>
            <h3 className='color-blue mb-3'>Create Property</h3>
            <div className="box-styling">
                <form>
                    <h4 className='sp-h4'>Property Details:</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <label>
                                Name<br />
                                <input type='text' name='name' placeholder='Name of your property' required />
                            </label>
                            <label>
                                Start Date (Local Time)<br />
                                <input type='date' name='date' required />
                            </label>
                            <label>
                                Location<br />
                                <input type='text' name='location' placeholder='Location of your property' required />
                            </label>
                            <label>
                                Area<br />
                                <input type='text' name='area' placeholder='Total area of your property' required />
                            </label>
                            <label>
                                Size<br />
                                <input type='text' name='size' placeholder='Size of your property' required />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <label>
                                Property Type<br />
                                <select name="property-type">
                                    <option selected disabled hidden>Type of your property</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                            </label>
                            <label>
                                End Date (Local Time)<br />
                                <input type='date' name='date' required />
                            </label>
                            <label>
                                Bedrooms<br />
                                <select name="property-type">
                                    <option selected disabled hidden>No of Bedrooms</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                            </label>
                            <label>
                                Bathrooms<br />
                                <select name="property-type">
                                    <option selected disabled hidden>No of Bathrooms</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                            </label>
                            <label>
                                Garages<br />
                                <select name="property-type">
                                    <option selected disabled hidden>No of cars parking available</option>
                                    <option>option 1</option>
                                    <option>option 2</option>
                                    <option>option 3</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="box-styling mt-5">
                <h4 className='mb-3'>Upload Images</h4>
                <i>Upload all of available images of the property. Recommended size 600 x 400px.</i>
                <div className='row my-3'>
                    <div className="col-md-4 col-6 mb-3"><img src={placeholderimg} alt='placeholder' /> </div>
                    <div className="col-md-4 col-6 mb-3"><img src={placeholderimg} alt='placeholder' /> </div>
                    <div className="col-md-4 col-6 mb-3"><img src={placeholderimg} alt='placeholder' /> </div>
                    <div className="col-md-4 col-6 mb-3"><img src={placeholderimg} alt='placeholder' /> </div>
                    <div className="col-md-4 col-6 mb-3"><img src={placeholderimg} alt='placeholder' /> </div>
                    <div className="col-md-4 col-6 mb-3"><img src={placeholderimg} alt='placeholder' /> </div>
                </div>
                <button type='submit' className='--btn-1 m-0'>+ Add More</button>
            </div>
            <div className="box-styling mt-5">
                <form>
                    <h4 className='mb-4'>Property Details</h4>
                    <i>The short description is stored in the NFT properties and can’t be changed later on.</i>
                    <label className='w-100 mt-3'>
                        Short description (Less then 250 words)<br />
                        <textarea name='short-description' placeholder='Enter short Description of the NFT' required />
                    </label>
                    <label className='m-0 w-100'>
                        Full description<br />
                        <textarea className='sp-height' name='full-description' placeholder='Enter full detailed description' required />
                    </label>


                </form>
            </div>
            <div className="box-styling mt-5">
                <h4 className='mb-4'>Creators</h4>
                <i>This only needs to be changed when a project have multiple creators, which is not as same as royalties,
                    and probably will never happen.</i>
                <form className='row'>
                    <div className="col-md-8 col-12">
                        <input className='sp-input' type='text' name='token' placeholder='0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413' required />
                    </div>
                    <div className="col-md-2 col-6 mt-3 mt-md-0">
                        <div className="percentage-box">
                            <div className="iwrap">
                            <i className="p-1 text-white d-inline mb-0 pt-1">
                                {COUNT_PERCENT}%
                            </i>
                            </div>
                            <div className='percentage-button-wrap'>
                                <button id="count-btn" type='button' onClick={ADD_PERCENT}>
                                    <img src={chevup} alt='add' width='15px' height='15px' />
                                </button>
                                <button id="count-btn" type='button' onClick={DECREAMENT_PERCENT}>
                                    <img src={chevdown} alt='subtract' width='15px' height='15px' />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 col-6 mt-3 mt-md-0">
                        <button type='submit' className='--btn-1 add-user'>
                            <img src={adduser} alt='adduser' width='31px' height='31px' />
                        </button>
                    </div>


                </form>
            </div>
            <button type='submit' className='--btn-1 mx-0 my-5'>Create NFT</button>

        </div>
    )
}

export default CreateProperty