import React from 'react'
import { isMobile } from 'react-device-detect'
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery'
import property1 from '../../images/1.jpg'
import property2 from '../../images/2.jpg'
import property3 from '../../images/3.jpg'
import property4 from '../../images/4.jpg'
import pdf from '../../images/pdf.png'
import msword from '../../images/msword.png'
import download from '../../images/download.png'

import './Detail.css'
import '../Home/Home.css'

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];


const Detail: React.FC = () => {

    return (
        <div className="container detail-page">
            <h2 className='text-center my-5 color-blue'>OMNI, Spain - Property #001</h2>
            <div className="fluid-container">
                <div className="mb-5 detail-slider-container">
                    <ImageGallery
                        items={images}
                        thumbnailPosition={isMobile ? 'bottom' : 'right'}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        autoPlay
                    />
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-md-6">
                    <h3 className="color-golden text-center">NFT Information</h3>
                    <div className='box-styling profile-detail position-relative'>
                        <div>
                            <h3 className='color-golden'>Property details:</h3>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Property ID : </span>
                                <span>1</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Type of property :</span>
                                <span>Appartment</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Bedrooms :</span>
                                <span>2</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Bathrooms :</span>
                                <span>2</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Garage</span>
                                <span>2</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Property Size :</span>
                                <span>172 m2</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Property Status : </span>
                                <span>For Sale</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Area:</span>
                                <span>FCosta del sol, Spain</span>
                            </div>
                            <hr className="row-hr" />
                        </div>
                        <div>
                            <h3 className='color-golden'>Investment Information:</h3>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Monthly rent peak season :</span>
                                <span>$4,922.00</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Monthly rent low/mid season :</span>
                                <span>$1,445.00</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Monthly net profit (average) :</span>
                                <span>$2,041.67</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Annual rental yield per token :</span>
                                <span>5.5%</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Re-valuation property 4.5 years :</span>
                                <span>$513,600.00</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Monthly costs :</span>
                                <span>$920.00</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Annual rent :</span>
                                <span> $35,500.00</span>
                            </div>
                            <div className='d-flex flex-row justify-content-between align-items-center entry-row'>
                                <span>Annual net profit :</span>
                                <span>$24,500.00</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0">
                    <h3 className="color-golden text-center">NFT Documents</h3>
                    <div className='box-styling profile-detail position-relative p-3'>
                        <h3 className='color-golden mt-3'>All Files</h3>
                        <div className='files-row d-flex flex-row justify-content-between align-items-center'>
                            <img src={pdf} alt='pdf' width='40px' />
                            <span>
                                <b>License Agreement.pdf</b><br />
                                <i>Size 1.2 MB</i>
                            </span>
                            <span>
                                <i>02.07.2022</i><br /><br />
                            </span>
                            {/* <a href='#'> */}
                            <img src={download} alt='download' />
                            {/* </a> */}
                        </div>
                        <div className='files-row d-flex flex-row justify-content-between align-items-center'>
                            <img src={msword} alt='msword' width='40px' />
                            <span>
                                <b>Property details.docs</b><br />
                                <i>Size 600 KB</i>
                            </span>
                            <span>
                                <i>02.07.2022</i><br /><br />
                            </span>
                            {/* <a href='#'> */}
                            <img src={download} alt='download' />
                            {/* </a> */}
                        </div>
                        <div className='files-row d-flex flex-row justify-content-between align-items-center'>
                            <img src={pdf} alt='pdf' width='40px' />
                            <span>
                                <b>License Agreement.pdf</b><br />
                                <i>Size 1.2 MB</i>
                            </span>
                            <span>
                                <i>02.07.2022</i><br /><br />
                            </span>
                            {/* <a href='#'> */}
                            <img src={download} alt='download' />
                            {/* </a> */}
                        </div>
                        <div className='files-row d-flex flex-row justify-content-between align-items-center'>
                            <img src={msword} alt='msword' width='40px' />
                            <span>
                                <b>Property details.docs</b><br />
                                <i>Size 600 KB</i>
                            </span>
                            <span>
                                <i>02.07.2022</i><br /><br />
                            </span>
                            {/* <a href='#'> */}
                            <img src={download} alt='download' />
                            {/* </a> */}
                        </div>
                        <div className='files-row d-flex flex-row justify-content-between align-items-center'>
                            <img src={pdf} alt='pdf' width='40px' />
                            <span>
                                <b>License Agreement.pdf</b><br />
                                <i>Size 1.2 MB</i>
                            </span>
                            <span>
                                <i>02.07.2022</i><br /><br />
                            </span>
                            {/* <a href='#'> */}
                            <img src={download} alt='download' />
                            {/* </a> */}
                        </div>
                        <div className='files-row d-flex flex-row justify-content-between align-items-center'>
                            <img src={msword} alt='msword' width='40px' />
                            <span>
                                <b>Property details.docs</b><br />
                                <i>Size 600 KB</i>
                            </span>
                            <span>
                                <i>02.07.2022</i><br /><br />
                            </span>
                            {/* <a href='#'> */}
                            <img src={download} alt='download' />
                            {/* </a> */}
                        </div>
                        <button className='--btn-1 mt-3 mb-4' type='submit'>Download all as Zip <img src={download} alt='download' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
