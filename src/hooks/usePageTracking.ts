import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import { useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

function initialiseAnalytics() {
  let browserType: string | undefined
  if (isMobile) {
    browserType = 'web3' in window || 'ethereum' in window ? 'mobileWeb3' : undefined
  }

  const GOOGLE_ANALYTICS_ID: string | undefined = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
  if (GOOGLE_ANALYTICS_ID) {
    ReactGA.initialize(GOOGLE_ANALYTICS_ID, { gaOptions: { storeGac: false } })
    if (browserType) ReactGA.set({ customBrowserType: browserType })
  } else {
    ReactGA.initialize('test', { testMode: true })
  }
}

const usePageTracking = () => {
  const location = useLocation()
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    initialiseAnalytics()
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search)
    }
  }, [initialized, location])
}

export default usePageTracking
