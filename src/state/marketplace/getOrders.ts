import { PSI_API_NFT_URL } from 'config/constants/misc'
import { isUndefined } from 'lodash'
import { Order } from 'state/types'
import { getNaaSAddress } from 'utils/addressHelpers'

export const getOrders = async (
  chainId: number,
  accessToken?: string,
  wallet?: string,
  collectionIds?: string[],
  tokenIds?: string[],
): Promise<Order[]> => {
  let uri = `${PSI_API_NFT_URL}/orders/${chainId}/${getNaaSAddress()}`
  if (!isUndefined(wallet)) uri += `/${wallet}`
  const response = await fetch(uri, {
    method: isUndefined(collectionIds) && isUndefined(tokenIds) ? 'GET' : 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(accessToken ? { 'Func-Authorization': `Bearer ${accessToken}` } : undefined),
    },
    body:
      isUndefined(collectionIds) && isUndefined(tokenIds)
        ? undefined
        : JSON.stringify({
            collectionIds,
            tokenIds,
          }),
  })
  if (!response.ok) throw new Error(await response.text())
  const { data } = (await response.json()) as { count: number; data: Order[] }
  return data
}

export const getOrder = async (chainId: number, orderId: number, accessToken?: string): Promise<Order> => {
  const response = await fetch(`${PSI_API_NFT_URL}/orders/${chainId}/${orderId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      ...(accessToken ? { 'Func-Authorization': `Bearer ${accessToken}` } : undefined),
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.json()
}
