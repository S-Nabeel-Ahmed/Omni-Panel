import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import pdf from '../../images/pdf.png'
import msword from '../../images/msword.png'
import download from '../../images/download.png'

import './Panel.scss'

const fileTypes = ["JPG", "PNG", "GIF"];

const ManageDocuments: React.FC = () => {
    // const [file, setFile] = useState(null);
    // const handleChange = (file: any) => {
    //   setFile(file);
    // };
  return (
    <div className='manage-documents'>
        <div className='d-flex flex-md-row flex-column justify-content-between align-items-center'>
            <h3 className='color-blue'>Manage Documents</h3>
            <form className='mb-3'>
              <input type='text' name='search' placeholder='Enter NFT ID' />
              <button type='submit' aria-label="Search" className="search-btn" />
            </form>
        </div>
            <div className="row mb-5">
                <div className="col-md-5">
                    <form className='select-wrapper'>
                        <select>
                            <option selected disabled hidden >Select Property (Auto Select)</option>
                            <option>option 1</option>
                            <option>option 2</option>
                            <option>option 3</option>
                        </select>
                    </form>
                    <div className='box-styling profile-detail position-relative p-3 my-3'>
                        <h3 className='color-golden mt-2 mb-4'>Upload Document</h3>
                    <div className='file-uploader-wrap mb-2'>
                    {/* <FileUploader handleChange={handleChange} name="file" types={fileTypes} /> */}
                    <FileUploader name="file" types={fileTypes} />
                    </div>
                    </div>
                    <div className='box-styling profile-detail position-relative p-3'>
                        <h3 className='color-golden mt-3'>All Documents</h3>
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
                        <div className='files-row d-flex flex-row justify-content-between align-items-center mb-1'>
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
                    </div>
                </div>
                <div className="col-md-7">
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
                            <h3 className='color-golden text-center'>Investment Information:</h3>
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
            </div>
            
    </div>
  )
}

export default ManageDocuments