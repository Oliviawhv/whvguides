import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'

// Lazy load employer pages — not needed for WHV visitors
const ForBusiness       = React.lazy(() => import('./pages/ForBusiness'))
const GetStarted        = React.lazy(() => import('./pages/GetStarted'))
const SubscriptionSuccess = React.lazy(() => import('./pages/SubscriptionSuccess'))
const CancelSubscription  = React.lazy(() => import('./pages/CancelSubscription'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={null}>
        <Routes>
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
