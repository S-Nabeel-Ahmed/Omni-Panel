import { toastError } from 'state/toasts'
import { Order } from 'state/types'
import { AppDispatch, RootState } from '../store'
import { ordersLoadStart, ordersLoadSucceeded, ordersLoadFailed, removeOrder } from '.'
import { getOrders, getOrder } from './getOrders'
import addOrders from './addOrders'
import updateOrder from './updateOrder'
import deleteOrder from './deleteOrder'

// Thunks

export const getMarketplaceOrders =
  (chainId?: number, wallet?: string, collectionIds?: string[], tokenIds?: string[]) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      if (getState().marketplace.isLoading) return
      const finalChainId = chainId && chainId > 0 ? chainId : parseInt(process.env.REACT_APP_CHAIN_ID)
      const accessToken = getState().user?.accessToken
      dispatch(ordersLoadStart())
      const orders = await getOrders(finalChainId, accessToken, wallet, collectionIds, tokenIds)
      dispatch(ordersLoadSucceeded(orders))
    } catch (error: any) {
      dispatch(toastError('Error retrieving marketplace orders', error?.message))
      dispatch(ordersLoadFailed(error?.message))
    }
  }

export const getMarketplaceOrder =
  (chainId: number, orderId: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      if (getState().marketplace.isLoading) return
      const finalChainId = chainId && chainId > 0 ? chainId : parseInt(process.env.REACT_APP_CHAIN_ID)
      const accessToken = getState().user?.accessToken
      dispatch(ordersLoadStart())
      const order = await getOrder(finalChainId, orderId, accessToken)
      dispatch(ordersLoadSucceeded([order]))
    } catch (error: any) {
      dispatch(toastError('Error retrieving marketplace order', error?.message))
      dispatch(ordersLoadFailed(error?.message))
    }
  }

export const addMarketplaceOrders =
  (orders: Partial<Order>[]) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const accessToken = getState().user?.accessToken
      dispatch(ordersLoadStart())
      const addedOrders = await addOrders(accessToken, orders)
      dispatch(ordersLoadSucceeded(addedOrders))
    } catch (error: any) {
      dispatch(toastError('Error adding marketplace order', error?.message))
      dispatch(ordersLoadFailed(error?.message))
    }
  }

export const updateMarketplaceOrder =
  (chainId: number, orderId: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const finalChainId = chainId && chainId > 0 ? chainId : parseInt(process.env.REACT_APP_CHAIN_ID)
      const accessToken = getState().user?.accessToken
      dispatch(ordersLoadStart())
      const order = await updateOrder(accessToken, finalChainId, orderId)
      if (order.isFulFilled) dispatch(removeOrder(order.id))
      else dispatch(ordersLoadSucceeded([order]))
    } catch (error: any) {
      dispatch(toastError('Error retrieving marketplace order', error?.message))
      dispatch(ordersLoadFailed(error?.message))
    }
  }

export const deleteMarketplaceOrder =
  (chainId: number, orderId: number) => async (dispatch: AppDispatch, getState: () => RootState) => {
    try {
      const finalChainId = chainId && chainId > 0 ? chainId : parseInt(process.env.REACT_APP_CHAIN_ID)
      const accessToken = getState().user?.accessToken
      dispatch(ordersLoadStart())
      await deleteOrder(accessToken, finalChainId, orderId)
      dispatch(removeOrder(orderId))
    } catch (error: any) {
      dispatch(toastError('Error retrieving marketplace order', error?.message))
      dispatch(ordersLoadFailed(error?.message))
    }
  }
