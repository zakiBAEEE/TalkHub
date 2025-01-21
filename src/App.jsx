import { HalamanBeranda } from './pages/HalamanBeranda'
import { HalamanFollow } from './pages/HalamanFollow'
import HalamanDiskusi from './pages/HalamanDiskusi';
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { DetailHalamanRuangDiskusi } from './pages/DetailHalamanDiskusi';
import { HalamanProfile } from './pages/HalamanProfile';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  const [isSidebarOn, setIsSidebarOn] = useState(true);

  function toggleSidebar() {
    setIsSidebarOn((prevState) => { return prevState == true ? false : true })
  }

  return (
    <div className='flex bg-blue-gray-50 min-h-[100vh]'>
      <Sidebar toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />
      < Routes >
        <Route path="/" element={<HalamanBeranda toggleSidebar={this.toggleSidebar} isSidebarOn={this.state.isSidebarOn} />} />
        <Route path="/diskusi" element={<HalamanDiskusi toggleSidebar={this.toggleSidebar} isSidebarOn={this.state.isSidebarOn} />} />
        <Route path="/diskusi/HalamanDetail/:id" element={<DetailHalamanRuangDiskusi />} />
        <Route path="/follow" element={<HalamanFollow toggleSidebar={this.toggleSidebar} isSidebarOn={this.state.isSidebarOn} />} />
        <Route path="/profile" element={<HalamanProfile />} />
      </Routes >
    </div>
  )
}


export { App }
