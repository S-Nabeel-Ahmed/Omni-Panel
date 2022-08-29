import Loader from 'components/LoaderCircle'
import useAuth from 'hooks/useAuth'
import { useActiveWeb3React } from 'hooks/web3'
import React from 'react'
import { useLogin, useLogout } from 'state/hooks'
import { useWalletModal } from '../WalletModal'

const Authenticate: React.FC = () => {
  const { account } = useActiveWeb3React()
  const { connect } = useAuth()
  const logout = useLogout()

  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(connect, logout, account)
  const { isLoggedIn, isLoggingIn, user, login } = useLogin()

  let displayName = user?.username
  if (!displayName) {
    displayName = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null
  }

  return (
    <div className="authentication">
      {isLoggingIn ? (
        <Loader />
      ) : account ? (
        isLoggedIn ? (
          <button
            type="submit"
            className="btn btn-outline-light authenticate-btn my-2 my-sm-0 px-4 btn-lg shadow-none"
            onClick={() => {
              onPresentAccountModal()
            }}
          >
            {displayName}
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-outline-light authenticate-btn my-2 my-sm-0 px-4 btn-lg shadow-none"
            onClick={() => {
              login()
            }}
          >
            Login
          </button>
        )
      ) : (
        <button
          type="submit"
          className="btn btn-outline-light my-2 authenticate-btn my-sm-0 px-4 btn-lg shadow-none"
          onClick={() => {
            onPresentConnectModal()
          }}
        >
          Connect
        </button>
      )}
    </div>
  )
}

export default Authenticate
