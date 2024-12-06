import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
import ListPokePage from './Pages/ListPokePage'
import RdmPokePage from './Pages/RdmPokePage'
import SearchResultPage from './Pages/SearchResult'
import ShowPokePage from './Pages/ShowPokePage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allpoke" element={<ListPokePage />} />
        <Route path="/rdmpoke" element={<RdmPokePage />} />
        <Route path="/showsoke/:id" element={<ShowPokePage />} /> 
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App
