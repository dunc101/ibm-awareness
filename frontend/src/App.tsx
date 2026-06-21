import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import TypesPage from './pages/TypesPage'
import StagesPage from './pages/StagesPage'
import TipsEarlyPage from './pages/TipsEarlyPage'
import TipsMiddlePage from './pages/TipsMiddlePage'
import TipsAdvancedPage from './pages/TipsAdvancedPage'
import TipsGeneralPage from './pages/TipsGeneralPage'
import AdvancedOverviewPage from './pages/AdvancedOverviewPage'
import AdvancedTravelPage from './pages/AdvancedTravelPage'
import AdvancedEquipmentPage from './pages/AdvancedEquipmentPage'
import AdvancedCaregivingPage from './pages/AdvancedCaregivingPage'
import AdvancedBathroomPage from './pages/AdvancedBathroomPage'
import ResourcesPage from './pages/ResourcesPage'
import JustDiagnosedPage from './pages/JustDiagnosedPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/types" element={<TypesPage />} />
            <Route path="/stages" element={<StagesPage />} />
            <Route path="/tips" element={<TipsEarlyPage />} />
            <Route path="/tips/early" element={<TipsEarlyPage />} />
            <Route path="/tips/middle" element={<TipsMiddlePage />} />
            <Route path="/tips/advanced" element={<TipsAdvancedPage />} />
            <Route path="/tips/general" element={<TipsGeneralPage />} />
            <Route path="/advanced" element={<AdvancedOverviewPage />} />
            <Route path="/advanced/travel" element={<AdvancedTravelPage />} />
            <Route path="/advanced/equipment" element={<AdvancedEquipmentPage />} />
            <Route path="/advanced/caregiving" element={<AdvancedCaregivingPage />} />
            <Route path="/advanced/bathroom" element={<AdvancedBathroomPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/just-diagnosed" element={<JustDiagnosedPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
