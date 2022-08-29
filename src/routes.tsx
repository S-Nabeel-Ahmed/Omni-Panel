import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('./views/Home'))
const Detail = lazy(() => import('./views/Detail'))

const PrivacyPolicy = lazy(() => import('./views/PrivacyPolicy'))
const TermsAndCondition = lazy(() => import('./views/TermsAndCondition'))
const Panel = lazy(() => import('./views/Panel'))

const NotFound = lazy(() => import('./views/NotFound'))

export interface NavigationRouteObject extends RouteObject {
  name?: string
}

export const routes: NavigationRouteObject[] = [
  {
    path: '/',
    name: 'DASHBOARD',
    element: <Home />,
  },
  
  
  {
    path: '/detail',
    name: 'DETAIL',
    element: <Detail />,
  },
  {
    path: '/panel',
    name: 'PANEL',
    element: <Panel />,
  },

  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
  {
    path: '/terms-and-condition',
    element: <TermsAndCondition />,
  },

  {
    path: '*',
    element: <NotFound />,
  },
]
