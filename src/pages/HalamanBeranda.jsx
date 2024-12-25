import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { PostinganList } from '../components/cardList/PostinganList'
import TambahPostingan from '../components/modal box/TambahPostingan'
function HalamanBeranda({ toggleSidebar, isSidebarOn }) {
    return (
        <div className='flex bg-blue-gray-50 min-h-[100vh]'>
            <Sidebar toggleSidebar={toggleSidebar} isSidebarOn={isSidebarOn} />
            <div className='mx-auto'>
                <PostinganList />
            </div>
            <TambahPostingan />
        </div>
    )
}

export { HalamanBeranda }