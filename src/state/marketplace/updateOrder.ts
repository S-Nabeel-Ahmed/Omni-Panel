import { PSI_API_NFT_URL } from 'config/constants/misc'
import { Order } from 'state/types'

const updateOrder = async (accessToken: string, chainId: number, orderId: number): Promise<Order> => {
  const response = await fetch(`${PSI_API_NFT_URL}/orders/${chainId}/${orderId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.json()
}

export default updateOrder
