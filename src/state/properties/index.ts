import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { isEmpty, isUndefined, merge } from 'lodash'
import { tokenIdValues } from 'utils/naasHelpers'
import { PropertyCollection, PropertiesState, Order, Token, Collection } from '../types'
import { convertCollectionMetadata, convertOrder, convertTokenMetadata } from './convertMetadata'

const initialState: PropertiesState = {
  data: {},
  collections: {},
}

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    propertiesForCollections: (state, action: PayloadAction<Collection[]>) => {
      const properties: { [key: string]: PropertyCollection } = {}
      action?.payload?.forEach(async (collection) => {
        if (collection.metadata) {
          const collectionId = parseInt(collection.subCollectionId)
          properties[collectionId] = convertCollectionMetadata(
            collection.metadata,
            collection.tokenDetails,
            collectionId,
          )
        }
      })
      setCollectionToCurrentState(state, properties)
    },
    propertiesForTokens: (state, action: PayloadAction<Token[]>) => {
      const properties: { [key: string]: PropertyCollection } = {}
      action?.payload?.forEach(async (token) => {
        Object.values(token?.nfts ?? {}).forEach((nft) => {
          if (nft.metadata) {
            const tokenIdData = tokenIdValues(nft.tokenId)
            if (isUndefined(state.data[nft.tokenId])) {
              if (isUndefined(properties[tokenIdData.collectionId])) {
                properties[tokenIdData.collectionId] = convertCollectionMetadata(
                  nft.metadata,
                  nft?.tokenDetails,
                  tokenIdData.collectionId,
                  nft.tokenId,
                )
              } else {
                properties[tokenIdData.collectionId].properties[nft.tokenId] = convertTokenMetadata(
                  nft.metadata,
                  nft?.tokenDetails,
                  tokenIdData.collectionId,
                  nft.tokenId,
                )
              }
            }
          }
        })
      })
      setCollectionToCurrentState(state, properties)
    },
    propertiesForOrders: (state, action: PayloadAction<{ orders: Order[]; collection?: Collection }>) => {
      const properties: { [key: string]: PropertyCollection } = {}
      action?.payload?.orders?.forEach(async (order) => {
        if (!isEmpty(order.mintData)) {
          if (isUndefined(state.data[parseInt(order.subCollectionId)])) {
            properties[parseInt(order.subCollectionId)] = convertOrder(order, action?.payload?.collection?.tokenDetails)
          }
        } else {
          // todo, create based on metadata?
        }
      })
      setCollectionToCurrentState(state, properties)
    },
  },
})

const setCollectionToCurrentState = (state: PropertiesState, orderInfo: { [key: string]: PropertyCollection }) => {
  if (!orderInfo || isEmpty(orderInfo)) return
  // eslint-disable-next-line no-param-reassign
  state.data = Object.values(orderInfo).reduce((props, value) => ({ ...props, ...value.properties }), state.data)
  // eslint-disable-next-line no-param-reassign
  state.collections = merge(state.collections, orderInfo)
}

// Actions
export const { propertiesForCollections, propertiesForTokens, propertiesForOrders } = propertiesSlice.actions

export default propertiesSlice.reducer
