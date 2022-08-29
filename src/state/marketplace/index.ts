import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cloneDeep } from 'lodash'
import moment from 'moment'
import { MarketplaceState, Order } from '../types'

const initialState: MarketplaceState = {
  data: {},
  collectionData: {},
  isLoading: false,
}

export const propertiesSlice = createSlice({
  name: 'marketplace',
  initialState,
  reducers: {
    removeOrder: (state, action: PayloadAction<number>) => {
      const { data, collectionData } = state
      const order = state.data[action.payload]
      delete collectionData[order.subCollectionId]
      delete data[order.id]
      return { ...state, isLoading: false, data, collectionData }
    },
    ordersLoadStart: (state) => {
      return { ...state, isLoading: true }
    },
    ordersLoadSucceeded: (state, action: PayloadAction<Order[]>) => {
      if (!action.payload) return state
      const orders = action.payload?.map((order) => convertOrderObject(order)) ?? []
      return {
        ...state,
        isLoading: false,
        data: orders.reduce((data, val) => ({ ...data, [val.id]: val }), state.data),
        collectionData: orders.reduce(
          (data, val) => ({ ...data, [val.subCollectionId]: { ...data[val.subCollectionId], [val.id]: val } }),
          state.collectionData,
        ),
      }
    },
    ordersLoadFailed: (state, action: PayloadAction<string>) => {
      return { ...state, isLoading: false, loadingError: action.payload }
    },
  },
})

const convertOrderObject = (order: Order) => {
  const returnOrder = cloneDeep(order)
  returnOrder.dataObject = JSON.parse(returnOrder.data)
  returnOrder.assetDataObject = JSON.parse(returnOrder.assetData)
  returnOrder.mintDataObject = JSON.parse(returnOrder.mintData)
  returnOrder.counterAssetsObject = JSON.parse(returnOrder.counterAssets)

  returnOrder.createdAtDate = moment(returnOrder.createdAt)
  returnOrder.updatedAtDate = moment(returnOrder.updatedAt)

  const startDate = parseInt(returnOrder?.dataObject?.listingTime.toString() ?? '0')
  returnOrder.startDate = startDate > 0 ? moment.unix(startDate) : returnOrder.createdAtDate.clone()
  const endDate = parseInt(returnOrder?.dataObject?.expirationTime.toString() ?? '0')
  returnOrder.endDate = endDate > 0 ? moment.unix(endDate) : undefined

  return returnOrder
}

// Actions
export const { removeOrder, ordersLoadStart, ordersLoadSucceeded, ordersLoadFailed } = propertiesSlice.actions

export default propertiesSlice.reducer
