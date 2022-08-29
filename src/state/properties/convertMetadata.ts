import {
  Order,
  Property,
  PropertyCollection,
  PropertyInformation,
  PropertyTokenDetails,
  Metadata,
  MetadataProperty,
} from 'state/types'

export const convertOrder = (order: Order, tokenDetails: PropertyTokenDetails) => {
  const metadata: Metadata = JSON.parse(order.mintData)
  const collectionId = parseInt(order.subCollectionId)
  return convertCollectionMetadata(metadata, tokenDetails, collectionId, order.tokenId)
}

export const convertCollectionMetadata = (
  metadata: Metadata,
  tokenDetails: PropertyTokenDetails,
  collectionId: number,
  tokenId?: string,
) => {
  const information = convertMetadataForPropertyInfo(metadata, tokenDetails)
  const collection: PropertyCollection = {
    ...information,
    id: collectionId,
    totalPrice: (metadata?.properties?.starting_total_price as MetadataProperty)?.value as string,
    properties: {},
  }

  if (tokenId) {
    collection.properties[tokenId] = convertTokenMetadata(metadata, tokenDetails, collectionId, tokenId, information)
  }

  return collection
}
export const convertTokenMetadata = (
  metadata: Metadata,
  tokenDetails: PropertyTokenDetails,
  collectionId: number,
  tokenId: string,
  information?: PropertyInformation,
) => {
  const finalInformation = information ?? convertMetadataForPropertyInfo(metadata, tokenDetails)
  const property: Property = {
    ...finalInformation,
    id: tokenId,
    collectionId,
    totalPrice: (metadata?.properties?.starting_total_price as MetadataProperty)?.value as string
  }
  return property
}

export const convertMetadataForPropertyInfo = (metadata: Metadata, tokenDetails: PropertyTokenDetails) => {
  const information: PropertyInformation = {
    name: metadata.name,
    shortDescription: metadata.description,
    description: tokenDetails?.description,
    financialInformation: tokenDetails?.financialInformation,
    image: metadata.image,
    bannerImages: tokenDetails?.bannerImages,
    propertyType: (metadata?.properties?.property_type as MetadataProperty)?.value as string,
    location: (metadata?.properties?.location as MetadataProperty)?.value as string,
    bedrooms: (metadata?.properties?.bedrooms as MetadataProperty)?.value as number,
    bathrooms: (metadata?.properties?.bathrooms as MetadataProperty)?.value as number,
    garages: (metadata?.properties?.garages as MetadataProperty)?.value as number,
    size: (metadata?.properties?.size as MetadataProperty)?.value as string,
    area: (metadata?.properties?.area as MetadataProperty)?.value as string,
  }

  if (!Number.isNaN(parseFloat(information?.size.toString() ?? ''))) information.size = `${information.size} m2`

  return information
}
