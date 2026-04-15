import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

// Lazy load employer pages - not needed for WHV visitors
const ForBusiness       = React.lazy(() => import('./pages/ForBusiness'))
const GetStarted        = React.lazy(() => import('./pages/GetStarted'))
const SubscriptionSuccess = React.lazy(() => import('./pages/SubscriptionSuccess'))
const CancelSubscription  = React.lazy(() => import('./pages/CancelSubscription'))

// Car Transfer pages
const CarTransfer       = React.lazy(() => import('./pages/CarTransfer'))
const CarTransferLegal  = React.lazy(() => import('./pages/CarTransferLegal'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<div style={{ minHeight: '100vh', background: '#f2faf5' }} />}>
        <ScrollToTop />
        <Routes>
          {/* Car Transfer pages - standalone, no Layout wrapper */}
          <Route path="/whvguides/car"        element={<CarTransfer />} />
          <Route path="/whvguides/car/legal"  element={<CarTransferLegal />} />

          <Route element={<Layout />}>
            <Route path="/"             element={<Home />} />
            <Route path="/hire"         element={<ForBusiness />} />
            <Route path="/for-business"  element={<Navigate to="/hire" replace />} />
            <Route path="/get-started"  element={<GetStarted />} />
            <Route path="/success"      element={<SubscriptionSuccess />} />
            <Route path="/cancel"       element={<CancelSubscription />} />
            <Route path="*"             element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
