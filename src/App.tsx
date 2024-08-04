import React, { lazy, Suspense } from 'react'
// libs
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom'
// assets
import './App.css'
import { Layout } from './layout'
// Pages
const DashboardPage = lazy(() => import('src/pages/Dashboard'))
const Page404 = lazy(() => import('src/pages/PageNotFound'))
// components
import { FallbackLoader } from './components/FallbackLoader'

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to={'/dashboard'} />
    },
    {
      path: '',
      element: <Suspense fallback={<FallbackLoader />}><Layout><Outlet /></Layout></Suspense>,
      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />
        }
      ]
    },
    {
      path: '/404',
      element: <Page404 />
    },
    {
      path: '*',
      element: <Navigate to={'/404'} />
    }
  ])
  return <RouterProvider router={routes} />
}

export default App
