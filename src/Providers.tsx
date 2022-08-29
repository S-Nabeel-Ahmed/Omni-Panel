import React from 'react'
import lazy from 'react-lazy-ssr'
import { Web3ReactProvider } from '@web3-react/core'
import { Provider } from 'react-redux'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { getLibrary } from 'utils/web3React'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ModalProvider } from 'components/Modal'
import { LoaderProvider } from 'components/Loader'
import store from 'state/store'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import PageLoader from './components/PageLoader'

const Web3ReactProviderDefaultSSR = lazy(() => import('./contexts/Web3ReactProviderDefaultSSR'), {
  chunkName: 'Web3ReactProviderDefaultSSR',
  noSsr: true,
})

if (window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = true
}

const Providers: React.FC = ({ children }) => {
  return (
    <SuspenseWithChunkError fallback={<PageLoader />}>
      <SSRProvider>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Web3ReactProviderDefaultSSR getLibrary={getLibrary}>
            <Provider store={store}>
              <ThemeContextProvider>
                <RefreshContextProvider>
                  <ModalProvider>
                    <LoaderProvider>{children}</LoaderProvider>
                  </ModalProvider>
                </RefreshContextProvider>
              </ThemeContextProvider>
            </Provider>
          </Web3ReactProviderDefaultSSR>
        </Web3ReactProvider>
      </SSRProvider>
    </SuspenseWithChunkError>
  )
}

export default Providers
