import React from 'react'
import usePageTracking from 'hooks/usePageTracking'
import { useCheckLoginLogout } from 'state/hooks'
import { useEagerConnect } from 'hooks/web3'
import CookieConsent from 'react-cookie-consent'
import { baseColors, lightColors } from 'style/theme/colors'
// import ResetCSS from './style/ResetCSS'
import GlobalStyle from './style/Global'
import ToastListener from './components/Toast/ToastListener'
import Web3ReactManager from './components/Web3ReactManager'
import Layout from './views/Layout'

import './App.scss'

const App: React.FC = () => {
  usePageTracking()
  useEagerConnect()
  useCheckLoginLogout()

  return (
    <div className="app">
      {/* <ResetCSS /> */}
      <GlobalStyle />
      <Web3ReactManager>
        <Layout />
      </Web3ReactManager>
      <ToastListener />

      <CookieConsent
        location="bottom"
        buttonText="Sure!"
        cookieName="omniCookiesAccepted"
        style={{ background: baseColors.primary, justifyContent: 'center' }}
        contentStyle={{ maxWidth: '1200px' }}
        buttonStyle={{
          background: lightColors.textSubtle,
          color: 'white',
          fontSize: '16px',
          borderRadius: '0.3rem',
        }}
      >
        This website uses cookies to enhance the user experience.{' '}
        {/* <span style={{ fontSize: '10px' }}>This bit of text is smaller :O</span> */}
      </CookieConsent>
    </div>
  )
}

export default React.memo(App)
