import { useWeb3React } from '@web3-react/core'

const useActiveChainId = () => {
  const { chainId } = useWeb3React()
  return chainId ?? parseInt(process.env.REACT_APP_CHAIN_ID)
}

export default useActiveChainId
