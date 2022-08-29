import React from 'react'
import bed from '../../images/Bed.png'
import bath from '../../images/Bath.png'
import drag from '../../images/Drag.png'


interface property {
  img: string;
  name: string;
  bedroom: string;
  bathroom: string;
  area: string;
}


const PropertyCard:React.FC <property> =({img, name,bedroom,bathroom,area})=>{ 
  // const {img, name,bedroom,bathroom,area} = props

  return (
    <div className='row property-card entry-row'>
      <div className="col-3 p-0"><img className='property-img' src ={img} alt='property' /></div>
      <div className="col-9 ps-5 d-flex flex-column justify-content-between">
        <h3 className='color-golden'>{name}</h3>
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <span className='d-flex flex-row align-items-center'>
                <img className='propert-card-icon' src={bed} alt='bed' />
                Bedrooms:
            </span>
        {bedroom}
        </div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <span className='d-flex flex-row align-items-center'>
                <img className='propert-card-icon' src={bath} alt='bath' />
                Bathrooms:
            </span>
        {bathroom}
        </div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
            <span className='d-flex flex-row align-items-center'>
                <img className='propert-card-icon' src={drag} alt='drag' />
                Area:
            </span>
            {area} m2
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
