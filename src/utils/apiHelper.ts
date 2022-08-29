import { PSI_API_NFT_URL } from 'config/constants/misc'
import { isEmpty } from 'lodash'
import { Collection, IpfsMetadata, PropertyTokenDetails, RecursivePartial, ReferralInformation } from 'state/types'
// import { UserData } from 'views/Properties/Details/ContactUs'

// Marketplace

/**
 * @param accessToken login accessToken
 * @param chainId current connected chain id
 * @param tokenAddress NFT token address
 * @param collectionId optional sub collection id, 0 is default for the whole collection
 * @param amount amount of id's to increment
 * @returns number of the new latest id
 */
export const incrementId = async (
  accessToken: string,
  chainId: number,
  tokenAddress: string,
  collectionId = 0,
  amount = 1,
): Promise<number> => {
  let apiUrl = `${PSI_API_NFT_URL}/collections/${chainId}/${tokenAddress}`
  if (collectionId > 0) apiUrl += `/${collectionId}`
  if (amount > 0) apiUrl += `?increment=${amount}`

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  const collection: Collection = await response.json()
  return collection.currentId
}

/**
 * @param chainId current connected chain id
 * @param tokenAddress NFT token address
 * @param collectionId optional sub collection id, 0 is default for the whole collection
 * @returns number of the new latest id
 */
export const getCollectionsWithInfo = async (
  chainId: number,
  tokenAddress: string,
  collectionId?: string,
): Promise<Collection[]> => {
  let apiUrl = `${PSI_API_NFT_URL}/collections/${chainId}/${tokenAddress}`
  if (!isEmpty(collectionId)) apiUrl += `/${collectionId}`
  const response = await fetch(`${apiUrl}?withInfo=true&withDetails=true`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.json()
}

/**
 * @param accessToken login accessToken
 * @returns number of the latest user order nonce
 */
export const getOrderNonce = async (accessToken: string): Promise<number> => {
  const response = await fetch(`${PSI_API_NFT_URL}/users/getOrderNonce`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.json()
}

/**
 * @param accessToken login accessToken
 * @returns signature for an order
 */
export const getOrderSignature = async (accessToken: string, orderId: number): Promise<string> => {
  const response = await fetch(`${PSI_API_NFT_URL}/order-signature/${orderId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.text()
}

export const addFilesForToken = async (
  accessToken: string,
  files: Blob[],
  chainId: number,
  tokenAddress: string,
  collectionId?: string,
  tokenId?: string,
  prefix?: string,
): Promise<string[]> => {
  const data = new FormData()
  files.forEach((file) => data.append('files[]', file))

  let apiUrl = `${PSI_API_NFT_URL}/files/TOKENIMAGES?chainId=${chainId}&tokenAddress=${tokenAddress}`
  apiUrl += collectionId ? `&collectionId=${collectionId}` : ''
  apiUrl += tokenId ? `&tokenId=${tokenId}` : ''
  apiUrl += prefix ? `&prefix=${prefix}` : ''

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
    body: data,
  })
  if (!response.ok) throw new Error(await response.text())
  const result = await response.json()
  return result
}

/**
 * @param accessToken login accessToken
 * @param files to add
 */
export const addFilesToIPFS = async (
  accessToken: string,
  files: Blob[],
): Promise<{ metadata: IpfsMetadata; entries: { [id: string]: string } }> => {
  const data = new FormData()
  files.forEach((file) => data.append('files[]', file))

  const response = await fetch(`${PSI_API_NFT_URL}/files/IPFS`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
    body: data,
  })
  if (!response.ok) throw new Error(await response.text())
  const result = await response.json()
  return result
}

export const setTokenDetails = async (
  accessToken: string,
  chainId: number,
  tokenAddress: string,
  collectionId: string,
  details: RecursivePartial<PropertyTokenDetails>,
) => {
  const response = await fetch(`${PSI_API_NFT_URL}/tokenDetails/${chainId}/${tokenAddress}/${collectionId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ details }),
  })
  if (!response.ok) throw new Error(await response.text())
}

export const getTokenDetails = async (
  accessToken: string,
  chainId: number,
  tokenAddress: string,
  collectionId: string,
): Promise<PropertyTokenDetails[]> => {
  const response = await fetch(`${PSI_API_NFT_URL}/tokenDetails/${chainId}/${tokenAddress}/${collectionId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.json()
}

export const getReferralInformation = async (accessToken: string): Promise<ReferralInformation> => {
  const response = await fetch(`${PSI_API_NFT_URL}/users/referralInformation`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.json()
}

export const generateReferralId = async (accessToken: string): Promise<string> => {
  const response = await fetch(`${PSI_API_NFT_URL}/users/generateReferralId`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.text()
}

export const getReferrerAddress = async (accessToken: string, referrer: string): Promise<string> => {
  const response = await fetch(`${PSI_API_NFT_URL}/users/getReferrerAddress?referrer=${referrer}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.text()
}

export const registerReferrer = async (accessToken: string, referrer: string): Promise<void> => {
  const response = await fetch(`${PSI_API_NFT_URL}/users/registerReferrer`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Func-Authorization': `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ referrer }),
  })
  if (!response.ok) throw new Error(await response.text())
}

export const postUSerMessage = async (userData): Promise<any> => {
  const response = await fetch('https://pandorahomes.es/api/marketplace_api', {
    method: 'POST',
    body: JSON.stringify({
      name: userData.name,
      email: userData.email,
      phone: userData.cellNo,
      detail: userData.message,
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  if (!response.ok) throw new Error(await response.text())
  return response.text()
}
