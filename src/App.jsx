import { HalamanBeranda } from './pages/HalamanBeranda'
import { HalamanFollow } from './pages/HalamanFollow'
import { HalamanDiskusi } from './pages/HalamanDiskusi';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import { DetailHalamanRuangDiskusi } from './pages/DetailHalamanDiskusi';
import { HalamanProfile } from './pages/HalamanProfile';
import { Sidebar } from './components/sidebar/Sidebar';
import { HalamanLogin } from './pages/HalamanLogin';
import { HalamanRegister } from './pages/HalamanRegister';

function App() {
  const [isSidebarOn, setIsSidebarOn] = useState(true);
  const [authedUser, setAuthedUser] = useState(null);

  function toggleSidebar() {
    setIsSidebarOn((prevState) => { return prevState == true ? false : true })
  }

  if (authedUser == null) {
    return (
      <div className='flex bg-blue-gray-50 min-h-[100vh] items-center justify-center'>
        <Routes>
          <Route path='/*' element={<HalamanLogin />} />
          <Route path='/register' element={<HalamanRegister />} />
        </Routes>
      </div>
    )
  }

  return (
    <div className='flex bg-blue-gray-50 min-h-[100vh] '>
      <Sidebar toggleHandler={toggleSidebar} isSidebarOn={isSidebarOn} />
      <div className={`flex-1 transition-all duration-900 ease-out ${isSidebarOn ? '' : 'ml-[2rem]'
        }`}>
        < Routes>
          <Route path="/" element={<HalamanBeranda toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />} />
          <Route path="/diskusi" element={<HalamanDiskusi toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />} />
          <Route path="/diskusi/halamanDetail/:id" element={<DetailHalamanRuangDiskusi />} />
          <Route path="/follow" element={<HalamanFollow toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />} />
          <Route path="/profile" element={<HalamanProfile />} />
        </Routes >
      </div>
    </div>
  )
}


export { App }
