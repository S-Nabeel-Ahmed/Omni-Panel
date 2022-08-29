import { BigNumberish } from '@ethersproject/bignumber'
import { PropertyCreationInformation, Metadata } from 'state/types'

// eslint-disable-next-line import/prefer-default-export
export const getIPFSMetadata = (property: Partial<PropertyCreationInformation>, nftPrice?: BigNumberish): Metadata => {
  return {
    name: property.name,
    description: property.shortDescription,
    image: `{{image[0]}}`,
    background_color: '#ffffff',
    properties: {
      starting_total_price: {
        name: 'Starting total price',
        value: property.totalPrice?.toString(),
      },
      starting_token_price: nftPrice
        ? {
            name: 'Starting token price',
            value: nftPrice.toString(),
          }
        : undefined,
      property_type: {
        name: 'Property type',
        value: property.propertyType,
      },
      location: {
        name: 'Location',
        value: property.location,
      },
      bedrooms: {
        name: 'Bedrooms',
        value: property.bedrooms,
      },
      bathrooms: {
        name: 'Bathrooms',
        value: property.bathrooms,
      },
      garages: {
        name: 'Garages',
        value: property.garages,
      },
      size: {
        name: 'Size',
        value: property.size,
      },
      area: {
        name: 'Area',
        value: property.area,
      },
    },
  }
}
