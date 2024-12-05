import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import HomePage from './Pages/HomePage'
// import ListPokePage from './Pages/ListPokePage'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/allPoke" element={<ListPokePage />} /> */}
      </Routes>
    </Router>  
    </>
  )
}

export default App
