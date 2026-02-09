import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import MapPage from './pages/MapPage'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/notfound'
import "leaflet/dist/leaflet.css";
import { Toaster } from 'sonner'
import ProtectedRoute from './components/protected_route'

function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/maps' element={
            <ProtectedRoute>
              <MapPage />
            </ProtectedRoute>
          } />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
