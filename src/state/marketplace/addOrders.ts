import { PSI_API_NFT_URL } from 'config/constants/misc'
import { Order } from 'state/types'

const addOrders = async (accessToken: string, orders: Partial<Order>[]): Promise<Order[]> => {
  const response = await fetch(`${PSI_API_NFT_URL}/orders`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ orders }),
  })
  if (!response.ok) throw new Error(await response.text())
  return response.json()
}

export default addOrders
