import React from 'react'
import Select from 'react-select'

import { Button } from 'react-bootstrap'

const prices = [
  { value: 'all', label: 'All' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
]
const categories = ['Property Type', 'Bedrooms', 'Bathrooms']

const HomeDropDown: React.FC = () => (
  <div id="homedropdownposition">
    <div className="d-flex justify-content-between p-3" id="homedropdownbox">
      <input placeholder="Property ID" className="ps-2" id="home-dropdown-input" />
      {categories.map((category, index) => (
        <Select
          key={`category-${index + 1}`}
          className="homedropdownitems mx-1"
          options={prices}
          placeholder={category}
        />
      ))}
      <Button className="text-white px-5" id="homedropdown-btn">
        Search
      </Button>
    </div>
  </div>
)

export default HomeDropDown
