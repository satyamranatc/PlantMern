import React from 'react'

import NavBar from "./components/NavBar.jsx"
import PlantManager from "./pages/PlantManager.jsx"

import {BrowserRouter, Routes, Route} from "react-router-dom"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<PlantManager />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
