import { HalamanBeranda } from './pages/HalamanBeranda'
import { HalamanFollow } from './pages/HalamanFollow'
import { HalamanDiskusi } from './pages/HalamanDiskusi'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HalamanBeranda />} />
      <Route path="/diskusi" element={<HalamanDiskusi />} />
      <Route path="/follow" element={<HalamanFollow />} />
    </Routes>
  )
}

export default App
