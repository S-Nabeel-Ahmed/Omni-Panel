import React from 'react'
import styled from 'styled-components'
import { connectorLocalStorageKey, ConnectorNames } from 'config/constants/wallets'
import { Button, ButtonProps } from '../Button'
import Text from '../Text'
import MoreHorizontal from './icons/MoreHorizontal'
import { walletLocalStorageKey } from './config'
import { Login, Config } from './types'

interface Props {
  walletConfig: Config
  login: Login
  onDismiss: () => void
}

const WalletButton = styled(Button).attrs({ width: '100%', variant: 'text', py: '16px' })`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`

export const MoreWalletCard: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <WalletButton variant="tertiary" {...props}>
      <MoreHorizontal width="40px" mb="8px" color="textSubtle" />
      <Text color="tertiary" fontSize="14px">
        More
      </Text>
    </WalletButton>
  )
}

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss }) => {
  const { title, icon: Icon } = walletConfig

  return (
    <WalletButton
      variant="tertiary"
      onClick={() => {
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

        // Since iOS does not support Trust Wallet we fall back to WalletConnect
        if (walletConfig.title === 'Trust Wallet' && isIOS) {
          login(ConnectorNames.WalletConnect)
        } else {
          login(walletConfig.connectorId)
        }

        localStorage.setItem(walletLocalStorageKey, walletConfig.title)
        localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId)
        onDismiss()
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="40px" mb="8px" />
      <Text color="tertiary" fontSize="14px">
        {title}
      </Text>
    </WalletButton>
  )
}

export default WalletCard
