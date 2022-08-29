import { PSI_API_NFT_URL } from 'config/constants/misc'

const deleteOrder = async (accessToken: string, chainId: number, orderId: number) => {
  const response = await fetch(`${PSI_API_NFT_URL}/orders/${chainId}/${orderId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
}

export default deleteOrder
