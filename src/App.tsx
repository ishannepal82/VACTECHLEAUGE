import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import MapPage from './pages/MapPage'
import "leaflet/dist/leaflet.css";
import { Toaster } from 'sonner'
import HomePage from './pages/HomePage'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <>
      <Toaster position="top-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<AuthPage />}></Route>
          <Route path='/maps' element={<MapPage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
