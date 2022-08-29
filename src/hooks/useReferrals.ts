import { ZERO_ADDRESS } from 'config/constants/misc'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NaaSRoyaltiesProviderAbi from 'config/abi/NaaSRoyaltiesProvider.json'
import { toastError } from 'state/actions'
import { useLoggedInUser } from 'state/hooks'
import { ReferralInformation } from 'state/types'
import { getNaaSAddress } from 'utils/addressHelpers'
import { generateReferralId, getReferralInformation, getReferrerAddress, registerReferrer } from 'utils/apiHelper'
import { handleTransactionCall } from 'utils/callHelpers'
import { Call, multicall } from 'utils/multicall'
import { useRoyaltiesProviderContract } from './useContract'

// eslint-disable-next-line import/prefer-default-export
export const useReferrals = () => {
  const { accessToken, account } = useLoggedInUser()
  const dispatch = useDispatch()
  const royaltiesProvider = useRoyaltiesProviderContract()
  const [information, setInformation] = useState<ReferralInformation>()
  const [loading, setLoading] = useState(false)
  const naasAddress = getNaaSAddress()

  useEffect(() => {
    const ensureInformation = async () => {
      try {
        if (royaltiesProvider && naasAddress && account) {
          setLoading(true)
          const _information = await getReferralInformation(accessToken)
          _information.referralsOnChain = (_information.referrals ?? []).map((r) => ({
            address: r,
            registered: false,
          }))

          let referrerOnChain = await royaltiesProvider.tokenReferrers(naasAddress, account)
          referrerOnChain = referrerOnChain !== ZERO_ADDRESS ? referrerOnChain : null
          setInformation({ ..._information, referrerOnChain })
          setLoading(false)

          const calls: Call[] = []
          for (const referral of _information.referralsOnChain) {
            calls.push({
              address: royaltiesProvider.address,
              name: 'tokenReferrers',
              params: [naasAddress, referral.address],
            })
          }

          if (calls.length > 0) {
            const results = await multicall(NaaSRoyaltiesProviderAbi, calls)
            for (let idx = 0; idx < results.length; idx++) {
              _information.referralsOnChain[idx].registered = results[idx]?.toLowerCase() === account?.toLowerCase()
            }
            setInformation({ ..._information })
          }
        }
      } finally {
        setLoading(false)
      }
    }
    if (accessToken) ensureInformation()
  }, [accessToken, naasAddress, account, royaltiesProvider])

  const generateReferralIdCB = useCallback(async () => {
    if (dispatch && accessToken) {
      try {
        setLoading(true)
        const referralId = await generateReferralId(accessToken)
        setInformation({ ...information, referralId })
      } catch (error: any) {
        console.error(error)
        dispatch(toastError('Error generating referral ID', error?.message))
      } finally {
        setLoading(false)
      }
    }
    return false
  }, [dispatch, accessToken, information])

  const registerReferrerCB = useCallback(
    async (referrer: string, executeTransaction = false) => {
      if (dispatch && accessToken) {
        try {
          setLoading(true)
          await registerReferrer(accessToken, referrer)
          setInformation({ ...information, referrer })
          if (!executeTransaction) return true

          const publicAddress = await getReferrerAddress(accessToken, referrer)
          const success = handleTransactionCall(
            () => royaltiesProvider.registerReferrer(naasAddress, publicAddress),
            dispatch,
          )
          if (success) setInformation({ ...information, referrerOnChain: referrer })
          return success
        } catch (error: any) {
          console.error(error)
          dispatch(toastError('Error registering referrer', error?.message))
        } finally {
          setLoading(false)
        }
      }
      return false
    },
    [dispatch, naasAddress, accessToken, information, royaltiesProvider],
  )

  return { loading, information, generateReferralId: generateReferralIdCB, registerReferrer: registerReferrerCB }
}
